const cheerio = require("cheerio");
const request = require("request-promise");
const express = require("express");
var bodyParser = require("body-parser");

let app = express();

let courses = ["test"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/data/:text", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let text = req.params.text;
  console.log(JSON.stringify(req.params));
  res.json(
    courses.filter(course =>
      course.name.toLowerCase().includes(text.toLowerCase()))
  );
});

app.listen(4040, () => {
  console.log("Listening on port 4040");
});

function scrapeCourses() {
  let website = "https://connorelsea.github.io/node-scraping-talk/college-website/";

  request(website)
    .then(result => {
      let $ = cheerio.load(result);
      let rows = $(".courses-table").find("tr");

      courses = $(rows)
        .map((i, tr) => ({
          dept: $(tr).find(".course__dept").text(),
          name: $(tr).find(".course__name").text(),
          num: $(tr).find(".course__num").text(),
          hours: $(tr).find(".course__hours").text(),
          inst: $(tr)
            .find(".course__inst")
            .children()
            .map((i, span) => $(span).text())
            .get()
        }))
        .get();

      console.log("Done scraping");
    })
    .catch(error => console.log(error));
}

scrapeCourses();
