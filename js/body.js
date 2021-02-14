"use strict";

const $outputButton = $("#output-json-space__button");

$outputButton.click(function (e) {
  let fileName = "output.json";

  let data = {
    backgroundColor: $outputButton.css("background-color"),
    fontSize: $outputButton.css("font-size")
  };

  // 20210215csvと違ってbom不要
  let jsonData = JSON.stringify(data);

  let $downloading = document.createElement("a");

  // encodeURIComponent：URL（URI）化
  $downloading.href = "data:text/plain," + encodeURIComponent(jsonData);

  $downloading.download = fileName;

  // 20210215なぜかできない
  // $outputButton.appendChild($downloading);
  document.body.appendChild($downloading);

  $downloading.click();

  document.body.removeChild($downloading);

  e.preventDefault();
});
