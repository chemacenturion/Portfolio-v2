const openBio = document.getElementById('open1');
const openResume = document.getElementById('open2');
const openBag = document.getElementById('open3');
const openWrite = document.getElementById('open4');

const modalContainer = document.getElementById('bio-modal');
const resumeContainer = document.getElementById('resume');
const bagContainer = document.getElementById('bag');
const writeContainer = document.getElementById('writeUp');

const closeBio = document.getElementById('close1');
const closeResume = document.getElementById('close2');
const closeBag = document.getElementById('close3');
const closeWrite = document.getElementById('close4');

openBio.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeBio.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

openResume.addEventListener('click', () => {
    resumeContainer.classList.add('show');
});

closeResume.addEventListener('click', () => {
    resumeContainer.classList.remove('show');
});

openBag.addEventListener('click', () => {
    bagContainer.classList.add('show');
});

closeBag.addEventListener('click', () => {
    bagContainer.classList.remove('show');
});

openWrite.addEventListener('click', () => {
    writeContainer.classList.add('show');
});

closeWrite.addEventListener('click', () => {
    writeContainer.classList.remove('show');
});




