# TgeBrowser API 文档

TgeBrowser 提供了一些 RESTful API 接口，您可以通过这些接口管理浏览器环境，包括创建、启动、停止、删除环境等操作。

## 接口调用方法

所有接口都支持 `POST`、`GET` 方法，且需要携带 `Authorization` header 和适当的请求体（JSON 格式）。

## 1. 获取接口状态

### 请求方法

`GET /api/status`

### 请求头

```bash
Authorization: Bearer ApiKey
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
{
  "success": true,
  "message": "成功"
}
```

## 2. 创建浏览器环境

### 请求方法

`POST /api/browser/create`

### 请求头

```bash
Authorization: Bearer ApiKey
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "browserName": "TestBrowser",
  "proxy": {
    "protocol": "socks5",
    "host": "108.165.69.97",
    "port": 6059,
    "username": "hygwueis",
    "password": "lc6bb3zfm359",
    "timezone": "Europe/Amsterdam"
  },
  "fingerprint": {
    "os": "Windows",
    "platformVersion": 11,
    "kernel": "135",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.9.2537 Safari/537.36",
    "canvas": true,
    "audioContext": true,
    "speechVoices": true,
    "clientRects": true,
    "fonts": ["Arial", "Courier New"],
    "disableTLS": [],
    "resolution": "1920x1080",
    "ram": 8,
    "cpu": 4
  },
  "groupId": 29,
  "remark": "备注",
  "Cookie": []
}
```

### 参数说明

---

### 🧩 基础参数

| 参数          | 类型   | 是否必填 | 说明           |
| ------------- | ------ | -------- | -------------- |
| `browserName` | string | 是       | 浏览器环境名称 |

---

### 🌐 代理设置 `proxy`

| 参数       | 类型   | 是否必填            | 说明                                      |
| ---------- | ------ | ------------------- | ----------------------------------------- |
| `protocol` | string | 当 proxyId 为空必填 | 代理协议（http/socks5/direct 等）新建代理 |
| `host`     | string | 否                  | 代理主机名 （http/socks5 时候须填写）     |
| `port`     | number | 否                  | 代理端口 （http/socks5 时候须填写）       |
| `username` | string | 否                  | 代理用户名 （http/socks5 时候须填写）     |
| `password` | string | 否                  | 代理密码 （http/socks5 时候须填写）       |
| `timezone` | string | 是                  | 时区（例如：`Asia/Shanghai`）             |

---

### 🌐 已有代理设置 `proxyId`

| 参数      | 类型   | 是否必填          | 说明         |
| --------- | ------ | ----------------- | ------------ |
| `proxyId` | number | 当 proxy 为空必填 | 使用已有代理 |

---

### 分组设置 `groupId`

| 参数      | 类型   | 是否必填 | 说明         |
| --------- | ------ | -------- | ------------ |
| `groupId` | number | 否       | 设置存在分组 |

---

### 备注设置 `remark`

| 参数     | 类型   | 是否必填 | 说明     |
| -------- | ------ | -------- | -------- |
| `remark` | string | 否       | 设置备注 |

---

### Cookie 设置 `Cookie`

| 参数     | 类型 | 是否必填 | 说明        |
| -------- | ---- | -------- | ----------- |
| `Cookie` | json | 否       | 设置 Cookie |

---

### 🧬 指纹设置 `fingerprint`

| 参数                   | 类型    | 是否必填 | 说明                                                       |
| ---------------------- | ------- | -------- | ---------------------------------------------------------- |
| `os`                   | string  | 是       | 操作系统                                                   |
| `platformVersion`      | string  | 是       | 系统版本                                                   |
| `kernel`               | string  | 是       | 内核版本                                                   |
| `userAgent`            | string  | 是       | 用户代理字符串                                             |
| `canvas`               | boolean | 否       | Canvas 指纹 （true 开启随机，false 真实，默认 true）       |
| `audioContext`         | boolean | 否       | AudioContext 指纹 （true 开启随机，false 真实，默认 true） |
| `speechVoices`         | boolean | 否       | SpeechVoices 指纹 （true 开启随机，false 真实，默认 true） |
| `clientRects`          | boolean | 否       | ClientRects 指纹 （true 开启随机，false 真实，默认 true）  |
| `fonts`                | array   | 否       | 浏览器支持的字体列表                                       |
| `disableTLS`           | array   | 否       | 禁用的 TLS 版本列表                                        |
| `resolution`           | string  | 否       | 屏幕分辨率（例如：`1920x1080`）                            |
| `ram`                  | number  | 否       | 分配的内存                                                 |
| `cpu`                  | number  | 否       | 分配的 CPU 核心数                                          |
| `deviceName`           | string  | 否       | 设备名称                                                   |
| `portScanProtection`   | string  | 否       | 禁止扫描端口 (默认关闭，传输方式：端口,端口)               |
| `hardwareAcceleration` | boolean | 否       | 硬件加速 （true 开启，false 关闭，默认 true）              |
| `startupParams`        | string  | 否       | 自定义参数 （默认不传）                                    |

