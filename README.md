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
# 若遇到npm镜像源认证错误，需要删除package-lock.json文件后再执行
```

## Start

```
#1、前端的vite.config.ts的proxy中/api/n9e的地址配置为：target: 'http://127.0.0.1:17000/',
#2、运行webapi: ./n9e webapi -c etc/config.toml
#3、启动本地前端项目:
npm run dev
#4、此时前端项目正常运行了
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


## Bugfixes
```shell
npm run build

> n9e-fe@v6.7.1 build
> tsc && cross-env NODE_OPTIONS=--max-old-space-size=6096 vite build

src/components/PromQueryBuilder/Operations/Operation.tsx:84:22 - error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'VisualQueryOperationParamValue'.
  Type 'null' is not assignable to type 'VisualQueryOperationParamValue'.

84             onChange(val);
                        ~~~

src/pages/traceCpt/Search.tsx:326:72 - error TS2322: Type 'number | null' is not assignable to type 'number | undefined'.
  Type 'null' is not assignable to type 'number | undefined'.

326                       onChange={(num_traces) => setSearch({ ...search, num_traces })}
                                                                           ~~~~~~~~~~


Found 2 errors in 2 files.

Errors  Files
     1  src/components/PromQueryBuilder/Operations/Operation.tsx:84
     1  src/pages/traceCpt/Search.tsx:326

```


`这两个错误都是由于尝试将 null 分配给不接受 null 的类型引起的。在 TypeScript 中，null 和 undefined 是不同的类型，不能互相赋值。`

`对于第一个错误，你可以通过检查 val 是否为 null 来解决。如果 val 为 null，则不调用 onChange 函数。`

`对于第二个错误，你可以在设置 num_traces 时检查其是否为 null。如果是 null，则将其设置为 undefined。
以下是修复这两个错误的代码：`

```javascript
// src/components/PromQueryBuilder/Operations/Operation.tsx
if (val !== null) {
  onChange(val);
}

// src/pages/traceCpt/Search.tsx
onChange={(num_traces) => setSearch({ ...search, num_traces: num_traces === null ? undefined : num_traces })}
```

