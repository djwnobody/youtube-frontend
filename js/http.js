const http = axios.create({
  baseURL: "http://82.156.8.100:9001/api/v1",
  timeout: 10000,
});
const http2 = axios.create({
  baseURL: "http://82.156.8.100:9001/api/v2",
  timeout: 10000,
});