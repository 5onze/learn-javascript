// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json()) //불러와진 data를 json으로 변환
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items'); // container => ul
  container.innerHTML = items.map((item) => createHTMLString(item)).join(''); //li 태그로 만듬
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img class="item_thumbnail" src="${item.image}" alt="${item.type}" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
// Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons'); // 이벤트 위임: 컨테이너에 이벤트를 등록해서 한곳에서 핸들링하는 방법
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', () => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
