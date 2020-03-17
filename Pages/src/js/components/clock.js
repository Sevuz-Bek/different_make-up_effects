const deg =6;

const hr = document.querySelector('#clock-hr');
const mn = document.querySelector('#clock-mn');
const sc = document.querySelector('#clock-sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
  mn.style.transform = `rotateZ(${(mm)}deg)`;
  sc.style.transform = `rotateZ(${(ss)}deg)`;
})