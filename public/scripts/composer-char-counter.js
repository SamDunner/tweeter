$(function() {

  $(".new-tweet textarea").on("keyup", function() {
    var $input = $(this);
    var $tweetLength = $input.val().length;
    var $counter = $input.siblings("span.counter")

    $counter.text(140 - $tweetLength);
    if($tweetLength > 140) {
      $counter.addClass("invalid");
    } else {
      $counter.removeClass("invalid");
    };
  });
});
