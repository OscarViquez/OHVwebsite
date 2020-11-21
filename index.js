$(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });