
## 1xx — Informational

| Code | Name                  | Description |
|------|-----------------------|-------------|
| 100  | Continue              | The server has received the request headers, and the client should proceed to send the request body. |
| 101  | Switching Protocols   | The server is switching to a different protocol as requested by the client. |
| 102  | Processing            | The server has accepted the request but has not completed it yet. |

---

## 2xx — Success

| Code | Name                  | Description |
|------|-----------------------|-------------|
| 200  | OK                    | The request has succeeded. |
| 201  | Created               | The request succeeded, and a new resource was created. |
| 202  | Accepted              | The request has been accepted for processing, but the processing is not complete. |
| 204  | No Content            | The server successfully processed the request, but there is no content to return. |

---

## 3xx — Redirection

| Code | Name                  | Description |
|------|-----------------------|-------------|
| 301  | Moved Permanently     | The requested resource has been permanently moved to a new URL. |
| 302  | Found                 | The requested resource resides temporarily under a different URL. |
| 304  | Not Modified          | The resource has not been modified since the last request. |

---

## 4xx — Client Errors

| Code | Name                  | Description |
|------|-----------------------|-------------|
| 400  | Bad Request           | The server cannot or will not process the request due to a client error. |
| 401  | Unauthorized          | Authentication is required and has failed or has not been provided. |
| 403  | Forbidden             | The client does not have permission to access the requested resource. |
| 404  | Not Found             | The requested resource could not be found. |


---

## 5xx — Server Errors

| Code | Name                  | Description |
|------|-----------------------|-------------|
| 500  | Internal Server Error | The server encountered an unexpected condition. |
| 501  | Not Implemented       | The server does not support the functionality required to fulfill the request. |
| 502  | Bad Gateway           | The server received an invalid response from an upstream server. |
| 503  | Service Unavailable   | The server is currently unable to handle the request due to maintenance or overload. |
| 504  | Gateway Timeout       | The server did not receive a timely response from an upstream server. |
