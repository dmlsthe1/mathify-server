const axios = require("axios");
const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

module.exports = {
  mathify: (num, mult, div) => {
    const url = `${baseUrl}/10?mult=5`;
    const data = { div };
    const options = { params: { mult } };

    return axios.post(url, data, options).then(res => res.data);
  }
}