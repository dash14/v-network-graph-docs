#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

git init
git config --global user.name "dash14"
git config --global user.email "dash14.ack@gmail.com"
git add -A
git commit -m 'deploy'

# deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com-dash14:dash14/v-network-graph.git master:gh-pages

cd -
