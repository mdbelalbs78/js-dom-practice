const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '8px';
    section.style.backgroundColor = 'lightgray';
}

// const plecesContainer = document.getElementById('places-container');
// plecesContainer.style.backgroundColor = 'yellow';

const plecesContainer = document.getElementById('places-container')
plecesContainer.classList.add('text-center')
plecesContainer.classList.remove('large-text')
