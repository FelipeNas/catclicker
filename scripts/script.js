    var catnames = ["larry", "barry", "jerry", "ferry", "merry"]
    for (var i = 0; i < catnames.length; i++) {
      catname = "<li id='" + catnames[i] + "list'>" + catnames[i] + "</li>";
      document.getElementById("catlist").innerHTML += catname;
    }

    document.getElementById("displayarea").innerHTML += "";
    for (var i = 0; i < catnames.length; i++) {
      catid = catnames[i] + "list";
      catname = catnames[i]
      elem = document.getElementById(catid);
      elem.addEventListener('click', (function(cat) {
        return function() {
          catnam = "<h3>" + cat + "</h3>";
          catimg = "<img src='images/" + cat + ".jpg' alt='" + cat + "' id='" + cat + "elem'>";
          catclicks = "<p id='" + cat + "clicks'>0</p>";
          document.getElementById("displayarea").innerHTML = catnam + catimg + catclicks;
          newelem = document.getElementById(cat + "elem");
          newelem.addEventListener('click', function() {
            document.getElementById(cat + "clicks").innerHTML++;
          }, false);
        };
      })(catname));
    }
