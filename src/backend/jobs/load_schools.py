"""Loads school data from NYC Open Data source in s3."""

import boto3
import json
import requests

S3_BUCKET = "nyu-shortlist-school-data"
SCHOOL_OBJECT = "prod_extract/school_model.json"

recodes = dict(nyc_id="nycId", type="schoolType", borough="boroughCode")


def get_schools():
    client = boto3.client("s3")
    response = client.get_object(Bucket=S3_BUCKET, Key=SCHOOL_OBJECT)
    raw = response["Body"].read().decode("utf-8")
    records = raw.split("\n")
    result = []
    for _ in records[:5]:
        obj = json.loads(_)
        for k, v in recodes.items():
            obj[v] = obj[k]
            del obj[k]

        result.append(obj)
    return result


def add_school(obj):
    response = requests.post(
        "https://api.shortlist.nyc/create/school", data=json.dumps(obj)
    )
    if response.status_code == 200:
        print("added:", response.text)
    else:
        print("BAD", response.text)
        print("======")
        print(obj)


if __name__ == "__main__":
    schools = get_schools()
    for _ in schools:
        add_school(_)
