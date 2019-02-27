  //  var catnames = ["larry", "barry", "jerry", "ferry", "merry"]
  //  for (var i = 0; i < catnames.length; i++) {
  //    catname = "<li id='" + catnames[i] + "list'>" + catnames[i] + "</li>";
//      document.getElementById("catlist").innerHTML += catname;
//    }
//
//    document.getElementById("displayarea").innerHTML += "";
//    for (var i = 0; i < catnames.length; i++) {
//      catid = catnames[i] + "list";
//      catname = catnames[i]
//      elem = document.getElementById(catid);
//      elem.addEventListener('click', (function(cat) {
//        return function() {
//          catnam = "<h3>" + cat + "</h3>";
//          catimg = "<img src='images/" + cat + ".jpg' alt='" + cat + "' id='" + cat + "elem'>";
//          catclicks = "<p id='" + cat + "clicks'>0</p>";
//          document.getElementById("displayarea").innerHTML = catnam + catimg + catclicks;
//          newelem = document.getElementById(cat + "elem");
//          newelem.addEventListener('click', function() {
//            document.getElementById(cat + "clicks").innerHTML++;
//          }, false);
//        };
//      })(catname));
//    }
//
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

var viewlist = {
  list: function(cats) {
    for (var i = 0; i < cats.length; i++) {
      var catname = "<li id=" + cats[i].catid + ">" + cats[i].catname + "</li>";
      document.getElementById("catlist").innerHTML += catname;
    }
  },
  click: function(cats) {
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i]
      var catid = cat.catid;
      var elem = document.getElementById(catid);
      elem.addEventListener('click', (function(cat) {
        return function() {
          document.getElementById("displayarea").innerHTML = "";
          displayname = "<h3>" + cat.catname + "</h3>";
          displayimage = "<img src=" + cat.caturl + ">";
          displayclicker = "<p>" + cat.catclicks + "</p>";
          document.getElementById("displayarea").innerHTML = displayname + displayimage + displayclicker;
        };
      })(cat));
    }
  },
}

var octupus = {
  init: [viewlist.list(model), viewlist.click(model)]
}

octupus.init
