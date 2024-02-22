export const BASE_IP = {
  aws: "http://44.199.165.3",
};

export const PORTS = {
  port1: "8080",
  port2: "8090",
  port3: "5000",
};

export const BASE_URL = {
  baseUrl: BASE_IP.aws,
};

const VERSION = {
  v1: "/v1",
  v2: "/v2",
  v4: "/v4",
};

const apiSource = {
  viot: "/viot",
};

const SUB_URL = {
  loginUrl: apiSource.viot + VERSION.v1 + "/login",
};

export const loginApi = `${BASE_URL.baseUrl}${SUB_URL.loginUrl}`;
