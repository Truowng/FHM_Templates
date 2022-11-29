const dataMaps = document.querySelectorAll(".branch-address");
const map = document.querySelector(".gmap_iframe");
let attr;

dataMaps.forEach((dataMap) => {
  dataMap.addEventListener("click", () => {
    map.setAttribute("src", dataMap.getAttributeNode("data-map").value);
  });
});
