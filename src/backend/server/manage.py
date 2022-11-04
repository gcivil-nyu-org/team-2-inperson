#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import argparse
from dotenv import load_dotenv

_parser = argparse.ArgumentParser()
_parser.add_argument("--prod", dest="prod", action="store_true")
_parser.add_argument("--env_path", dest="dot_env", action="store")


def main(main_args, remaining_args):
    load_dotenv(main_args.dot_env)

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line([sys.argv[0]] + remaining_args)


if __name__ == "__main__":
    _args = _parser.parse_known_args()
    main(_args[0], _args[1])
