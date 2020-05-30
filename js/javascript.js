 //Hi there code watcher. Whatcha doin here? :3
var key = "https://cors.mixerno.space/" //Hi there code watcher. Whatcha doin here? :3
var videostufflol = window.location.href; //Hi there code watcher. Whatcha doin here? :3
var params = videostufflol.split('?'); //Hi there code watcher. Whatcha doin here? :3
var params2 = videostufflol.split('/'); //Hi there code watcher. Whatcha doin here? :3
console.log(params); //Hi there code watcher. Whatcha doin here? :3
console.log(params2); //Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
function searcher() { //Hi there code watcher. Whatcha doin here? :3
    var channelidorname = prompt("Enter Channel name/id pls dont kill our api keys thank you C:", params[1]); //Hi there code watcher. Whatcha doin here? :3
    if (channelidorname == null || channelidorname == "") { //Hi there code watcher. Whatcha doin here? :3
      id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"; //Hi there code watcher. Whatcha doin here? :3
    } else { //Hi there code watcher. Whatcha doin here? :3
      id = channelidorname; //Hi there code watcher. Whatcha doin here? :3
      //location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
            $.ajax({ //Hi there code watcher. Whatcha doin here? :3
                url: `${key}https://api.mixerno.space/youtube/searchchannel/${id}`, //Hi there code watcher. Whatcha doin here? :3
                // Handle as Text //Hi there code watcher. Whatcha doin here? :3
                dataType: "text", //Hi there code watcher. Whatcha doin here? :3
                success: function (data) { //Hi there code watcher. Whatcha doin here? :3
                  var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
                  location.href = params[0] +'?'+ json.channelid //Hi there code watcher. Whatcha doin here? :3
                } //Hi there code watcher. Whatcha doin here? :3
              }) //Hi there code watcher. Whatcha doin here? :3
         //Hi there code watcher. Whatcha doin here? :3//Hi there code watcher. Whatcha doin here? :3
    } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function searcherTwit() { //Hi there code watcher. Whatcha doin here? :3
  var channelidorname = prompt("Enter User name (@)", params[1]); //Hi there code watcher. Whatcha doin here? :3
  if (channelidorname == null || channelidorname == "") { //Hi there code watcher. Whatcha doin here? :3
    id = "BarackObama"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    id = channelidorname; //Hi there code watcher. Whatcha doin here? :3
    location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
//Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3//Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function searcherTwitch() { //Hi there code watcher. Whatcha doin here? :3
  var channelidorname = prompt("Enter User name (found in url maaaybe.)", params[1]); //Hi there code watcher. Whatcha doin here? :3
  if (channelidorname == null || channelidorname == "") { //Hi there code watcher. Whatcha doin here? :3
    id = "tfue"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    id = channelidorname; //Hi there code watcher. Whatcha doin here? :3
    location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
//Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3//Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function searcherTikTok() { //Hi there code watcher. Whatcha doin here? :3
  var channelidorname = prompt("Enter User name (@ or found in the url)", params[1]); //Hi there code watcher. Whatcha doin here? :3
  if (channelidorname == null || channelidorname == "") { //Hi there code watcher. Whatcha doin here? :3
    id = "charlidamelio"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    id = channelidorname; //Hi there code watcher. Whatcha doin here? :3
    location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
//Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3//Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function searcherMixer() { //Hi there code watcher. Whatcha doin here? :3
  var channelidorname = prompt("Enter User name (found in the url)", params[1]); //Hi there code watcher. Whatcha doin here? :3
  if (channelidorname == null || channelidorname == "") { //Hi there code watcher. Whatcha doin here? :3
    id = "ninja"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    id = channelidorname; //Hi there code watcher. Whatcha doin here? :3
    location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
//Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3//Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function goyt() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://youtube.com/channel/" + chanelid //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function goTwit() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "BarackObama"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://twitter.com/" + chanelid //Hi there code watcher. Whatcha doin here? :3
}  //Hi there code watcher. Whatcha doin here? :3
function goTwitch() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "tfue"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://twitch.tv/" + chanelid //Hi there code watcher. Whatcha doin here? :3
}//Hi there code watcher. Whatcha doin here? :3
function goTikTok() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "charlidamelio"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://www.tiktok.com/@" + chanelid //Hi there code watcher. Whatcha doin here? :3
}//Hi there code watcher. Whatcha doin here? :3
function goMixer() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "ninja"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://mixer.com/" + chanelid //Hi there code watcher. Whatcha doin here? :3
}//Hi there code watcher. Whatcha doin here? :3
//Hi there code watcher. Whatcha doin here? :3
function getdata() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/youtube/channelUC/${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
          channelSubs.innerHTML = json.subscribers //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function getdataTwitter() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "BarackObama"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/twitter2/user/${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
           //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      })  //Hi there code watcher. Whatcha doin here? :3
      $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `https://bastet.socialblade.com/twitter/lookup?query=${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
           //Hi there code watcher. Whatcha doin here? :3
           channelSubs.innerHTML = json //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      })//Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function getdataTwitch() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "Tfue"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/twitch/user/${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
          channelSubs.innerHTML = json.followers //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
}  //Hi there code watcher. Whatcha doin here? :3
var tiktokbypass = [
  'https://immense-castle-34936.herokuapp.com/@',
  'https://backuptiktokapi.glitch.me/',
  'https://backuptiktokapi.herokuapp.com/@',
  'https://honorable-hazel-atmosphere.glitch.me/'
]
var randomtiktokbypass = Math.floor(Math.random()*tiktokbypass.length);
var tiktokurl = tiktokbypass[randomtiktokbypass];
function getdataTikTok() {
  tiktokbypass = [
    'https://immense-castle-34936.herokuapp.com/@',
    'https://backuptiktokapi.glitch.me/',
    'https://backuptiktokapi.herokuapp.com/@',
    'https://honorable-hazel-atmosphere.glitch.me/'
  ]
  randomtiktokbypass = Math.floor(Math.random()*tiktokbypass.length);
  tiktokurl = tiktokbypass[randomtiktokbypass]; //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "charlidamelio"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}${tiktokurl}${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
          channelSubs.innerHTML = json.followers //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
}  //Hi there code watcher. Whatcha doin here? :3
function getdataMixer() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "Ninja"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/mixer/user/${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
          channelSubs.innerHTML = json.followers //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
}  //Hi there code watcher. Whatcha doin here? :3
function getdataDiffrenceTwit() { //Hi there code watcher. Whatcha doin here? :3
  chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  chanelid2 = params[2] //Hi there code watcher. Whatcha doin here? :3
  if(chanelid == null || chanelid == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid = "BarackObama"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid = params[1] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
  if(chanelid2 == null || chanelid2 == "") { //Hi there code watcher. Whatcha doin here? :3
    chanelid2 = "realDonaldtrump"; //Hi there code watcher. Whatcha doin here? :3
  } else { //Hi there code watcher. Whatcha doin here? :3
    chanelid2 = params[2] //Hi there code watcher. Whatcha doin here? :3
  } //Hi there code watcher. Whatcha doin here? :3
  var nam; //Hi there code watcher. Whatcha doin here? :3
  var nam2; //Hi there code watcher. Whatcha doin here? :3
  var folcount; //Hi there code watcher. Whatcha doin here? :3
  var folcount2; //Hi there code watcher. Whatcha doin here? :3
  $.ajax({ //Hi there code watcher. Whatcha doin here? :3
    url: `${key}https://api.mixerno.space/twitter2/user/${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
    // Handle as Text //Hi there code watcher. Whatcha doin here? :3
    dataType: "text", //Hi there code watcher. Whatcha doin here? :3
    success: function (data) { //Hi there code watcher. Whatcha doin here? :3
      var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3
      nam = json.name //Hi there code watcher. Whatcha doin here? :3
      $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/twitter2/user/${chanelid2}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
           //Hi there code watcher. Whatcha doin here? :3
          nam2 = json.name //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = `${nam} vs ${nam2}` //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
    } //Hi there code watcher. Whatcha doin here? :3
  })  //Hi there code watcher. Whatcha doin here? :3
  $.ajax({ //Hi there code watcher. Whatcha doin here? :3
    url: `https://bastet.socialblade.com/twitter/lookup?query=${chanelid}`, //Hi there code watcher. Whatcha doin here? :3
    // Handle as Text //Hi there code watcher. Whatcha doin here? :3
    dataType: "text", //Hi there code watcher. Whatcha doin here? :3
    success: function (data) { //Hi there code watcher. Whatcha doin here? :3
      var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
       //Hi there code watcher. Whatcha doin here? :3
       folcount = json //Hi there code watcher. Whatcha doin here? :3
       $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `https://bastet.socialblade.com/twitter/lookup?query=${chanelid2}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
           //Hi there code watcher. Whatcha doin here? :3
           folcount2 = json //Hi there code watcher. Whatcha doin here? :3
           channelSubs.innerHTML = folcount - folcount2    //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      })  //Hi there code watcher. Whatcha doin here? :3
    } //Hi there code watcher. Whatcha doin here? :3
  }) //Hi there code watcher. Whatcha doin here? :3
  //Hi there code watcher. Whatcha doin here? :3
    //Hi there code watcher. Whatcha doin here? :3
   //Hi there code watcher. Whatcha doin here? :3
   //Hi there code watcher. Whatcha doin here? :3
  //Hi there code watcher. Whatcha doin here? :3
}//Hi there code watcher. Whatcha doin here? :3
function yt() { //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3 //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdata, 3000); //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatc //Hi there code watcher. Whatcha doin here? :3ha doin here? :3
function Twitter() { //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdataTwitter, 3000); //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function Twitch() { //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdataTwitch, 3000); //Hi there code watcher. Whatcha doin here? :3
} 
function TikTok() { //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdataTikTok, 3000); //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function Mixer() { //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdataMixer, 3000); //Hi there code watcher. Whatcha doin here? :3
}
function DiffrenceTwit() { //Hi there code watcher. Whatcha doin here? :3
  setInterval(getdataDiffrenceTwit, 3000); //Hi there code watcher. Whatcha doin here? :3
}//Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3
