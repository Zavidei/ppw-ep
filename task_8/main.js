let progressBar;
let statusText;
let startButton;
let progressWrapper;

const createElements = () => {
    progressWrapper = document.createElement('div');
    startButton = document.createElement('button');
    progressBar = document.createElement('div');
    statusText = document.createElement('p');

    progressBar.className = 'progress-bar';
    progressWrapper.className = 'progress-wrapper';

    startButton.textContent = 'Start Loading';
    statusText.textContent = 'Progress: 0%';
}

const buildLoadingComponent = () => {
    document.body.appendChild(startButton);
    document.body.appendChild(progressWrapper);
    progressWrapper.appendChild(progressBar);
    document.body.appendChild(statusText);
}

function startLoading() {
    let progress = 0;
    const loading = setInterval(() => {
        progress++;
        progressBar.style.width = `${progress}%`;
        statusText.textContent = `Progress: ${progress}%`;

        if (progress >= 100) {
            clearInterval(loading);
        }

    }, 100);
}

createElements();
buildLoadingComponent();

startButton.addEventListener('click', startLoading);

