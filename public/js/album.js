console.log('client');
const form = document.forms.albumForm;
const cover = document.querySelector('.Cover');
const deleteBtn = document.querySelector('.delete');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  console.log({ title });
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
    <button data-btn="access" id=${result.id} type="button" class="btn btn-danger">Дать права!</button>
    <a href="/album/${result.id}" class="card-link">Фото!</a>
    <button data-btn="delete" id=${result.id} type="button" class="btn btn-danger">Удалить альбом!</button>
  </div>
  `;
  cover.appendChild(newCard);
  event.target.title.value = '';
});

//! Обработчик передачи прав

//const grantBtn = document.querySelector('.grant')


/* cover.addEventListener('click', async (event) => {
    // event.preventDefault();
    //console.log(event.target)
    const { id } = event.target
    const input = document.getElementById(`${id}`)
    //console.log(input.value)
    const response = await fetch('/album/right', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ value, id }),
    });
    const result = await response.json();

}); */

//! Слушатель на удаление альбома

cover.addEventListener('click', async (event) => {
   try {
     const { id } = event.target;
     const {value} = document.getElementById(`${id}`)
      if (event.target.tagName === 'BUTTON') {
    //console.log('BTN', event.target.id, event.target.tagName);
    //console.log('eventttttttttttttt', event.target.dataset.btn);
    if(event.target.dataset.btn === 'delete') {
      const response = await fetch('/album/delete', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }); 
        if (response.status === 200) {
      cover.removeChild(event.target.parentNode.parentNode);
    }
    // console.log(response);
    }
    if(event.target.dataset.btn === 'access' && value) {
      const response = await fetch('/album/right', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ value, id }),
      });
      if (response.status === 200) {
        alert(`Вы дали права пользователю  с почтой ${value}!`)
      }
      
    // console.log(response);
    }
  }
  } catch (error) {
    console.error('RRRRRR', error);
  }
});
