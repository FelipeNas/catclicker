var cats = [
  {
    clickCount: 0,
    name: "Barry",
    imgSrc: "images/barry.jpg",
    nickName: ["B","Bary","Barryn","Weird Cat"]
  },
  {
    clickCount: 0,
    name: "Farry",
    imgSrc: "images/farry.jpg",
    nickName: ["F","Fary","Farryn","Cool Cat"]
  },
  {
    clickCount: 0,
    name: "Jerry",
    imgSrc: "images/jerry.jpg",
    nickName: ["J","Jery","Jerryn","Beautiful Cat"]
  },
  {
    clickCount: 0,
    name: "Larry",
    imgSrc: "images/larry.jpg",
    nickName: ["L","Lary","Larryn","Lazy Cat"]
  },
  {
    clickCount: 0,
    name: "Merry",
    imgSrc: "images/merry.jpg",
    nickName: ["M","Mery","Merryn","Happy Cat"]
  }
]

var cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickName = ko.observableArray(data.nickName);

    this.stage = ko.computed(function() {
      if (this.clickCount() < 1){
        return "Newborn";
      } else if (this.clickCount() < 3) {
        return "Baby";
      } else if (this.clickCount() < 10) {
        return "Child";
      } else if (this.clickCount() < 20) {
        return "Teen";
      } else if (this.clickCount() < 60){
        return "Adult";
      } else {
        return "Senior";
      }
    }, this)
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  cats.forEach(function(catItem){
    self.catList.push(new cat(catItem))
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.selectCat = function() {
    
  }

}

ko.applyBindings(new ViewModel());
