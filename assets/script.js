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

// insert script.js for carousel here

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one and other
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    // const amountToMove = nextSlide.style.left;
    //move to the next slide
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide');
    moveToSlide(track, currentSlide, nextSlide);
});
