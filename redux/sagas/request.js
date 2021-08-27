import axios from "axios";

export function requestGetNews() {
  return axios.request({
    method: "get",
    url: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9908a284d11342b9819c623043e14fdc",
  });
}
