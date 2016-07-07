function createTweetElement(tweet) {
  return $(
    `<article class="tweet">
        <header class="tweet-header">
          <img class="headshot" src="${tweet.user.avatars.small}">
          <p class="tweet-name">${tweet.user.name}</p>
          <p class="tweet-handle">${tweet.user.handle}</p>
        </header>

        <section class="tweet-section">
          <p class="tweet-content">${tweet.content.text}</p>
        </section>

        <footer class="tweet-footer">
          <p class="post-date">${tweet.created_at}</p>
          <span class="tweet-footer-span">
            <a class="icons" href="#"><i class="fa fa-flag" aria-hidden="true"></i></a>
            <a class="icons" href="#"><i class="fa fa-retweet" aria-hidden="true"></i></a>
            <a class="icons" href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
          </span>
        </footer>
     </article>`
)}

var textOk;

$(document).ready(function() {
  $('.container .new-tweet form').submit(function(event) {
    validation($(this).find("textarea").val());
    event.preventDefault();
    if (textOk === true) {
    $.ajax({
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        success: function(html) {
          $('.container .new-tweet form')[0].reset();
          $('.counter').text(140);
          loadTweets()
        }
    });
    }
  });

  loadTweets();
});


function renderTweets(tweetData) {
  var $tweets = $('.posted-tweets').empty();
  tweetData.forEach(function(tweet) {
    $tweets.append(createTweetElement(tweet));
  });
}

function loadTweets() {
  $.ajax({
      url: "http://localhost:8080/tweets",
      type: "GET",
      success: function(data) {
        renderTweets(data)
      }
  });
}

function validation(tweet) {
  if (tweet === "") {
    $('.counter').text("Error: there is no body in this tweet!");
    textOk = false;
  } else if (tweet.length > 140) {
    $('.counter').text("Error: tweet is too long!");
    textOk = false;
  } else {
    textOk = true;
  }
}

