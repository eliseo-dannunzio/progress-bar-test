var ractive = new Ractive({
  el: document.body,
  template: "#template",
  data: {
    progressbars: [{
      name: "progress1",
      value: 0
    }, {
      name: "progress2",
      value: 0
    }, {
      name: "progress3",
      value: 0
    }],
    amounts: [25, 10, -10, -25],
    setValue: function(d) {
      return 0 >= d ? 0 : d
    },
    theLeft: function() {
      return (window.innerWidth / 2 - 40) / 2
    }
  },
  adjust: function(d) {
    var b = this.get("selectedProgress");
    if (null != b) {
      var a = "progressbars[" + b + "].value";
      0 >= this.get(a) && this.set(a, 0);
      var c = this.get(a);
      this.add(a, d);
      a = this.get(a);
      b = "#" + this.get("progressbars[" + b + "].name");
      (100 >= a && (c < a || c > a && 100 >= c)) &&
      $(b + " .progress-bar-fill").animate({
        width: 100 == a ? "100%" : "+=" + d
      }, 1E3, "linear");
      (100 >= a && 100 < c) &&
      (100 == a ?
        $(b + " .progress-bar-fill").animate({
          width: "100%"
        }, 1E3, "linear") :
        $(b + " .progress-bar-fill").animate({
          width: "+=" + (100 - a)
        }, 1E3, "linear").removeClass("progress-bar-fill-red"));
      (100 < a && 100 >= c) &&
      $(b + " .progress-bar-fill").animate({
        width: "+=" + (100 - c)
      }, 1E3, "linear").addClass("progress-bar-fill-red");
    }
  }
});