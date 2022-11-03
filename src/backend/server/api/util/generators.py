import uuid


def gen_uuid(length: int = None):
    if length:
        return uuid.uuid4().hex[:length]
    else:
        return uuid.uuid4().hex