---

### 返回示例

```json
{
  "success": true,
  "data": {
    "envId": 5880
  },
  "message": "成功"
}
```

## 3. 启动浏览器环境

### 请求方法

`POST /api/browser/start`

### 请求头

```bash
Authorization: Bearer ApiKey
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 901
}
```

### 参数说明

| 参数    | 类型   | 说明            |
| ------- | ------ | --------------- |
| `envId` | number | 要启动的环境 ID |

### 返回示例

```json
{
  "success": true,
  "data": {
    "envId": 900,
    "browserName": "11",
    "ws": "ws://127.0.0.1:34721/devtools/browser/33cc3bf7-1852-409f-ad3e-364f6233d735",
    "http": "http://127.0.0.1:34721/json/version",
    "pid": 32512
  },
  "message": "成功"
}
```

## 4. 停止浏览器环境

### 请求方法

`POST /api/browser/stop`

### 请求头

```bash
Authorization: Bearer ApiKey
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 900
}
```

### 参数说明

| 参数    | 类型   | 说明            |
| ------- | ------ | --------------- |
| `envId` | number | 要停止的环境 ID |

### 返回示例

```json
{
  "success": true,
  "data": {
    "envId": 900,
    "openStatus": 0,
    "pid": 0,
    "port": 0,
    "ws": null,
    "http": null,
    "updatedAt": "2025-04-21T08:48:47.583Z"
  },
  "message": "成功"
}
```

## 5. 删除浏览器环境

### 请求方法

`POST /api/browser/delete`

### 请求头

```bash
Authorization: Bearer ApiKey
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 911
}
```

### 参数说明

| 参数    | 类型   | 说明            |
| ------- | ------ | --------------- |
| `envId` | number | 要删除的环境 ID |

### 返回示例

```json
{
  "success": true,
  "data": 911,
  "message": "成功"
}
```

## 6. 删除浏览器环境缓存

### 请求方法

`POST /api/browser/cache/delete`

### 请求头

```bash
Authorization: Bearer ApiKey
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 900
}
```

### 参数说明

| 参数    | 类型   | 说明                |
| ------- | ------ | ------------------- |
| `envId` | number | 要删除缓存的环境 ID |

### 返回示例

```json
{
  "success": true,
  "data": 900,
  "message": "成功"
}
```

## 7. 获取环境列表

### 请求方法

`GET /api/browser/list`

### 请求体

```text
current=1&pageSize=20
```

### 参数说明

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| `current`  | number | 当前页数 |
| `pageSize` | number | 查询数量 |

### 请求头

