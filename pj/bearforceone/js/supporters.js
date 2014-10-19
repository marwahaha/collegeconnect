console.log('hi');
hosts = new Array();
hosts[0] = {
    school: "UC Berkeley",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "andreaskari@gmail.com",
    name: "Andre",
    password: "991A664DA8",
    callingHours: ["0700", "0900"]
};
hosts[1] = {
    school: "Stanford",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "hannahsimon@gmail.com",
    name: "Hannah",
    password: "4991DDAD0C",
    callingHours: ["0800", "1000"]
};
hosts[2] = {
    school: "Santa Clara",
    problemFocus: "",
    year: "Graduate",
    phoneNumber: "+13103879406",
    emailAddress: "brandon1995@gmail.com",
    name: "Brandon",
    password: "64D7F01E5D",
    callingHours: ["1700", "1900"]
};
hosts[3] = {
    school: "Santa Clara",
    problemFocus: "",
    year: "Second",
    phoneNumber: "+13103879406",
    emailAddress: "melolovesyou@gmail.com",
    name: "Melody",
    password: "59C05B5FA3",
    callingHours: ["1300", "1400"]
};
hosts[4] = {
    school: "UC Berkeley",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "guptadesai@gmail.com",
    name: "Gupta",
    password: "75C8236AC2",
    callingHours: ["0600", "0800"]
};
hosts[5] = {
    school: "Stanford",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "lailajenson@gmail.com",
    name: "Laila",
    password: "A9974D0B7A",
    callingHours: ["1100", "1300"]
};
hosts[6] = {
    school: "Santa Clara",
    problemFocus: "",
    year: "Fourth",
    phoneNumber: "+13103879406",
    emailAddress: "jasminetisdale@gmail.com",
    name: "Jasmine",
    password: "408DFA2769",
    callingHours: ["1300", "1500"]
};
hosts[7] = {
    school: "UC Berkeley",
    problemFocus: "",
    year: "Fifth",
    phoneNumber: "+13103879406",
    emailAddress: "nathanbryanson@gmail.com",
    name: "Nathan",
    password: "D2A9750CF1",
    callingHours: ["0300", "0500"]
};
hosts[8] = {
    school: "Stanford",
    problemFocus: "",
    year: "Second",
    phoneNumber: "+13103879406",
    emailAddress: "arianaiscool@gmail.com",
    name: "Ariana",
    password: "6B5EF579FB",
    callingHours: ["2100", "2300"]
};
hosts[9] = {
    school: "Stanford",
    problemFocus: "",
    year: "Graduate",
    phoneNumber: "+13103879406",
    emailAddress: "kaylaaaaaa@gmail.com",
    name: "Kayla",
    password: "C80954873B",
    callingHours: ["2000", "2200"]
};

function getsupport() {
  year = $("#classyear").val();
  school = $("#school").val();
  topic = $(".topicinput").val();
  adviceorwhat = $("#adviceorwhat").val();
  curhosts = _.where(hosts, {"year": year, 'school': school})
  $("#matchingpage").append("<p>year:" + year + "</p>");
  $("#matchingpage").append("<p>topic:" + topic + "</p>");
  $("#matchingpage").append("<p>school:" + school + "</p>");
  $("#matchingpage").append("<p>what:" + adviceorwhat + "</p>");

  for (var host in curhosts) {
    $("#matchingpage").append("<p>" + JSON.stringify(curhosts[host]) + "</p>");
  }
  console.log("hi")
  
}