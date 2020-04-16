export default {
  init() {
    $('.header-2__burger').on(
      "click",
      () => {
        $('.header-2__burger, .header-2__menu-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
      }
    );
  }
}

