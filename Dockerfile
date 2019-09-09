# node 镜像
FROM node:10-alpine

# 切换路径
WORKDIR /ng-app

# 复制package.json文件
COPY . .

# 下载node_modules
RUN npm install -g @angular/cli
    && npm i
    && ng build --prod

EXPOSE 4200

CMD ["ng", "serve"]
