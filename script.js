function showAboutMe (event) {
  event.preventDefault();
  aboutMe.innerHTML = 'I am an aspiring developer - looking to change careers into the exciting, fast paced world of tech. I have loved technology and all the intresting things you can do with it all my life - but never realised how accessible it was to learn to code and get involved with building and maintaining projects. I have a huge desire to learn from an experienced tech businesses, with my key goal of using my skills to make a diffrence for people and to increase accessibility. I have been learning though <a href="https://www.shecodes.io">SheCodes</a> and teaching myself. I have completed two certifications with SheCodes - SheCodes Basics and SheCodes Plus. You can see my certifications and my SheCodes profile <a href="https://www.shecodes.io/graduates/47803-lauren-wheeldon">here.';}
  
  function showCurrentRole (event) {
    event.preventDefault();
    currentRole.innerHTML = 'Currently I work for a GP Practice as a medical secretaty. My most interesting part of the role has been managing the practices website and Facebook account to deliver increased communication and clarity to our stakeholders, whilst helping staff members with reduced queries. I have been trusted with approving content and keeping this up to date and making changes, however the website was not built by myself. The website is built and maintained on WordPress which I have self-taught and learnt how to handle as issues have arrisen. It gave me the desire to learn more which is when I decided to learn HTML/CSS/JS stack. Between all this, I manage patients referrals, incoming hospital information, incoming telephone/email queries, training team members, and being a key member of the practice who is happy to share ideas on improvements.'
  }
  
let aboutMe = document.querySelector(`#aboutMe`);
aboutMe.addEventListener("click", showAboutMe);

let currentRole = document.querySelector(`#currentRole`);
currentRole.addEventListener("click", showCurrentRole);

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







