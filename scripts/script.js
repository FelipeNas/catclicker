var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Barry");
  this.imgSrc = ko.observable("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
