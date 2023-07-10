#!/bin/bash

#Remove the node_modules directory
rimraf node_modules

# Update dependencies
npm update

# install dependencies
npm install