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
var view = {
  // List all cats and display a cat it when clicked on its name
  list: function() {
    var cat;
    var cats = octopus.getCats();
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
          octopus.clicker(cat)
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

// Octopus
var octopus = {
  init: function() {
    view.list()
  },
  getCats: function() {
    return model.cats
  },
  clicker: function(cat) {
    view.clicker(cat);
  },
}

// Start
octopus.init()
