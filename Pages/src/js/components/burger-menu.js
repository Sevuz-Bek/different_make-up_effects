export default {
  init() {
    $('.header__burger').on(
      "click",
      () => {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
      }
    );
  }
}

