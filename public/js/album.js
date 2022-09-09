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
  document.getElementsByClassName('inputComment').value = '';
  const result = await response.json();
  //console.log(result);
  const newCard = document.createElement('div');
  newCard.classList.add('albumCard');
  // newCard.style.width = '18rem';
  newCard.innerHTML = `
  <div class="card-body">
  <div class="picCard"></div>
  <h6 class="card-title">${result.title}</h6>
  <div class="shared">
    <i class="fa-solid fa-at"></i>
    <input
      class="inputAlbom"
      id=${result.id}
      type="text"
      name="title"
      placeholder="Type friends email"
    />
    <button
      data-btn="access"
      id=${result.id}
      type="button"
      class="btnSh text-light"
    >
      Share
    </button>
  </div>
  <a href="/album/${result.id}" class="card-link">
    <button type="button" class="btnGo text-light">
      <h6> Go to photo</h6>
    </button>
  </a>
  <hr class="hr" />
  <button
    data-btn="delete"
    id=${result.id}
    type="button"
    class="btnDel text-light"
  >
    Delete album
  </button>
</div>
  `;

  cover.appendChild(newCard);
  event.target.title.value = '';
});

//! Слушатель на удаление альбома

cover.addEventListener('click', async (event) => {
  try {
    const { id } = event.target;
    const { value } = document.getElementById(`${id}`);
    if (event.target.tagName === 'BUTTON') {
      // console.log('BTN', event.target.id, event.target.tagName);
      // console.log('eventttttttttttttt', event.target.dataset.btn);
      if (event.target.dataset.btn === 'delete') {
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
      console.log(event.target.dataset.btn);
    }

    if (event.target.dataset.btn === 'access' && value) {
      const response = await fetch('/album/right', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ value, id }),
      });
      if (response.status === 200) {
        alert(`Вы дали права пользователю  с почтой ${value}!`);
      }

      // console.log(response);
    }
  } catch (error) {
    console.error('RRRRRR', error);
  }
});
