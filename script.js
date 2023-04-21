const bars = document.querySelector('.bars');
const list = document.querySelector('ul');

bars.addEventListener('click', () => {
    bars.classList.toggle('active');
    list.classList.toggle('active');
});

list.addEventListener('click', () => {
    bars.classList.toggle('active');
    list.classList.toggle('active');
});


