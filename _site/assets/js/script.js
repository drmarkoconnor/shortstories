const storyList = document.querySelectorAll('.story-list');

// loops through all li elements
// if it has been clicked ( the e.target )
// then toggles the overText class ( which pushes it right presently)
// then loops through all lis again and for those
// li elements that have the sticky out overText class, removes it.
// the css adds a smooth transition to it
storyList.forEach((story) => {
  story.addEventListener('click', (e) => {
    e.target.classList.toggle('overText');
    console.log(e.target);
    storyList.forEach((story) => {
      if (story != e.target) {
        story.classList.remove('overText');
      }
    });
  });
});
