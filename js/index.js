function buttonCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayButton(data.categories));
}

function displayButton(data) {
  let buttonContainer = document.getElementById("button-container");

  for (let i of data) {
    let div = document.createElement("div");
    div.innerHTML = `
    <button class="btn btn-sm hover:text-white hover:bg-red-500">${i.category}</button>
    `;
    buttonContainer.appendChild(div);
  }
}

buttonCategories();
