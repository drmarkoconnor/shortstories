const storyList = document.querySelectorAll('.story-list');
const cardTitle = document.querySelector('.card-title');
const card = document.querySelectorAll('.card');
const cardBody = document.querySelector('.card-body');
const cardText = document.querySelector('.card-text');

storyList.forEach((story, idx) => {
  story.addEventListener('click', (e) => {
    e.target.classList.toggle('overText');
    console.log(card[idx]);
    card.forEach((cd, cidx) => {
      if (cidx != idx) {
        cd.classList.remove('show');
      }
    });
    card[idx].classList.toggle('show');
    storyList.forEach((story) => {
      if (story != e.target) {
        story.classList.remove('overText');
      }
    });
  });
});

// console.log(storyData);

// loops through all story-list class elements
// if it has been clicked ( the e.target )
// then toggles the overText class ( which pushes it right presently)
// then loops through all elements again and for those
//  elements that have the sticky out overText class, removes it.
// uses a similar logic to loop through all cards and compares the index
// of the card and the index of clicked element to show description
// the cards are all pre-rendered but with display set to none.
// the show class added 'unsets' the display. Rendered cards with display none
// are still in the DOM to manipulate but don't take up any 'space'
// the css adds a smooth transition to it
// storyList.forEach((story) => {
//   story.addEventListener('click', (e) => {
//     e.target.classList.toggle('overText');

//     cardTitle.innerHTML = e.target.innerHTML;
//     cardText.innerHTML = e.target.innerHTML;

//     storyList.forEach((story) => {
//       if (story != e.target) {
//         story.classList.remove('overText');
//       }
//     });
//   });
// });
// end of adding the list
