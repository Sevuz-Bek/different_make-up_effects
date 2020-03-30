export default {
  init() {
    let bg = document.getElementById('moon-bg');
    let moon = document.getElementById('moon');
    let moonMountain = document.getElementById('moon-mountain');
    let moonRoad = document.getElementById('moon-road');
    let moonTitle = document.getElementById('moon-title');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;

      bg.style.top = value * .5 + 'px';
      moon.style.left = -value * .5 + 'px';
      moonMountain.style.top = -value * .15 + 'px';
      moonRoad.style.top = value * .15 + 'px';
      moonTitle.style.top = value * 1 + 'px';
    })
  }
}