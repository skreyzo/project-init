console.log('client');
const form = document.forms.albumForm;
const cover = document.querySelector('.Cover');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = event.target.title.value;  
  //console.log({ title });
  const response = await fetch('/album', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  const result = await response.json();
  //console.log(result);
  const newCard = document.createElement('div');
  newCard.classList.add('albumCard');
  newCard.style.width = '18rem';
  newCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${result.title}</h5>                             
    <input type="text" name="title" />                  
    <button id=${result.id} type="button" class="btn btn-danger">Добавить</button>
    <a href="/album/${result.id}" class="card-link">Подробнее</a>
    <button id=${result.id} type="button" class="btn btn-danger">Удалить</button>
</div>
  `;
  cover.appendChild(newCard);
  event.target.title.value = '';
});

//! Обработчик передачи прав

const grantBtn = document.querySelector('.grant')

cover.addEventListener('click', async (event) => {
    // event.preventDefault();
    console.log(event.target)
    const { id } = event.target
    const input = document.getElementById(`${id}`)
    console.log(input.value)
    const response = await fetch('/album/right', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
    const result = await response.json();
});
