let mainbox = document.querySelector("#mainbox");

let myarray = [
  "Movie tittleone",
  "Movie tittletwo",
  "Movie tittletree",
  "Movie tittlefour ",
  "Movie tittlefive",
];

let myimg = "assets/svg/Rectangle 2.svg";

myarray.forEach(function (item) {
  let card = document.createElement("div");
  card.classList.add("movie-card");
  // let img = document.createElement("img");
  // img.src = myimg;
  // img.alt = item;

  card.innerHTML = `<img src="${myimg}" alt="movietittle">`;

  let h3 = document.createElement("h3");
  h3.textContent = "Movie tittle";
  h3.classList.add("h3-title");

  let box = document.createElement("h4");
  box.textContent = "Release in: 00:15:00 ";
  box.classList.add("h4-title");

  // card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(box);
  mainbox.appendChild(card);

  //* set timer
  let timeLeft = 15;
  let timer = setInterval(function () {
    timeLeft--;
    box.innerHTML = `Release in: <span style="color: rgba(244, 143, 143, 1)">${timeLeft}s</span>`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      box.innerHTML = `<span style="color: rgba(135, 232, 145, 1)">Released</span>`;
    }
  }, 1000);
});
