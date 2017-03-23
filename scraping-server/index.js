const osmosis = require("osmosis");

function scrapeCourses() {
  osmosis
    .get("http://appl101.lsu.edu/booklet2.nsf/mainframeset")
    .data(function(d) {
      console.log(d);
    })
    .log(console.log)
    .debug(console.log);
}

scrapeCourses();
