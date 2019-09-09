FROM node:10-alpine

WORKDIR /ng-app

COPY . .

RUN npm config set unsafe-perm true \
    && npm install -g @angular/cli \
    && npm i \
    && npm run build

EXPOSE 4200

CMD ["ng", "serve"]
