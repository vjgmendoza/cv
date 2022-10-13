$("button").click(function () {
     var temp = ($(this).text());
     navigator.clipboard.writeText(temp);
     alert("copied to clipboard: " + temp);
});

$("button").hover(function () {
     $(this).animate({ opacity: .5 });

}, function () {
     $(this).animate({ opacity: 1 });
}
);

$('p.read').click(function () {
     if ($('p.read').text() == "Read more") {
          $(this).text("Read less")
     } else {
          $(this).text("Read more")
     }
});