```bash
Authorization: Bearer ApiKey
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
{
  "success": true,
  "data": {
    "total": 5,
    "current": 1,
    "pageSize": 10,
    "list": [
      {
        "browserName": "11",
        "fingerprint": {
          "os": "Windows",
          "platformVersion": "15.0.0",
          "cpu": 3,
          "ram": 4,
          "fonts": [],
          "canvas": false,
          "kernel": "130",
          "webgpu": {
            "gpuArch": "",
            "gpuVendor": ""
          },
          "webrtc": "relay",
          "language": "",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "deviceName": "",
          "disableTLS": ["0x1301", "0x1302", "0x1305"],
          "resolution": "1000x1000",
          "uiLanguage": "",
          "clientRects": true,
          "audioContext": true,
          "speechVoices": true,
          "startupParams": "",
          "disableSandbox": true,
          "platformVersion": "12.0.0",
          "portScanProtection": "",
          "hardwareAcceleration": false
        },
        "remark": null,
        "cookie": null,
        "createTime": "2025-04-19T14:03:59.000Z",
        "updateTime": "2025-04-19T14:03:59.000Z",
        "lastOpenedTime": "2025-04-19T15:12:14.000Z",
        "userId": 4,
        "proxyInfo": {
          "proxy": "undefined:undefined:undefined:undefined",
          "protocol": "direct",
          "timezone": "Europe/Berlin"
        },
        "envId": 900
      },
      {
        "browserName": "aaaas",
        "fingerprint": {
          "os": "win",
          "platformVersion": "15.0.0",
          "cpu": 4,
          "ram": 4,
          "fonts": [],
          "webgl": {
            "glRender": "Intel(R) HD Graphics Family Direct3D11 vs_4_1 ps_4_1, D3D11-10.18.13.5598",
            "glVendor": "Intel"
          },
          "canvas": true,
          "kernel": "130",
          "webgpu": {
            "gpuArch": "gen-7"
          },
          "webrtc": "relay",
          "language": "",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "deviceName": "",
          "disableTLS": [],
          "resolution": "1000x1000",
          "uiLanguage": "",
          "clientRects": true,
          "audioContext": true,
          "speechVoices": true,
          "startupParams": "",
          "disableSandbox": "enable",
          "portScanProtection": "",
          "hardwareAcceleration": "enable"
        },
        "remark": null,
        "cookie": null,
        "createTime": "2025-04-19T14:08:41.000Z",
        "updateTime": "2025-04-19T14:08:41.000Z",
        "lastOpenedTime": "2025-04-19T15:12:16.000Z",
        "userId": 4,
        "proxyInfo": {
          "proxy": "",
          "protocol": "direct",
          "timezone": "Asia/Hong_Kong"
        },
        "envId": 901
      },
      {
        "browserName": "kkkk",
        "fingerprint": {
          "os": "Windows",
          "platformVersion": "15.0.0",
          "cpu": 4,
          "ram": 4,
          "fonts": [],
          "webgl": {
            "glRender": "Intel(R) HD Graphics Family Direct3D11 vs_4_1 ps_4_1, D3D11-10.18.13.5598",
            "glVendor": "Intel"
          },
          "canvas": true,
          "kernel": "130",
          "webgpu": {
            "gpuArch": "gen-7",
            "gpuVendor": "intel"
          },
          "webrtc": "relay",
          "language": "",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "deviceName": "",
          "disableTLS": [],
          "resolution": "1000x1000",
          "uiLanguage": "",
          "clientRects": true,
          "audioContext": true,
          "speechVoices": true,
          "startupParams": "",
          "disableSandbox": "enable",
          "portScanProtection": "",
          "hardwareAcceleration": "enable"
        },
        "remark": null,
        "cookie": null,
        "createTime": "2025-04-19T14:10:56.000Z",
        "updateTime": "2025-04-19T14:10:56.000Z",
        "lastOpenedTime": "2025-04-19T15:12:21.000Z",
        "userId": 4,
        "proxyInfo": {
          "proxy": "",
          "protocol": "direct",
          "timezone": "Asia/Hong_Kong"
        },
        "envId": 902
      },
      {
        "browserName": "aaa",
        "fingerprint": {
          "os": "Windows",
          "platformVersion": "15.0.0",
          "cpu": 4,
          "ram": 4,
          "fonts": [],
          "webgl": {
            "glRender": "",
            "glVendor": ""
          },
          "canvas": true,
          "kernel": "130",
          "webgpu": {
            "gpuArch": "",
            "gpuVendor": ""
          },
          "webrtc": "relay",
          "language": "",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "deviceName": "",
          "disableTLS": [],
          "resolution": "1000x1000",
          "uiLanguage": "",
          "clientRects": true,
          "audioContext": true,
          "speechVoices": true,
          "startupParams": "",
          "disableSandbox": "enable",
          "portScanProtection": "",
          "hardwareAcceleration": "enable"
        },
        "remark": null,
        "cookie": null,
        "createTime": "2025-04-20T04:14:41.000Z",
        "updateTime": "2025-04-20T04:14:41.000Z",
        "lastOpenedTime": "2025-04-20T04:14:44.000Z",
        "userId": 4,
        "proxyInfo": {
          "proxy": "",
          "protocol": "direct",
          "timezone": "Asia/Hong_Kong"
        },
        "envId": 903
      },
      {
        "browserName": "eaddsads",
        "fingerprint": {
          "os": "Windows",
          "platformVersion": "15.0.0",
          "cpu": 4,
          "ram": 4,
          "fonts": [],
          "webgl": {
            "glRender": "",
            "glVendor": ""
          },
          "canvas": true,
          "kernel": "130",
          "webgpu": {
            "gpuArch": "",
            "gpuVendor": ""
          },
          "webrtc": "relay",
          "language": "",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "deviceName": "",
          "disableTLS": [],
          "resolution": "1000x1000",
          "uiLanguage": "",
          "clientRects": true,
          "audioContext": true,
          "speechVoices": true,
          "startupParams": "",
          "disableSandbox": false,
          "portScanProtection": "",
          "hardwareAcceleration": false
        },
        "remark": null,
        "cookie": null,
        "createTime": "2025-04-20T06:15:47.000Z",
        "updateTime": "2025-04-20T06:15:47.000Z",
        "lastOpenedTime": "2025-04-20T06:15:48.000Z",
        "userId": 4,
        "proxyInfo": {
          "proxy": "",
          "protocol": "direct",
          "timezone": "Asia/Hong_Kong"
        },
        "envId": 906
      }
    ]
  },
  "message": "成功"
}
```

## 8. 获取正在运行的环境列表

### 请求方法

`GET /api/browser/open/list`

### 请求头

```bash
Authorization: Bearer ApiKey
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
{
  "success": true,
  "data": [
    {
      "envId": 900,
      "browserName": "11",
      "ws": "ws://127.0.0.1:36203/devtools/browser/f1049062-aead-47ed-8719-15f0938b7dd5",
      "http": "http://127.0.0.1:36203/json/version",
      "openStatus": 1,
      "pid": 27652,
      "port": 36203,
      "updatedAt": "2025-04-21T08:53:35.531Z"
    }
  ],
  "message": "成功"
}
```
