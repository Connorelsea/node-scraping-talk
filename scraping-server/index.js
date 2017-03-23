const osmosis = require("osmosis");

function scrapeCourses() {
  const website = "http://htmlpreview.github.io/?https://github.com/Connorelsea/node-scraping-talk/blob/master/college-website/index.html";

  osmosis.get(website);
}

scrapeCourses();
