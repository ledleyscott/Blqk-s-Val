var fontSize = 20;
var step = 20;

var base = 0;
var plus = 1;

var words = ["lol", "Are you sure?", "Really sure?", "Pookie please", "Think about it", "If you say so, I'll be very sad", "Ok, fine I'll stop asking", "Just kidding, please say yes", "You're breaking my heart"]


$(".b1").click(function () { 
    $(".butt").remove();
    $("h1").text("💓" + "Thank You Baby!!!" + "💓");
    $("h1").after("<h2>[Daddy's Little Cum Bucket]</h2>")
    document.getElementsByTagName("img")[0].getAttribute("src");
    document.getElementsByTagName("img")[0].setAttribute("src", "https://i.pinimg.com/originals/4f/bf/65/4fbf65a3512e9c694b47a0397e44a9d7.gif");
});



$(".b2").click(function () { 
    fontSize += step;
    $(".b1").css("font-size", fontSize + "px");

    base += plus;
    $(".b2").text(words[base]);

    if (base===8) {
        base=0;
    }
});
