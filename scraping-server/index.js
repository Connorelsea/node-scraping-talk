const cheerio = require("cheerio");
const request = require("request-promise");
const osmosis = require("osmosis");

function scrapeCourses() {
  let website = "https://connorelsea.github.io/node-scraping-talk/college-website/";

  request(website)
    .then(result => {
      let $ = cheerio.load(result);

      let rows = $(".courses-table").find("tr");
      let courses = [];

      $(rows).each(function(i, element) {
        courses.push({
          dept: $(element).find(".course__dept").text(),
          name: $(element).find(".course__name").text(),
          num: $(element).find(".course__num").text(),
          hours: $(element).find(".course__hours").text(),
          inst: $(element).find(".course__inst").text()
        });
      });

      console.log(courses.filter(course => course.num.startsWith("3")));

      console.log(courses.filter(course => course.dept === "CSC"));

      //console.log(courses);
    })
    .catch(error => console.log(error));
}

scrapeCourses();
