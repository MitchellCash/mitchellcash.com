#!/usr/bin/env bash

# https://stackoverflow.com/questions/48956465/favicon-standard-2023-svg-ico-png-and-dimensions

# Apple icon.
inkscape \
  --export-type png \
  -o src/app/apple-icon.png \
  -d 72 \
  -w 180 \
  -h 180 \
  public/sad-mac.svg

# Favicon.
inkscape \
  --export-type png \
  -o src/app/favicon-16.png \
  -d 72 \
  -w 16 \
  -h 16 \
  public/sad-mac.svg

inkscape \
  --export-type png \
  -o src/app/favicon-32.png \
  -d 72 \
  -w 32 \
  -h 32 \
  public/sad-mac.svg

inkscape \
  --export-type png \
  -o src/app/favicon-48.png \
  -d 72 \
  -w 48 \
  -h 48 \
  public/sad-mac.svg

convert src/app/favicon-16.png src/app/favicon-32.png src/app/favicon-48.png src/app/favicon.ico
rm src/app/favicon-16.png src/app/favicon-32.png src/app/favicon-48.png

# Icon.
inkscape \
  --export-type png \
  -o src/app/icon.png \
  -d 72 \
  -w 192 \
  -h 192 \
  public/sad-mac.svg
