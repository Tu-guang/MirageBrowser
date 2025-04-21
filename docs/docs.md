# MirageBrowser API 文档

MirageBrowser 提供了一些 RESTful API 接口，您可以通过这些接口管理浏览器环境，包括创建、启动、停止、删除环境等操作。

## 接口调用方法

所有接口都支持 `POST`、`GET` 方法，且需要携带 `Authorization` header 和适当的请求体（JSON 格式）。

## 1. 创建浏览器环境

### 请求方法

`POST /api/browser/create`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "browserName": "TestBrowser",
  "proxyInfo": {
    "proxy": "127.0.0.1",
    "protocol": "http",
    "host": "localhost",
    "port": 1080,
    "username": "user",
    "password": "pass",
    "timezone": "Asia/Shanghai"
  },
  "fingerprint": {
    "os": "Windows",
    "platformVersion": 11,
    "kernel": "130",
    "userAgent": "Mozilla/5.0",
    "canvas": true,
    "audioContext": true,
    "speechVoices": true,
    "clientRects": true,
    "fonts": ["Arial", "Courier New"],
    "disableTLS": [],
    "resolution": "1920x1080",
    "ram": 8,
    "cpu": 4
  }
}
```

### 参数说明

| 参数              | 类型    | 说明                            |
| ----------------- | ------- | ------------------------------- |
| `browserName`     | string  | 浏览器环境名称                  |
| `proxyInfo`       | object  | 代理信息                        |
| `proxy`           | string  | 代理 IP 地址                    |
| `protocol`        | string  | 代理协议（http/https 等）       |
| `host`            | string  | 代理主机名                      |
| `port`            | number  | 代理端口                        |
| `username`        | string  | 代理用户名                      |
| `password`        | string  | 代理密码                        |
| `timezone`        | string  | 时区（例如：`Asia/Shanghai`）   |
| `fingerprint`     | object  | 浏览器指纹设置                  |
| `os`              | string  | 操作系统                        |
| `platformVersion` | string  | 系统版本                        |
| `kernel`          | string  | 内核版本                        |
| `userAgent`       | string  | 用户代理字符串                  |
| `canvas`          | boolean | 是否启用 Canvas 指纹            |
| `audioContext`    | boolean | 是否启用 AudioContext 指纹      |
| `speechVoices`    | boolean | 是否启用 SpeechVoices 指纹      |
| `clientRects`     | boolean | 是否启用 ClientRects 指纹       |
| `fonts`           | array   | 浏览器支持的字体列表            |
| `disableTLS`      | array   | 禁用的 TLS 版本列表             |
| `resolution`      | string  | 屏幕分辨率（例如：`1920x1080`） |
| `ram`             | number  | 分配的内存（单位：GB）          |
| `cpu`             | number  | 分配的 CPU 核心数               |

### 返回示例

```json
{
  "status": "success",
  "envId": 901
}
```

## 2. 启动浏览器环境

### 请求方法

`POST /api/browser/start`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
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
  "status": "success",
  "message": "Environment started successfully"
}
```

## 3. 停止浏览器环境

### 请求方法

`POST /api/browser/stop`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
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
| `envId` | number | 要停止的环境 ID |

### 返回示例

```json
{
  "status": "success",
  "message": "Environment stopped successfully"
}
```

## 4. 删除浏览器环境

### 请求方法

`POST /api/browser/delete`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 907
}
```

### 参数说明

| 参数    | 类型   | 说明            |
| ------- | ------ | --------------- |
| `envId` | number | 要删除的环境 ID |

### 返回示例

```json
{
  "status": "success",
  "message": "Environment deleted successfully"
}
```

## 5. 删除浏览器环境缓存

### 请求方法

`POST /api/browser/cache/delete`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 请求体

```json
{
  "envId": 902
}
```

### 参数说明

| 参数    | 类型   | 说明                |
| ------- | ------ | ------------------- |
| `envId` | number | 要删除缓存的环境 ID |

### 返回示例

```json
{
  "status": "success",
  "message": "Environment cache deleted successfully"
}
```

## 6. 获取环境列表

### 请求方法

`GET /api/browser/list`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
[
  {
    "envId": 901,
    "browserName": "TestBrowser",
    "status": "stopped"
  },
  {
    "envId": 902,
    "browserName": "TestBrowser2",
    "status": "running"
  }
]
```

## 7. 获取正在运行的环境列表

### 请求方法

`GET /api/browser/open/list`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
[
  {
    "envId": 902,
    "browserName": "TestBrowser2",
    "status": "running"
  }
]
```

## 8. 获取接口状态

### 请求方法

`GET /api/status`

### 请求头

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
```

### 返回示例

```json
{
  "status": "ok",
  "message": "API is up and running"
}
```
