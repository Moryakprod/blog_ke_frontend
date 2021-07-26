# syntax=docker/dockerfile:1

FROM node:12-alpine as builder
WORKDIR /blog_ke_frontend
COPY package.json /blog_ke_frontend/package.json
RUN npm install
COPY . /blog_ke_frontend