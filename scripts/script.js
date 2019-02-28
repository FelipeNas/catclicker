// Model
var model = {
  cats : [
    {
      catname: "Barry",
      caturl: "images/barry.jpg",
      catclicks: "0",
    },
    {
      catname: "Farry",
      caturl: "images/farry.jpg",
      catclicks: "0",
    },
    {
      catname: "Jerry",
      caturl: "images/jerry.jpg",
      catclicks: "0",
    },
    {
      catname: "Larry",
      caturl: "images/larry.jpg",
      catclicks: "0",
    },
    {
      catname: "Merry",
      caturl: "images/merry.jpg",
      catclicks: "0",
    }
  ]
}

// View
var viewcat = {
  // List all cats and display a cat it when clicked on its name
  list: function() {
    var cat;
    var cats = octopus.getCats();
    document.getElementById("catlist").innerHTML = " "
    for (var i = 0; i < cats.length; i++) {
      cat = cats[i]
      elem = document.createElement("li");
      elem.textContent = cat.catname;
      elem.addEventListener("click", (function(cat) {
        return function() {
          document.getElementById("displayarea").innerHTML = "<h3 id='name'></h3><img src='' id='image'><p id='counter'></p>";
          document.getElementById("name").textContent = cat.catname;
          document.getElementById("image").src = cat.caturl;
          document.getElementById("counter").textContent = cat.catclicks;
          octopus.currentCat = cat
          octopus.clicker(octopus.currentCat)
        }
      })(cat))
      document.getElementById("catlist").appendChild(elem);
    }
  },
  // Counts when clicked the cat image
  clicker: function(cat) {
    elem = document.getElementById("image");
    elem.addEventListener("click", function() {
      cat.catclicks++
      document.getElementById("counter").textContent++
    })
  }
}

var viewform = {
  showform: function() {
    elem = document.getElementById("displayform")
    elem.addEventListener("click", function(){
      document.getElementById("form").style.display = "block";
    })
    document.getElementById("cancel").addEventListener("click", function(){
      document.getElementById("form").style.display = "none";
    })
    document.getElementById("submit").addEventListener("click", function(){
      cat = octopus.currentCat
      cat.catname = document.getElementById("newname").value
      cat.caturl = document.getElementById("newurl").value
      cat.catclicks = document.getElementById("newclicks").value
      octopus.init()
    })
  }
}

// Octopus
var octopus = {
  init: function() {
    viewcat.list()
    viewform.showform()
  },
  getCats: function() {
    return model.cats
  },
  currentCat: null,
  clicker: function(cat) {
    viewcat.clicker(cat);
  },
}

// Start
octopus.init()
