// 20210217TODO:jsonファイルのドロップダウン

"use strict";

const $outputButton = $("#output-json-space__button");

const $inputButton = $("#input-json-space__button");

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

$inputButton.click(function (e) {
  $.getJSON("../json/input.json", jsonData => {
    console.log(`${jsonData.fontSize}`);
  });

  $.getJSON("../json/input.json").done(jsonData => {
    console.log(`${jsonData.fontSize}-2`);
  });

  $.getJSON("../json/input-fail.json")
    .done(jsonData => {
      console.log(`${jsonData.fontSize}-2`);
    })
    .fail(() => {
      console.log("The specified json file is Nothing.");
    });

  $.getJSON("../json/input-fail-always.json")
    .done(jsonData => {
      console.log(`${jsonData.fontSize}-2`);
    })
    .fail(() => {
      console.log("Ver2: The specified json file is Nothing.");
    })
    .always(() => {
      console.log("always.");
    });

  $.getJSON("../json/input-success-always.json")
    .done(jsonData => {
      console.log(`${jsonData.fontSize}-2`);
    })
    .fail(() => {
      console.log("Ver2: The specified json file is Nothing.");
    })
    .always(() => {
      console.log("always success.");
    });

  $.getJSON("../json/input-argFunction-fail-always.json", jsonData => {
    console.log(`${jsonData.fontSize}`);
  })
    .fail(() => {
      console.log("Ver ArgFucntion: The specified json file is Nothing.");
    })
    .always(() => {
      console.log("always - ArgFunction.");
    });

  $.getJSON("../json/input-argFunction-success-always.json", jsonData => {
    console.log(`${jsonData.fontSize}`);
  })
    .fail(() => {
      console.log("Ver2 ArgFucntion: The specified json file is Nothing.");
    })
    .always(() => {
      console.log("always success - ArgFunction.");
    });

  e.preventDefault();
});
