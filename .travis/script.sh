#!/usr/bin/env bash

echo "Building the site..."
bundle exec jekyll build

if test -e "./_site/index.html";then
  echo "The site builds!"
else
  echo "Huh. That's odd. The site doesn't seem to build."
  exit 1
fi

echo "Testing the rendered HTML files to make sure they're accurate..."
bundle exec htmlproofer ./_site
