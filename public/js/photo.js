const foto = document.querySelector('.Foto');
const deleteFoto = document.querySelector('.deleteFoto');

foto?.addEventListener('click', async (event) => {
    console.log('BTN', event.target);
    const { id } = event.target;
      if (event.target.tagName === 'BUTTON') {       
        const response = await fetch('/album/fotodelete', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      // console.log(response);
      if (response.status === 200) {
        foto.removeChild(event.target.parentNode.parentNode);
      } else if (response.status === 555) {
        console.log('ERROR!!!!!11');
      }
    }
  });