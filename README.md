# stellar-fe 

This is the web project for N9E

## Usage

The built pub folder can work in the [n9e](https://github.com/ccfos/nightingale/).

you can deploy the front-end code independently, just replace the pub with the new release.

## Dependencies
```
node: v16.x <= v16.15.0
npm: 8.x <= 8.5.5
```
- deploy on centos 7.9, node v16.15.0, npm 8.5.5
```shell
wget https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz

tar xf node-v16.15.0-linux-x64.tar.xz -C /iflytek/server

cat << EOF >>  ~/.bashrc
export PATH=$PATH:/iflytek/server/node-v16.15.0-linux-x64/bin
EOF

source ~/.bashrc

node -v 
npm -v
```

- set npm registry
```shell
npm config set registry https://registry.npmmirror.com
npm cache clean --force
npm config get registry
```

## Installation

```
npm install
```

## Start

```
npm run dev
```

The back-end api proxy config is https://github.com/n9e/fe/blob/main/vite.config.ts#L41

Trouble shooting: https://answer.flashcat.cloud/questions/10010000000003759

## Build

```
npm run build
```

## Nginx Server

```
server {
    listen       8765;
    server_name  _;

    add_header Access-Control-Allow-Origin *;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    root   front-end/page/path;    # e.g. /root/n9e/pub;

    location / {
        root front-end/page/path;    # e.g. /root/n9e/pub;
        try_files $uri /index.html;
    }
   location /api/ {
        proxy_pass http://n9e.api.server;   # e.g. 127.0.0.1:18000
    }
}
```

## Notice

- `vite.config.js` and `tsconfig.json` should both configure to make sure alias works
- Add `"css.validate": false` in vscode setting.json to ignore the css warning
- Install the Prettier plugin in vscode and set the format on saveS



