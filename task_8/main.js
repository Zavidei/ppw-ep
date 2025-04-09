const startButton = document.getElementById('startButton');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');

let progress = 0;

function startLoading() {
    const loading = setInterval(() => {
        progress++;
        progressBar.style.width = `${progress}%`;
        statusText.textContent = `Progress: ${progress}%`;

        if (progress >= 100) {
            clearInterval(loading);
        }

    }, 100);
}

startButton.addEventListener('click', startLoading);

