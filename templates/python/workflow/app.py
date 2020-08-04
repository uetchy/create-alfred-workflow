#!/usr/bin/env python3

import subprocess
import json
import sys


def captureShell(command):
  return subprocess.run(command, shell=True, text=True,
                        capture_output=True).stdout.split('\n')[0:-1]


def alfred(items):
  print(json.dumps({"items": items}))


if __name__ == '__main__':
  argv = sys.argv[1:]

  items = [{
      "type": "file",
      "title": "Title",
      "subtitle": "Subtitle",
      "arg": "Argument"
  }]

  alfred(items)
