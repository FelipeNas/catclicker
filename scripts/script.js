// model
var model = [
  {
    catname: "Barry",
    caturl: "images/barry.jpg",
    catclicks: "0",
    catid: "barryid"
  },
  {
    catname: "Farry",
    caturl: "images/farry.jpg",
    catclicks: "0",
    catid: "farryid"
  },
  {
    catname: "Jerry",
    caturl: "images/jerry.jpg",
    catclicks: "0",
    catid: "jerryid"
  },
  {
    catname: "Larry",
    caturl: "images/larry.jpg",
    catclicks: "0",
    catid: "larryid"
  },
  {
    catname: "Merry",
    caturl: "images/merry.jpg",
    catclicks: "0",
    catid: "marryid"
  }
]

// view
var view = {
  // list all cats
  list: function(cats) {
    for (var i = 0; i < cats.length; i++) {
      var catname = "<li id=" + cats[i].catid + ">" + cats[i].catname + "</li>";
      document.getElementById("catlist").innerHTML += catname;
    }
  },
  // display the cat when clicked
  displayer: function(cats) {
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i]
      var catid = cat.catid;
      var elem = document.getElementById(catid);
      elem.addEventListener('click', (function(cat) {
        return function() {
          document.getElementById("displayarea").innerHTML = "";
          displayname = "<h3>" + cat.catname + "</h3>";
          displayimage = "<img src=" + cat.caturl + " id=" + cat.catid + "img>";
          displayclicker = "<p id=" + cat.catid + "clicker>" + cat.catclicks + "</p>";
          document.getElementById("displayarea").innerHTML = displayname + displayimage + displayclicker;
          view.clicker(cat);
        };
      })(cat));
    }
  },
  // counts when clicked the cat image
  clicker: function(cat) {
    elem = document.getElementById(cat.catid + "img")
    elem.addEventListener('click', function() {
      document.getElementById(cat.catid + "clicker").innerHTML++
      cat.catclicks++
    }, false)
  }
}

// octupus
var octupus = {
  init: [view.list(model), view.displayer(model)]
}

// start
octupus.init
