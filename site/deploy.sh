#!/usr/bin/env sh
###
 # @Author: ningjh 375332835@qq.com
 # @Date: 2023-04-20 11:10:03
 # @LastEditors: ningjh 375332835@qq.com
 # @LastEditTime: 2023-04-20 11:14:29
 # @FilePath: \trustui\site\deploy.sh
 # @Description: 
 # 
 # Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
### 

# 忽略错误
# set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git remote add trustui https://github.com/ningjianhaoNJH/trustui.git
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f trustui master

# cd -
