'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function () {

  //TOGGLE MENU AND BUTTON
  $('#toggleMenu').click(function () {
    $(this).toggleClass('active');
    $('.toggle-menu').slideToggle();
  });

  $('.toggle-menu').click(function () {
    $('#toggleMenu').toggleClass('active');
    $(this).slideToggle();
  });


  //NAVBAR CHANGE COLOR ON SCROOL
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".times").css("background-color", "#095550dc");
    } else {
      $(".times").css("background-color", "transparent");
    }
  });


  //CLEAR INPUTS
  $('.clear').click(function () {
    $('.h-p-input').val('');
  });


  //GET STARTED OPEN
  $('.open-getstarted').click(function () {
    $('#get_started').toggle("slide:right");
    $('#wallpaper-section').toggleClass('active');
  });

  //times
  $('#get_started .times svg').click(function () {
    $('#get_started').toggle("slide:right");
    $('#wallpaper-section').toggleClass('active');
  });


  //SIGN IN OPEN
  $('.signin_open').click(function () {
    $('#wallpaper-section').toggleClass('active');
    $('#sign-in-toggle').toggleClass('active');
  });

  $('#sign-in-toggle .times svg').click(function () {
    $('#sign-in-toggle').toggleClass('active');
    $('#wallpaper-section').toggleClass('active');
  });


  //REGISTER OPEN
  $('.register_open').click(function () {
    $('#wallpaper-section').toggleClass('active');
    $('#register_toggle').toggleClass('active');
  });

  $('#register_toggle .times svg').click(function () {
    $('#register_toggle').toggleClass('active');
    $('#wallpaper-section').toggleClass('active');
  });

  
});
