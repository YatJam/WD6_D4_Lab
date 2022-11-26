document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

 

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

  // newResult = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  // resultParagraph.textContent = newResult
  // const result = document.createElement('#reading-list')
  // li.innnerText = result;
  // newResult.appendChild(li);
  
  // event.target.reset();

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('readling-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);

  return readingListItem;
}


