const navButtons = document.querySelectorAll('.projects__nav-btn');
const projects = document.querySelectorAll('.projects__item');
function showProject(index) {
  navButtons.forEach(button => {
    const isActive = button.dataset.index === index;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive);
  });
  projects.forEach(project => {
    const isActive = project.dataset.project === index;
    project.classList.toggle('is-active', isActive);
  });
}
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    showProject(button.dataset.index);
  });
});
showProject('1');