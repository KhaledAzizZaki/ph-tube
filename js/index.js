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
    <button onclick="loadCategoriesVideos(${i.category_id})" class="btn btn-sm hover:text-white hover:bg-red-500">${i.category}</button>
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
  videosContainer.innerHTML = "";
  if (videos.length == 0) {
    videosContainer.innerHTML = `
    <div
        class="col-span-full flex flex-col justify-center items-center py-20 gap-5"
      >
        <img src="assets/Icon.png" alt="" />
        <h2 class="font-bold text-2xl">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
  }
  videos.forEach((video) => {
    // console.log(video);
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

// LOAD CATEGORIES VIDEOS
function loadCategoriesVideos(id) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category));
}
