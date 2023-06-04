const toggle = document.getElementById('icon');
const body = document.querySelector('body');

icon.addEventListener('click', function () {
    this.classList.toggle('bi-moon-fill');
    document.body.classList.toggle("light-theme");
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.transition = '1s';
    } else {
        body.style.transition = '1s';
    }
});
