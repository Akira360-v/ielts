let linkRus = document.querySelector('#rus');
let linkEng = document.querySelector('#eng');

linkEng.addEventListener('click', function() {
    linkRus.classList.remove('is-active');
    linkEng.classList.add('is-active');
})

linkRus.addEventListener('click', function() {
    linkEng.classList.remove('is-active');
    linkRus.classList.add('is-active');
})