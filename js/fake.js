$(document).ready(function () {
var key = "https://cors.mixerno.space/"
var videostufflol = window.location.href; 
var params = videostufflol.split('?'); 
var params2 = videostufflol.split('/'); 
//params length should be about 9? idk.
//Enderna
console.log(params);
console.log(params2); 
var name;
var subscribercount;
var sbrate;
var sbrateDay;
var sbrateHour;
var sbrateMin;
var sbrateSec;
var base = 1;
if(params.length == 9) {
  name = params[2].replace(/%20/g, " ");
  channelName.innerHTML = name;
  subscribercount = parseFloat(params[1])
  sbrate = params[3]
  channelSubs.innerHTML = params[1]
  subscount.value = Math.floor(subscribercount)
  subsrate.value = sbrate
  if(params[4] == "sec") {
    var checkBox1 = document.getElementById("sec");
    checkBox1.checked = true
  }
  if(params[4] == "min") {
    var checkBox1 = document.getElementById("min");
    checkBox1.checked = true
  }
  if(params[4] == "hour") {
    var checkBox1 = document.getElementById("hour");
    checkBox1.checked = true
  }
  if(params[4] == "day") {
    var checkBox1 = document.getElementById("day");
    checkBox1.checked = true
  }
  if(params[5] == "urlsaving") {
    var checkBox1 = document.getElementById("uri");
    checkBox1.checked = true
  }
  if(params[6] == "autosetyes") {
    var checkBox1 = document.getElementById("setautom");
    checkBox1.checked = true
  }
  if(params[6] == "autosetno") {
    var checkBox1 = document.getElementById("setautom");
    checkBox1.checked = false
  }
  if(params[7] == "autopauseyes") {
    var checkBox1 = document.getElementById("pause");
    var checkBox2 = document.getElementById("uripause");
    checkBox1.checked = true
    checkBox2.checked = true
    base = 1;
  }
  if(params[7] == "autopauseno") {
    var checkBox1 = document.getElementById("pause");
    var checkBox2 = document.getElementById("uripause");
    checkBox1.checked = false
    checkBox2.checked = false
    base = 0
  }
  if(params[8] == "randomsubtakeyes") {
    var checkBox1 = document.getElementById("occsubs");
    checkBox1.checked = true
  }
  if(params[8] == "randomsubtakeno") {
    var checkBox1 = document.getElementById("occsubs");
    checkBox1.checked = false
  }

}
$('#channelName').click(function() {
  setName()
});
$('#channelName2').click(function() {
  setName2()
});
$('#subscribeButton').click(function() {
  yonote()
});
$('#pause').click(function() {
  bause()
});
$('#setautom').click(function() {
  checkkerbox4()
});
$('#values').click(function() {
  setvals()
});
var chart = new Highcharts.chart('grap', {
  chart: {
    backgroundColor: 'transparent',
    renderTo: 'grap',
    type: 'line'
  },
  title: {
    text: ``
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 500,
    labels: {
      enabled: true
  }
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      enabled: true
  }
  },
credits: {
  enabled: false
},

  series: [{
    name: 'Subs',
    showInLegend: true,
    marker: {
      enabled: false
    },

  }]
})

function setName() { 
    var channelidorname = prompt("Name", ""); 
    if (channelidorname == null || channelidorname == "") { 
      channelidorname = undefined;
    } else {
      name = channelidorname
      channelName.innerHTML = name
            
         
    } 
} 
function checkkerbox1() {

    var checkBox = document.getElementById("setautom");
    if (checkBox.checked == true){
      setvals()
      setTimeout(function() {
        checkkerbox1()
      }, 2000);
    } else {
       console.log("checkbox not checked Lmao wtf?")
    }
}
function checkkerbox4() {

  var checkBox = document.getElementById("setautom");
  if (checkBox.checked == true){
    setvals()
    setTimeout(function() {
      checkkerbox1()
    }, 2000);
  } else {
     console.log("checkbox not checked Lmao wtf?")
  }
}
function bause() {

  var checkBox = document.getElementById("pause");
  if (checkBox.checked == true){
    base = 1;
  } else {
     base = 0;
  }
}
var notstarted = 1;
function setvals() {
  subscribercount = parseFloat($('#subscount').val())
  sbrate = parseFloat($('#subsrate').val())
}
setInterval(function() {
  if(base === 1) {
    //Psed
      } else {
       add()
      }
}, 2000);
function add() {
  if(base === 1) {
//Psed
  } else {
    console.log(subscribercount)
    console.log(sbrate)
    var checkBox4 = document.getElementById("sec");
    var checkBox3 = document.getElementById("min");
    var checkBox2 = document.getElementById("hour");
    var checkBox1 = document.getElementById("day");
    var checkBox44 = document.getElementById("sec2");
    var checkBox33 = document.getElementById("min2");
    var checkBox22 = document.getElementById("hour2");
    var checkBox11 = document.getElementById("day2");
    var urlisaving = document.getElementById("uri");
    var occo = document.getElementById("occsubs");
  if (checkBox1.checked == true){
    if(occo.checked == true) {
      if(Math.floor(Math.random() * 10) > 7.9) {
        subscribercount = subscribercount - sbrate / 24 / 60 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        setTimeout(function() {
          subscribercount = subscribercount + sbrate / 24 / 60 / 60 * 4
        }, 1000);
        subscribercount2 = subscribercount2 - sbrate2 / 24 / 60 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
        setTimeout(function() {
          subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 / 60 * 4
        }, 1000);
      } else {
        subscribercount = subscribercount + sbrate / 24 / 60 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
      }
    } else {
      subscribercount = subscribercount + sbrate / 24 / 60 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
    }
  }
  if (checkBox2.checked == true){
    if(occo.checked == true) {
      if(Math.floor(Math.random() * 10) > 7.9) {
        subscribercount = subscribercount - sbrate / 24 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        setTimeout(function() {
          subscribercount = subscribercount + sbrate / 24 / 60 * 4
          subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 * 4
        }, 1000);
        subscribercount2 = subscribercount2 - sbrate2 / 24 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
      } else {
        subscribercount = subscribercount + sbrate / 24 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
      }
    } else {
      subscribercount = subscribercount + sbrate / 24 / 60 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        
        subscribercount2 = subscribercount2 + sbrate2 / 24 / 60 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
    }
  }
  if (checkBox3.checked == true){
    if(occo.checked == true) {
      if(Math.floor(Math.random() * 10) > 7.9) {
        subscribercount = subscribercount - sbrate / 24 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        setTimeout(function() {
          subscribercount = subscribercount + sbrate / 24  * 4
          subscribercount2 = subscribercount2 + sbrate2 / 24  * 4
        }, 1000);

        subscribercount2 = subscribercount2 - sbrate2 / 24 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)

      } else {
        subscribercount = subscribercount + sbrate / 24 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount2 + sbrate2 / 24 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
      }
    } else {
      subscribercount = subscribercount + sbrate / 24 * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount2 + sbrate2 / 24 * 2
        channelSubs2.innerHTML = Math.floor(subscribercount2)
        subscount2.value = Math.floor(subscribercount2)
    }
    
  }
  if (checkBox4.checked == true){
    if(occo.checked == true) {
      if(Math.floor(Math.random() * 10) > 7.9) {
        subscribercount = subscribercount - sbrate * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)

        subscribercount2 = subscribercount - sbrate * 2
        channelSubs2.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        setTimeout(function() {
          subscribercount = subscribercount + sbrate * 4
          subscribercount2 = subscribercount2 + sbrate2 * 4
        }, 1000);
      } else {
        subscribercount = subscribercount + sbrate * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
        
      }
    } else {
      subscribercount = subscribercount + sbrate * 2
        channelSubs.innerHTML = Math.floor(subscribercount)
        subscount.value = Math.floor(subscribercount)
    }
  }
  if (urlisaving.checked == true){
    if(checkBox1.checked == true) {
      var automc = document.getElementById("setautom");
      if (automc.checked == true){
        var autopause = document.getElementById("uripause");
      if (autopause.checked == true){
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetyes?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetyes?autopauseyes?randomsubtakeno`);
        }
        
      } else {
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetyes?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetyes?autopauseno?randomsubtakeno`);
        }
      }
        
      } else {
        var autopause = document.getElementById("uripause");
        if (autopause.checked == true){
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetno?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetno?autopauseyes?randomsubtakeno`);
        }
        } else {
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetno?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?day?urlsaving?autosetno?autopauseno?randomsubtakeno`);
        }
        }
      }
      
    }
    if(checkBox2.checked == true) {
      var automc = document.getElementById("setautom");
      if (automc.checked == true){
        var autopause = document.getElementById("uripause");
      if (autopause.checked == true){
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetyes?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetyes?autopauseyes?randomsubtakeno`);
        }
        
      } else {
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetyes?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetyes?autopauseno?randomsubtakeno`);
        }
      }
        
      } else {
        var autopause = document.getElementById("uripause");
        if (autopause.checked == true){
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetno?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetno?autopauseyes?randomsubtakeno`);
        }
        } else {
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetno?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?hour?urlsaving?autosetno?autopauseno?randomsubtakeno`);
        }
        }
      }
      
    }
    if(checkBox3.checked == true) {
      var automc = document.getElementById("setautom");
      if (automc.checked == true){
        var autopause = document.getElementById("uripause");
      if (autopause.checked == true){
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetyes?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetyes?autopauseyes?randomsubtakeno`);
        }
        
      } else {
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetyes?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetyes?autopauseno?randomsubtakeno`);
        }
      }
        
      } else {
        var autopause = document.getElementById("uripause");
        if (autopause.checked == true){
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetno?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetno?autopauseyes?randomsubtakeno`);
        }
        } else {
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetno?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?min?urlsaving?autosetno?autopauseno?randomsubtakeno`);
        }
        }
      }
      
    }

    if(checkBox4.checked == true) {
      var automc = document.getElementById("setautom");
      if (automc.checked == true){
        var autopause = document.getElementById("uripause");
      if (autopause.checked == true){
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetyes?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetyes?autopauseyes?randomsubtakeno`);
        }
        
      } else {
        var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetyes?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetyes?autopauseno?randomsubtakeno`);
        }
      }
        
      } else {
        var autopause = document.getElementById("uripause");
        if (autopause.checked == true){
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetno?autopauseyes?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetno?autopauseyes?randomsubtakeno`);
        }
        } else {
          var coc = document.getElementById("occsubs");
        if(coc.checked == true) {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetno?autopauseno?randomsubtakeyes`);
        } else {
          window.history.pushState("y", "g", `?${Math.floor(subscribercount)}?${name}?${sbrate}?sec?urlsaving?autosetno?autopauseno?randomsubtakeno`);
        }
        }
      }
      
    }
    
  }
  
  chart.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(subscribercount)
  ]);
  if (chart.series[0].data.length >= 500) {
    chart.series[0].data[0].remove()
  }

    
  }
  
}
function yonote() { 
  alert("It actually doesnt work. :) Maybe in the future? Maybe. but hey. Join my discord server: https://discord.gg/KAB6222")
} 

});