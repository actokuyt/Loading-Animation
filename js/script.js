const circleOne = document.querySelector(".circleOne");
const circleTwo = document.querySelector(".circleTwo");
// function switcher(){
//   if(circleOne.classList.contains('moveRight') & circleTwo.classList.contains('moveLeft')){
//     circleOne.classList.remove('moveRight');
//     circleTwo.classList.remove('moveLeft');
//     circleOne.classList.add('moveLeft');
//     circleTwo.classList.add('moveRight');
//   }
//   else{
//     circleOne.classList.remove('moveLeft');
//     circleTwo.classList.remove('moveRight');
//     circleOne.classList.add('moveRight');
//     circleTwo.classList.add('moveLeft');
//   }
// };
circleOne.addEventlistener("animationend", switcher());
circleOne.addEventlistener("animationend", switcher());
