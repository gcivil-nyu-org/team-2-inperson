"""Loads school dimensions and dimension values from NYC Open Data Source is s3."""

import boto3
import json
import requests

"""
TODO TODO TODO TODO TODO
I don't have time to do this right now, but this script needs some major optimization

Can someone please write a proper shortlist client library for python?
The library should have calls that allow for python objects to be used to
make the calls, but then abstract away the actual requests made to the api.shortlist.nyc.

As an example, in this script it's only sending one request per data record at a time
instead of batching (the api is constructed to semi-handle batching).  This loses
a TON of time in transit as each data point has to have the session setup/teardown.
TODO TODO TODO TODO TODO
"""

S3_BUCKET = "nyu-shortlist-school-data"
SCHOOL_DIM_OBJECT = "prod_extract/school_dim_val_model.json"


def map_school(nyc_id: str):
    pass
    response = requests.get(
        "https://api.shortlist.nyc/school/metadata", params=dict(nycId=nyc_id)
    )
    if response.status_code != 200:
        return None
    obj = json.loads(response.text)
    return obj["schoolId"]


def upsert_dim(dim_name: str, tries=0):
    if tries > 1:
        raise Exception("too many tries for dim:", dim_name)
    response = requests.get(
        "https://api.shortlist.nyc/school/dimension",
        params=dict(field=dim_name, source="open_data"),
    )
    if response.status_code != 200 or response.text == "[]":
        put_body = dict(
            dimensions=[
                dict(source="open_data", field=dim_name),
            ]
        )
        put_response = requests.post(
            "https://api.shortlist.nyc/school/dimension/upsert",
            data=json.dumps(put_body),
        )
        if put_response.status_code != 200:
            raise Exception("could not upsert:", dim_name)

        return upsert_dim(dim_name, tries + 1)
    obj = json.loads(response.text)
    return obj[0]["id"]


def upsert_dim_value(school_id: str, dim_id: str, value):
    put_body = dict(
        dimensionValues=[
            dict(schoolId=school_id, dimensionId=dim_id, value=value),
        ]
    )
    response = requests.post(
        "https://api.shortlist.nyc/school/dimension/value/upsert",
        data=json.dumps(put_body),
    )
    if response.status_code != 200:
        print("Error with:", school_id, dim_id, value)
        raise Exception("bad upsert value", response.text)


def load_school_dim_data():
    client = boto3.client("s3")
    response = client.get_object(Bucket=S3_BUCKET, Key=SCHOOL_DIM_OBJECT)
    raw = response["Body"].read().decode("utf-8")
    records = raw.split("\n")
    present_dims = dict()
    present_schools = dict()
    progress = 0
    for _ in records:
        progress += 1
        print("{:.2f}".format(progress * 100 / len(records)))
        if not _:
            continue
        obj = json.loads(_)
        file_dim = obj["dim"]
        file_school = obj["nyc_id"]
        file_value = obj["val"]

        if file_school not in present_schools:
            present_schools[file_school] = map_school(file_school)

        if file_dim not in present_dims:
            present_dims[file_dim] = upsert_dim(file_dim)

        upsert_dim_value(
            present_schools[file_school], present_dims[file_dim], file_value
        )


if __name__ == "__main__":
    load_school_dim_data()
