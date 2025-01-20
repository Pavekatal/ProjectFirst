const filtrFormShow = document.querySelector('.filtr-formShow');
const filtrButton = document.querySelector('.button-filtr');

filtrButton.addEventListener('click', () => {
    const compStyle = window.getComputedStyle(filtrFormShow);

    if (compStyle.display === 'none') {
        filtrFormShow.style.display = 'flex';
    } else {
        filtrFormShow.style.display = 'none';
    }
});