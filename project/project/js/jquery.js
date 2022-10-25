$(document).ready(function(){
    $("#signupform").validate({
      rules:{
        firstname:"required",
        lastname:"required",
        email:"required",
        phone:"required",
        number:"required",
        where:"required",
        anything:"required",
      },
      messages:{
        firstname:"enter your first name",
        lastname:"enter your last name",
        email:"enter your email address",
        phone:"enter your phone no.",
        number:"please answer this",
        where:"please answer this",
        anything:"any queries?",
      },
    });
  });