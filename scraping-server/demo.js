const cheerio = require("cheerio");
const request = require("request-promise");
const express = require("express");
const bodyParser = require("body-parser");

// Express/Node Boilerplate
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Function to scrape website data
function scrapeWebsite() {
  let website = "https://connorelsea.github.io/node-scraping-talk/college-website/";

  request(website).then(html => {
    let $ = cheerio.load(html);
    let rows = $(".courses-table").find("tr");

    console.log($(rows).length);
  });

  // Do scraping here
}

scrapeWebsite();
