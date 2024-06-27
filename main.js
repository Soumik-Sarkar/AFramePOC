window.onload = function () {
    document.addEventListener("DOMContentLoaded", function () {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var arjsAttribute = isMobile
        ? "trackingMethod: best; sourceType: camera; sourceParameters: { facingMode: environment }; debugUIEnabled: false;"
        : "trackingMethod: best; sourceType: webcam; debugUIEnabled: false;";

      var aScene = document.querySelector("a-scene");
      aScene.setAttribute("arjs", arjsAttribute);
    });

    document
      .getElementById("changeColorRedButton")
      .addEventListener("click", function () {
        var cube = document.getElementById("cube");
        cube.setAttribute("material", "color", "red");
      });
    document
      .getElementById("changeColorBlueButton")
      .addEventListener("click", function () {
        var cube = document.getElementById("cube");
        cube.setAttribute("material", "color", "#4CC3D9");
      });
  };