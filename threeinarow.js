function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;
  this.htmlString = function() {
    var str = '<button class="fraction"><div class="numerator">' + numerator + '</div>'
    str += '<div class="denominator">' + denominator + '</div></button>';
    return str;
  }
}

function Dot(player, value) {
  this.player = player;
  this.value = value;
}

var fractionOptionsArray = {
  
}

var dotsArray = {
  playedList : [],
  addDot     : function(dot) {
    this.playedList.push(dot);
  },
  sort       : function() {
    for (var i = 0; i < this.playedList.length; i++) {
      var minIndex = i;
      console.log("i is " + i);
      console.log("value of i = " + this.playedList[i].value);
      for (var j = i + 1; j < this.playedList.length; j++) {
        console.log("value of j = " + this.playedList[j].value);
        if (this.playedList[j].value < this.playedList[minIndex].value) minIndex = j;
      }
      var temp = this.playedList[i];
      this.playedList[i] = this.playedList[minIndex];
      this.playedList[minIndex] = temp;
    }
  },
  dotHtml    : function(dotIndex) {
    var dot = this.playedList[dotIndex];
    var margin;
    if (dotIndex == 0) {
      // the 5 is half the width of the dot
      margin = Math.floor(1000 * dot.value) -5 ;
    } else {
      margin = dot.value - this.playedList[dotIndex - 1].value;
      margin = Math.floor(1000 * margin) -5;
    }
    var str = '<div class="dot ' + dot.player + '" style="margin-left:' + margin +'px"></div>';
    return str;
  },
  placeDots  : function() {
    var el = document.getElementById("dots");
    el.innerHTML = "";
    this.sort();
    for (var i = 0; i < this.playedList.length; i++) {
      el.innerHTML += this.dotHtml(i);
      console.log(el.innerHTML);
    }
  }
}