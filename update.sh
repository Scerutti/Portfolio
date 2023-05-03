#!/bin/bash

#Remove the node_modules directory
rimraf node_modules

# Update dependencies
pnpm update

# install dependencies
pnpm install