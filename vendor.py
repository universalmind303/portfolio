
import site
import os.path
import sys


def add(folder, index=1):
  # Check if the path contains a virtualenv.
  site_dir = os.path.join(folder, 'lib', 'python' + sys.version[:3], 'site-packages')
  if os.path.exists(site_dir):
    folder = site_dir
  # Otherwise it's just a normal path, make it absolute.
  else:
    folder = os.path.join(os.path.dirname(__file__), folder)

 sys.path, remainder = sys.path[:1], sys.path[1:]
  site.addsitedir(folder)
  sys.path.extend(remainder)
