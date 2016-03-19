#!/bin/sh
convert "$1" -crop $((2560-10))x$((1417-61))-10+61 +repage cropped-"$1"

