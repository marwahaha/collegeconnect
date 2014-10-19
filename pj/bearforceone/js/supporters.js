console.log('hi');
permhosts = new Array();
permhosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "andreaskari@gmail.com",
    name: "Andre",
    password: "991A664DA8",
    callingHours: ["0100", "2300"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
permhosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "kmar@berkeley.edu",
    name: "Kunal",
    password: "991A664DA8",
    callingHours: ["0100", "2300"],
    major: 'Physics',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
permhosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "zz@berkeley.edu",
    name: "Zach",
    password: "991A664DA8",
    callingHours: ["0100", "2300"],
    major: 'EECS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});




hosts = new Array();

hosts.push({
    school: "Stanford",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "hannahsim@gmail.com",
    name: "Hannah",
    password: "4991DDAD0C",
    callingHours: ["0800", "1000"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "Santa Clara",
    problemFocus: "",
    year: "Graduate",
    phoneNumber: "+13103879406",
    emailAddress: "brandonb@gmail.com",
    name: "Brandon",
    password: "64D7F01E5D",
    callingHours: ["1700", "1900"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'MS Candidate',

});

hosts.push({
    school: "Santa Clara",
    problemFocus: "",
    year: "Second",
    phoneNumber: "+13103879406",
    emailAddress: "melolovesu@gmail.com",
    name: "Melody",
    password: "59C05B5FA3",
    callingHours: ["1300", "1400"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "guptadesai@gmail.com",
    name: "Gupta",
    password: "75C8236AC2",
    callingHours: ["0600", "0800"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "Stanford",
    problemFocus: "",
    year: "First",
    phoneNumber: "+13103879406",
    emailAddress: "lailajenson@gmail.com",
    name: "Laila",
    password: "A9974D0B7A",
    callingHours: ["1100", "1300"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "Santa Clara",
    problemFocus: "",
    year: "Fourth",
    phoneNumber: "+13103879406",
    emailAddress: "jtisdale@gmail.com",
    name: "Jasmine",
    password: "408DFA2769",
    callingHours: ["1300", "1500"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "Fifth",
    phoneNumber: "+13103879406",
    emailAddress: "n.bryanson@gmail.com",
    name: "Nathan",
    password: "D2A9750CF1",
    callingHours: ["0300", "0500"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "Stanford",
    problemFocus: "",
    year: "Second",
    phoneNumber: "+13103879406",
    emailAddress: "arianaiscool@gmail.com",
    name: "Ariana",
    password: "6B5EF579FB",
    callingHours: ["2100", "2300"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'BS',

});
hosts.push({
    school: "Stanford",
    problemFocus: "",
    year: "Graduate",
    phoneNumber: "+13103879406",
    emailAddress: "kaylaaaaaa@gmail.com",
    name: "Kayla",
    password: "C80954873B",
    callingHours: ["2000", "2200"],
    major: 'CS',
    cheers: '104',
    rating: '3.2',
    degree: 'Ph.D Candidate',

});
hosts.push({
    school: "UC Berkeley",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "john@berkeley.edu",
    name: "John Dagdelen",
    password: "1234567890",
    callingHours: ["0800", "1400"],
    major: "EECS",
    cheers: '8,541',
    rating: '5.0',
    degree: 'BS',

});
hosts.push({
    school: "Stanford",
    problemFocus: "",
    year: "Third",
    phoneNumber: "+13103879406",
    emailAddress: "jesmin@gmail.com",
    name: "Jesmin Ngo",
    password: "1234567890",
    callingHours: ["1000", "1200"],
    major: "Biology",
    cheers: '1,217',
    rating: '4.1',
    degree: 'BA',

});
hosts.push({
    school: "Santa Clara",
    problemFocus: "",
    year: "Fourth",
    phoneNumber: "+13103879406",
    emailAddress: "michelle@scu.edu",
    name: "Michelle Lin",
    password: "1234567890",
    callingHours: ["0400", "2200"],
    major: "History",
    cheers: '549',
    rating: '4.3',
    degree: 'BA',
});






function getsupport() {
  year = $("#classyear").val();
  school = $("#school").val();
  topic = $(".topicinput").val();
  adviceorwhat = $("#adviceorwhat").val();
  curhosts = _.where(hosts, {"year": year, 'school': school}).concat(permhosts);
  localStorage.setItem('user-search', JSON.stringify({'year': year, 'school': school, 'topic':topic, 'what': adviceorwhat, 'curhosts': curhosts}));
  console.log("hi");
  $("body").fadeOut(1000, function() {
    document.location.href="match.html";
  });
  
}

function gradyear(year) {
  if (year == "First") {return "18";}
  if (year == "Second") {return "17";}
  if (year == "Third") {return "16";}
  if (year == "Fourth") {return "15";}
  if (year == "Fifth") {return "15";}
  return false;
}


function gradtext(ho) {
  if (gradyear(ho.year)) {
    return ho.major + ' \'' + gradyear(ho.year) + ', ' + ho.degree;
  } else {
    return ho.major + ' ' + ho.degree;
  }
}

function callok(ho) {
  curdate = new Date();
  curtime = curdate.getHours()*100 + curdate.getMinutes();
  return ((curtime > parseInt(ho.callingHours[0])) && (curtime < parseInt(ho.callingHours[1])));
}


function addmatches() {
  info = JSON.parse(localStorage.getItem('user-search'));
  console.log(info);
  
  //used to debug, see all users in system
  // info.curhosts = hosts.concat(permhosts);
  
  for (var h in info.curhosts) {
    ho = info.curhosts[h];
    if (callok(ho)) {
      callme = '<div class="call-btn xsmall"> <i class="fa fa-phone"></i> Call Me</div>';
    } else {
      callme = '';
    }
  $(".main-contain").append('\
              <div class="portfoliocard noselect supporter-' + ho.name + '">\
                <div class="coverphoto"></div>\
                <div class="profile_picture"></div>\
                <div class="left_col">\
                    <div class="followers">\
                        <div class="cheers">' + ho.cheers.toString() + '</div>\
                        Cheers\
                    </div>\
                    <div class="following">\
                        <div class="rating">' + ho.rating.toString() + '</div>\
                        Rating\
                    </div>\
                </div>\
                <div class="right_col">\
                    <h2 class="name"> ' + ho.name + ' \
                    </h2>\
                    <h3 class="location"> ' + ho.school + ', CA </h3>\
                    <ul class="contact_information">\
                        <li> <i class="fa fa-briefcase"></i>' + gradtext(ho) + '</li>\
                        <li> <i class="fa fa-send"></i>' + ho.emailAddress + '</li>\
                        <li> <i class="fa fa-user"></i> View Profile</li>\
                    </ul>\
                    <div class="container-1">\
                        <div class="call-btn xsmall"> <i class="one fa fa-comment"></i>Chat</div>\
                        ' + callme + '\
                    </div>\
                </div>\
            </div>\
  ');
  }
}