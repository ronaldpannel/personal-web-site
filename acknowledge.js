document.querySelectorAll(".carousel").forEach(carousel => {

    const items = carousel.querySelectorAll(".carousel-item");
    const buttonHtml = Array.from(items, () => {
        return`<span class='carousel-button'></span>`
    });
    carousel.insertAdjacentHTML('afterend', `
    <div class= 'carousel-nav'>
    ${buttonHtml.join('')}
    </div>
    `);
    const buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => (
        button.addEventListener('click', () => {
        items.forEach(item => item.classList.remove('carousel-item-selected'))   
        buttons.forEach(button => button.classList.remove('carousel-button-selected'))         

        })
    ))
});