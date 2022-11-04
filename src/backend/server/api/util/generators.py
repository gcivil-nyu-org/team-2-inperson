import datetime as dt
import math
import uuid


def gen_uuid(length: int = None):
    if length:
        return uuid.uuid4().hex[:length]
    else:
        return uuid.uuid4().hex


def gen_ts():
    return math.floor(
        (dt.datetime.now() - dt.datetime(1970, 1, 1)).total_seconds() * 1000
    )
