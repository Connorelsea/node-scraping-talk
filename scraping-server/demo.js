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

  // Do scraping here
}

scrapeWebsite();
