#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除旧的文件
rm -rf dist

rm -rf ./src/pages/.DS_Store

# 生成新的压缩文件
yarn build

# 进入生成的文件夹
cd dist

# 复制一个 index.html并命名为 404.html 解决 historyAPI 404问题
cp index.html 404.html

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/Antd-CustomComponent.git master:gh-pages

cd -