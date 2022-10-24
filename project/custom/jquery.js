$(document).ready(function () {
  $("#image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });
  $("#form").submit(function () {
    let follow = $("#form").serializeArray();
    var $inputs = $("#form :input");
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    $("#name").append(values.firstname);
    $("#name1").append(values.lastname);
    $("#email").append(values.email);
    $("#phone").append(values.phone);
    $("#date").append(values.date);
    $("#member").append(values.members);
    $("#tour").append(values.tour);
    $("#button1").append(checked.one);
    $("#button2").append(checked.two);
    $("#button3").append(checked.three);
    $("#time").append(checked.time1);
    $("#time1").append(checked.time2);
    $("#time2").append(checked.time3);
    $("#write").append(values.write1);
    $("#write1").append(values.write2);
  });
});
