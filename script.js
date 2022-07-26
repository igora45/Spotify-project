`use script`;
const showSidebar = document.querySelector(`.show-sidebar`);
const closeSidebar = document.querySelector(`.close-btn`);
const sidebar = document.querySelector(`.sidebar`);

showSidebar.addEventListener(`click`, function () {
  sidebar.classList.remove(`close-sidebar`);
});

closeSidebar.addEventListener(`click`, function () {
  sidebar.classList.add(`close-sidebar`);
});
