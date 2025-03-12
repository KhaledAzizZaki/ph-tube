// BUTTON DISPLAY
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

// LOAD VIDEOS DISPLAY
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videos.forEach((video) => {
    console.log(video);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card ">
        <figure>
          <img
          class="w-full h-48 object-cover"
            src="${video.thumbnail}"
            alt=""
            
          />
        </figure>
        <div class="flex gap-4">
          <div class="avatar py-4">
            <div
              class="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2"
            >
              <img
                src="${video.authors[0].profile_picture}"
              />
            </div>
          </div>

          <div class="py-4">
            <h4 class="font-bold">${video.title}</h4>
            <div class="flex gap-2">
              <p class="text-gray-500">${video.authors[0].profile_name}</p>
              <img
                class="w-5"
                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                alt=""
              />
            </div>
            <p class="text-gray-500">${video.others.views} view</p>
          </div>
        </div>
      </div>
    `;
    videosContainer.appendChild(div);
  });
};

loadVideos();
