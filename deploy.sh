#!/usr/bin/env bash

set -o errexit
set -o pipefail

killall node || true
rm -fr build
node scripts/build.js
git branch -D build || true
git checkout -b build
git add -f build
git commit --no-gpg-sign -m build
git subtree push --prefix build origin gh-pages || \
  git push origin `git subtree split --prefix build build`:gh-pages --force
git checkout -
