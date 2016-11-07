#!/bin/sh
set -eux
rm -f ext.zip
zip -r ext.zip ext
jar tf ext.zip
