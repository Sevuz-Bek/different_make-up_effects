import $ from "jquery";

import "bootstrap";

window.$ = window.jQuery = $;

import burgerMenu from "./components/burger-menu";
import burgerMenuTwo from "./components/burger-menu-2";
import moon from "./components/moon";



$(() => {
  burgerMenu.init();
  burgerMenuTwo.init();
  moon.init();
//   accordion.init();
//   hamburgers.init();
//   footerList.init();
//   hero.init();
//   weather.init();
//   navigation.init();
//   teaserEventSwiper.init();
//   animate.init();
//   header.init();
//   automplete.init();
//   nlTabs.init();
//   textfield.init();
//   gallery.init();
//   calendar.init();
//   zoomImage.init();
//   mainmenuPopover.init();
//   language.init();
//   metaSearch.init();
//   weatherStories.init();
//   teaserSwiper.init();
});