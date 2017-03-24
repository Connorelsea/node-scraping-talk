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
        let dept = $(element).find(".course__dept").text();
        let name = $(element).find(".course__name").text();
        let num = $(element).find(".course__num").text();
        let hours = $(element).find(".course__hours").text();
        let inst = [];

        $(element).find(".course__inst").children().each(function(i, el) {
          let inst_name = $(el).text();
          inst.push(inst_name);
        });

        courses.push({ dept, name, num, hours, inst });
      });

      console.log(courses.filter(course => course.num.startsWith("3")));

      console.log(courses.filter(course => course.dept === "CSC"));

      //console.log(courses);
    })
    .catch(error => console.log(error));
}

scrapeCourses();
