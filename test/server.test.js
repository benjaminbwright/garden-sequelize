const axios = require(axios);

describe("Server", () => {
  it("should deliver a staus that is not 500 ", () => {
    const response = axios.get("/");

    expect(response.status).notToBe(500);
  });
})