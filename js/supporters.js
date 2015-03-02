Parse.initialize("blriWbayY4m4CAYxmx6bXwSfb4kn9Nn3D2N7fS49", "VkcSlzMSGJts6a8i7LrOC8Z0E7csgBN6l8PdhkoH");
mentor = Parse.Object.extend("mentor");
perm_mentor = Parse.Object.extend("perm_mentor");
permhosts = []
var query = new Parse.Query(perm_mentor);
query.find({
  success: function(results) {
    permhosts = results;
    console.log(permhosts);
  },
  error: function(error) {
    console.log(error);
  }
});

function getsupport() {
  year = $("#classyear").val();
  school = $("#school").val();
  topic = $(".topicinput").val();
  adviceorwhat = $("#adviceorwhat").val();
  var curhosts_parse = [];
  var query = new Parse.Query(mentor);
  query.equalTo("year", year);
  query.equalTo("school", school);
  query.find({
    success: function(results) {
      for (var i in results) {
        console.log(results[i].get('name'))
      }
      curhosts_parse = results;
      console.log(curhosts_parse);
      curhosts_parse = curhosts_parse.concat(permhosts);

      localStorage.setItem('user-search', JSON.stringify({
        'year': year,
        'school': school,
        'topic': topic,
        'what': adviceorwhat,
        'curhosts_parse': curhosts_parse
      }));
      $("body").fadeOut(800, function() {
        document.location.href = "match.html";
      });
    },
    error: function(error) {
      console.log(error);
    }
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
  curtime = curdate.getHours() * 100 + curdate.getMinutes();
  return ((curtime > parseInt(ho.callingHours[0])) && (curtime < parseInt(ho.callingHours[1])));
}

function addmatches() {
  info = JSON.parse(localStorage.getItem('user-search'));
  console.log(info);

  //used to debug, see all users in system
  // info.curhosts = hosts.concat(permhosts);

  for (var h in info.curhosts_parse) {
    ho = info.curhosts_parse[h];
    console.log(ho);
    if (callok(ho)) {
      callme = '<div onclick="calling(\'' + ho.phoneNumber + '\')" id="call-no-morph" class="call-btn xsmall"> <i class="fa fa-phone"></i> Call Me</div>';
    } else {
      callme = '';
    }
    img = ho.img || 'https://cache.spradshirt.net/Public/Common/images/profile-pic-placeholder_130x130.png';

    $(".main-contain").append('\
              <div class="portfoliocard noselect supporter-' + ho.name.replace(" ", "-") + '">\
                <div class="coverphoto"></div>\
                <div class="profile_picture profpic-' + ho.name.split(" ")[0] + '"></div>\
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
                            <div id="call-morph" class="morph-button morph-button-overlay morph-button-fixed">\
                                <button type="button" id="z-btn">\
                                    <div class="call-btn3" onclick="starttalking(\'' + ho.name + '\')" > <i class="one fa fa-comment"></i>Chat</div>\
                                </button>\
                                <div style="overflow-y:scroll;" class="morph-content" id="blue">\
\
                                    <div class="content-style-overlay">\
                                        <span class=" my-close icon-close  fa-stack fa-lg">\
                                            <i class="fa fa-circle-thin fa-stack-2x" id="btn-two"></i>\
                                            <i class="btn-one fa fa-close fa-stack-1x" id="btn-one"></i>\
                                        </span>\
                                        <div class="main-content">\
                                            <h2 class="z">Now Chatting to ' + ho.name + '</h2>\
\
                                            <input type="text" placeholder="say something!" class="z client"></input>\
\
                                            <div class="paraz">\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                </div>\
                        ' + callme + '\
                    </div>\
                </div>\
            </div>\
  ');
  }
}