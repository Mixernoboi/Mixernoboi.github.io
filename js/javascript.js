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
      location.href = params[0] +'?'+ id //Hi there code watcher. Whatcha doin here? :3
      if(id.charAt(0) == "U" || id.charAt(0) == "u") { //Hi there code watcher. Whatcha doin here? :3
        if(id.charAt(1) == "C" || id.charAt(1) == "c") { //Hi there code watcher. Whatcha doin here? :3
            location.href //Hi there code watcher. Whatcha doin here? :3
        } else { //Hi there code watcher. Whatcha doin here? :3
            $.ajax({ //Hi there code watcher. Whatcha doin here? :3
                url: `${key}https://api.mixerno.space/youtube/searchchannel/${id}`, //Hi there code watcher. Whatcha doin here? :3
                // Handle as Text //Hi there code watcher. Whatcha doin here? :3
                dataType: "text", //Hi there code watcher. Whatcha doin here? :3
                success: function (data) { //Hi there code watcher. Whatcha doin here? :3
                  var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
                  location.href = params[0] +'?'+ json.channelid //Hi there code watcher. Whatcha doin here? :3
                } //Hi there code watcher. Whatcha doin here? :3
              }) //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      } else { //Hi there code watcher. Whatcha doin here? :3
        $.ajax({ //Hi there code watcher. Whatcha doin here? :3
            url: `${key}https://api.mixerno.space/youtube/searchchannel/${id}`, //Hi there code watcher. Whatcha doin here? :3
            // Handle as Text //Hi there code watcher. Whatcha doin here? :3
            dataType: "text", //Hi there code watcher. Whatcha doin here? :3
            success: function (data) { //Hi there code watcher. Whatcha doin here? :3
              var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
              location.href = params[0] +'?'+ json.channelid //Hi there code watcher. Whatcha doin here? :3
            } //Hi there code watcher. Whatcha doin here? :3
          }) //Hi there code watcher. Whatcha doin here? :3
      } //Hi there code watcher. Whatcha doin here? :3
    } //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
function goyt() { //Hi there code watcher. Whatcha doin here? :3
    location.href = "https://youtube.com/channel/" + params[1] //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
getdata() //Hi there code watcher. Whatcha doin here? :3
function getdata() { //Hi there code watcher. Whatcha doin here? :3
    $.ajax({ //Hi there code watcher. Whatcha doin here? :3
        url: `${key}https://api.mixerno.space/youtube/channelUC/${params[1]}`, //Hi there code watcher. Whatcha doin here? :3
        // Handle as Text //Hi there code watcher. Whatcha doin here? :3
        dataType: "text", //Hi there code watcher. Whatcha doin here? :3
        success: function (data) { //Hi there code watcher. Whatcha doin here? :3
          var json = $.parseJSON(data); //Hi there code watcher. Whatcha doin here? :3
          channelSubs.innerHTML = json.subscribers //Hi there code watcher. Whatcha doin here? :3
          channelName.innerHTML = json.name //Hi there code watcher. Whatcha doin here? :3
        } //Hi there code watcher. Whatcha doin here? :3
      }) //Hi there code watcher. Whatcha doin here? :3
} //Hi there code watcher. Whatcha doin here? :3
setInterval(getdata, 3000); //Hi there code watcher. Whatcha doin here? :3
 //Hi there code watcher. Whatcha doin here? :3