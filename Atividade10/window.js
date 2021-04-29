const title = document.body.querySelector('.title');

const openWindow = (element) => {
    title.innerText = 'Janela aberta';
    element.src = './assets/open_window.png';
}

const closeWindow = (element) => {
    title.innerText = 'Janela fechada';
    element.src = './assets/closed_window.png';
}

const brokeWindow = (element) => {
    title.innerText = 'Janela quebrada';
    element.src = './assets/broken_window.png';
}