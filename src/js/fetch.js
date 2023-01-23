import dataModel from "./model.js";

var apiCounter = 1;

let csApiCall = () => {
  var api_obj;
  // Defining async function
  async function getapi(url, index) {
    // Storing response
    var response = await fetch(url)
      .then((res) => res.json())
      .then((data) => (api_obj = data))
      .then(function () {
        //iterate over the channelsight object and store required values
        //in our dataModel object
        Object.keys(api_obj[0].RetailerProducts).forEach(function (k) {
          var k = parseInt(k, 10);
          dataModel[index].retailers[k + 1] = {
            retailer: api_obj[0].RetailerProducts[k].RetailerName,
            url: api_obj[0].RetailerProducts[k].ClickThruUrl,
            price: api_obj[0].RetailerProducts[k].Price.toFixed(2),
            logo: api_obj[0].RetailerProducts[k].RetailerLogoUrl,
            name: api_obj[0].RetailerProducts[k].RetailerProductName,
          };
        });
      })
      .then(function () {
        if (apiCounter < Object.keys(dataModel).length) {
          apiCounter++;
          getapi(dataModel[apiCounter].apiEndpoint, apiCounter);
        }
      });
  }

  getapi(dataModel[apiCounter].apiEndpoint, apiCounter);
};

export { csApiCall as default };
