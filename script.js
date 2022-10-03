function showAboutMe (event) {
  event.preventDefault();
  aboutMe.innerHTML = 'I am an aspiring developer - looking to change careers into the exciting, fast paced world of tech. I have loved technology and all the intresting things you can do with it all my life - but never realised how easy it was to learn to code and get involved with building and maintaining projects. I have a huge desire to learn from experienced tech businesses, with my key goal of using my skills to make a diffrence for people and to increase accessibility. I have been learning though <a href="https://www.shecodes.io">SheCodes</a> and teaching myself. I have completed two certifications with SheCodes - SheCodes Basics and SheCodes Plus. You can see my certifications and my She codes profile <a href="https://www.shecodes.io/graduates/47803-lauren-wheeldon">here.';
}
  
let aboutMe = document.querySelector(`#aboutMe`);
aboutMe.addEventListener("click", showAboutMe);

  
let now = new Date();
let clockHour = [
  `00`,
  `01`,
  `02`,
  `03`,
  `04`,
  `05`,
  `06`,
  `07`,
  `08`,
  `09`,
  `10`,
  `11`,
  `12`,
  `13`,
  `14`,
  `15`,
  `16`,
  `17`,
  `18`,
  `19`,
  `20`,
  `21`,
  `22`,
  `23`,
];

let currentTime = clockHour[now.getHours()];
let clockMinute = [
  `00`,
  `01`,
  `02`,
  `03`,
  `04`,
  `05`,
  `06`,
  `07`,
  `08`,
  `09`,
  `10`,
  `11`,
  `12`,
  `13`,
  `14`,
  `15`,
  `16`,
  `17`,
  `18`,
  `19`,
  `20`,
  `21`,
  `22`,
  `23`,
  `24`,
  `25`,
  `26`,
  `27`,
  `28`,
  `29`,
  `30`,
  `31`,
  `32`,
  `33`,
  `34`,
  `35`,
  `36`,
  `37`,
  `38`,
  `39`,
  `40`,
  `41`,
  `42`,
  `43`,
  `44`,
  `45`,
  `46`,
  `47`,
  `48`,
  `49`,
  `50`,
  `51`,
  `52`,
  `53`,
  `54`,
  `55`,
  `56`,
  `57`,
  `58`,
  `59`,
];
let currentMinute = clockMinute[now.getMinutes()];
let weekDayName = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = weekDayName[now.getDay()];

let time = document.querySelector("#clockUK");
time.innerHTML = `I hope you are having a lovely ${day} 👌. The time is ${currentTime}:${currentMinute}`;







