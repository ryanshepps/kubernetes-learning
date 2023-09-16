#!/bin/bash

mvn install

docker build -t kubernetes-learning/backend .