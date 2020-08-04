#!/bin/bash

rsync -avz -e ssh dist/ ${SITE_REPLACE_NAME}
