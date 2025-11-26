const button = document.getElementById("get-activity");
const activity = document.getElementById("activity");
const title = document.getElementById("title");
const body = document.body;

const gradients = [
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #fddb92, #d1fdff)"
];

button.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => {
      // update activity text
      activity.textContent = data.activity;

      // change title
      title.textContent = "🎉 HappyBot 🎉";

      // change background gradient randomly
      const gradient = gradients[Math.floor(Math.random() * gradients.length)];
      body.style.background = gradient;

      // move activity to a random position on screen
      const maxX = window.innerWidth - activity.offsetWidth;
      const maxY = window.innerHeight - activity.offsetHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      activity.style.left = randomX + "px";
      activity.style.top = randomY + "px";
    })
    .catch(err => console.error("There was an error from this API", err));
});
