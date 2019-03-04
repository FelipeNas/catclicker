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

  this.currentCat = ko.observable(new cat({
    clickCount: 0,
    name: "Barry",
    imgSrc: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    nickName: ["B","Bary","Barryn","Weird Cat"]
  }));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel());
