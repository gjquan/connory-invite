#!/bin/bash

gulp minify
gzip -9 -f dist/email.html
mv dist/email.html.gz dist/email.html