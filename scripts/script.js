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
  // List all cats
  list: function() {
    var cat;
    var cats = octopus.getCats();
    for (var i = 0; i < cats.length; i++) {
      cat = cats[i]
      elem = document.createElement("li");
      elem.textContent = cat.catname;
      elem.addEventListener("click", (function(cat) {
        return function() {
          document.getElementById("name").textContent = cat.catname
          document.getElementById("image").src = cat.caturl
          document.getElementById("counter").textContent = cat.catclicks
        }
      })(cat))
      document.getElementById("catlist").appendChild(elem);
    }
  },
  // Display the cat when clicked
  // Counts when clicked the cat image
}

// Octopus
var octopus = {
  init: function() {
    view.list()
  },
  getCats: function() {
    return model.cats
  }
}

// Start
octopus.init()
