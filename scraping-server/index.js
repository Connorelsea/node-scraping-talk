const cheerio = require("cheerio");
const fetch = require("isomorphic-fetch");
const osmosis = require("osmosis");

function scrapeCourses() {
  const website = "https://connorelsea.github.io/node-scraping-talk/college-website/";

  fetch(website).then(result => {
    let $ = cheerio.load(result);

    console.log($("body").html());
  });

  // osmosis
  //   .get(website)
  //   .find("body")
  //   .set({ body: ":source" })
  //   .set({
  //     department: ".course__dept",
  //     name: ".course_name",
  //     number: ".course_number",
  //     hours: ".course__hours",
  //     instructor: ".course__instructor"
  //   })
  //   .data(d => console.log(d))
  //   .debug(console.log)
  //   .error(console.log);
}

scrapeCourses();
