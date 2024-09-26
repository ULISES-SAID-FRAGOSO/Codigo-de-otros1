const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');// se modifican y agregan los .
const $b = document.querySelector('.blog');// se modifican y agregan los .
const $l = document.querySelector('.location');// se modifican y agregan los .

function displayUser(username) {
  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(data);
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
    const data = await response.json(); // Parseamos la respuesta como JSON
    console.log(data);
  } catch (error) {
    handleError(error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');