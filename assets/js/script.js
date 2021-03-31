const storyList = document.querySelectorAll('.story-list');
const cardTitle = document.querySelector('.card-title');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const cardText = document.querySelector('.card-text');
const stories =
  // loops through all story-list class elements
  // if it has been clicked ( the e.target )
  // then toggles the overText class ( which pushes it right presently)
  // then loops through all lis again and for those
  // li elements that have the sticky out overText class, removes it.
  // the css adds a smooth transition to it
  storyList.forEach((story) => {
    story.addEventListener('click', (e) => {
      e.target.classList.toggle('overText');

      cardTitle.innerHTML = e.target.innerHTML;
      cardText.innerHTML = e.target.innerHTML;

      storyList.forEach((story) => {
        if (story != e.target) {
          story.classList.remove('overText');
        }
      });
    });
  });
