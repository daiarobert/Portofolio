import { createApp } from "vue";
import App from "./App.vue";
import apiCall from "./js/fetch.js";
import dataModel from "./js/model.js";

//call the api to get data from channelsight
apiCall();

var checkCount = 0;

//check the data has loaded, if not try again in 1 second
var checkData = function () {
  if (Object.keys(dataModel[1].retailers).length < 1 && checkCount < 8) {
    console.log("Data is still loading...");
    checkCount++;
    setTimeout(function () {
      checkData();
    }, 500);
  } else {
    // console.log("Data is loaded: \n");
    // console.log(dataModel);
    setTimeout(function () {
      createApp(App).mount("#app");
    }, 250);
  }
};
checkData();
