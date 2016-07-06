$(document).ready(function() {
  $(".new-tweet textarea").on("keyup", function() {
    var tweetLength = $(this).val().length;
    var counter = $(this).siblings("span")

    counter.text(140 - tweetLength);
      if(tweetLength > 140) {
        counter.css("color", "red");
      };

      if (tweetLength <= 140) {
        counter.css("color", "black");
      };
   });
});




