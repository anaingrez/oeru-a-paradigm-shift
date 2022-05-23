var section = $('li');

function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);

const root = document.documentElement
// Mouse goes to ball, ball getts bigger
root.addEventListener("mousemove", e => {
    const relativeMousePosition = e.clientY / window.innerHeight * 100;
    const enlargeFactor = 15;
    const defaultTopValue = 15;
    const defaultBottomValue = 15;
    root.style.setProperty('--top-circle-inner', defaultTopValue - ((relativeMousePosition-50)/enlargeFactor) + '%');
    root.style.setProperty('--bottom-circle-inner', defaultBottomValue + ((relativeMousePosition-50)/enlargeFactor) + '%');
});