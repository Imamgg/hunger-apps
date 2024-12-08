const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

const listRestoran = document.querySelector(".list-restoran");
const fetchRestoran = async () => {
  try {
    const response = await fetch("https://restaurant-api.dicoding.dev/list");
    const responseJson = await response.json();
    return responseJson.restaurants;
  } catch (e) {
    listRestoran.innerHTML = `<p>Terjadi Kesalahan saat fetching data</p>`;
    console.log(e);
  }
};

function renderRestoran(restoran) {
  for (let i = 0; i < restoran.length; i++) {
    listRestoran.innerHTML += `
      <div class="list-restoran">
      <div class="restoran">
        <div class="img-content">
          <img
          src="https://restaurant-api.dicoding.dev/images/medium/${restoran[i].pictureId}"
          alt="${restoran[i].name}" />
          <div class="kota">
            <p>${restoran[i].city}</p>
          </div>
          <div class="rating">${restoran[i].rating}</div>
        </div>

        <div class="info-content">
          <h1>${restoran[i].name}</h1>
          <p>${restoran[i].description}</p>
        </div>
      </div>
    </div>`;
  }
}

const restoran = fetchRestoran();
restoran.then((result) => {
  renderRestoran(result);
});
