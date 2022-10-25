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

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $(document).ready(function () {
    $("#signupform").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: "required",
        phone: "required",
        number: "required",
        where: "required",
        anything: "required",
      },
      messages: {
        firstname: "Enter Your First Name"
        lastname: "Enter Your Last Name",
        email: "Enter Your Email Address",
        phone: "Enter Your Phone Number",
        number: "Please Answer This",
        where: "Please Answer This",
        anything: "Any Queries?",
      },
    });
  });
});
