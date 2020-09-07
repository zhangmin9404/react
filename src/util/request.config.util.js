
const baseData = {
  // baseUrl: "/api/v2/auth/cockpit/",
  // ip: 'http://172.18.110.124',
  // port: ':1002',
  getAddr: function () {
    // return window.location.origin;
    return "http://101.37.70.34:31037";
  }
}
const headers = {
  // "Content-Type": 'application/json'
  "Content-Type": 'application/x-www-form-urlencoded'
}
const options = {
  method: 'POST',
  headers
}
export default {
  options,
  baseData
}