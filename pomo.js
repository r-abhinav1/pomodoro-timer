let intro = document.querySelector(".intro");
let logo = document.querySelector(".logoHeader");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(() => {
        logoSpan[0].classList.add("active");
    }, 1000);

    setTimeout(() => {
        logoSpan[1].classList.add("active");
        logoSpan[2].classList.add("active");
    }, 2000);


    setTimeout(() => {
        logoSpan[0].classList.remove("active");
        logoSpan[2].classList.remove("active");
        logoSpan[0].classList.add("fade");
        logoSpan[2].classList.add("fade");
        logoSpan[1].classList.add("fade");
    }, 3000);

    setTimeout(() => {
        logoSpan[1].classList.remove("active");
        
    }, 4000)

    setTimeout(() => {
        intro.style.top = "200vh";
    }, 5000)
})


//Timer JS 

let restTime = 600;
let studyTime = 3300;
let initialTime = studyTime; 
let remainingTime = initialTime;
let timerInterval;
let isPaused = false;
let study = true;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timer_name = document.getElementById('timer-name');
const play_img = document.getElementById('start-img');

function updateTimer() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime - hours * 3600) / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (remainingTime <= 0) {
        changeTime();
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime - hours * 3600) / 60);
        const seconds = remainingTime % 60;
        timerElement.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        clearInterval(timerInterval);
        ;
    } else {
        remainingTime--;
    }
}

function changeTime() {
    if (study) {
        study = false;
        isPaused = false;
        initialTime = restTime;
        remainingTime = restTime;
        timer_name.innerHTML = 'Rest Timer';
        play_img.src = "assets/play-button.jpg";
    }
    else {
        study = true;
        isPaused = false;
        initialTime = studyTime;
        remainingTime = studyTime;
        timer_name.innerHTML = 'Study Timer';
        play_img.src = "assets/play-button.jpg";
    }
}

startButton.addEventListener('click', function () {
    if (!isPaused) {
        timerInterval = setInterval(updateTimer, 1000);
        isPaused = true;
        play_img.src = "assets/pause-button.jpg";
    }

    else {
        clearInterval(timerInterval);
        isPaused = false;
        play_img.src = "assets/play-button.jpg";
    }
});

restartButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    remainingTime = initialTime;
    updateTimer();
    isPaused = false;
    play_img.src = "play-button.jpg";
});
updateTimer();

// Timer JavaSrcipt END
//----------------------------------------------------------------------------------------
//Todo JS START
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const newTask = taskInput.value.trim();


    if (newTask !== "") {
        const li = document.createElement("li");
        // const hr = document.createElement("hr");
        const span = document.createElement("span");
        const button = document.createElement("button");
        // const text = document.createElement("span");
        const deleteButton = document.createElement("button");
        const img = document.createElement("img")
        let isscrath = false;

        img.id = "cross";
        // hr.id = "horizontal";
        img.src = "close-button.jpg";
        span.id = "li-content";
        deleteButton.id = "delete";
        span.textContent = newTask;
        deleteButton.appendChild(img);

        li.appendChild(span);
        button.id = "done";
        li.insertBefore(button, li.firstChild);

        taskList.appendChild(li);
        li.insertBefore(button, li.firstChild);
        taskList.appendChild(li);
        // taskList.appendChild(hr);
        li.appendChild(deleteButton);

        taskInput.value = "";


        button.addEventListener("click", function () {
            // li.classList.toggle("completed");
            if (!isscrath) {
                span.id = 'scratch';
                isscrath = true;
            }
            else{
                span.id='li-content';
                isscrath=false;
            }

        });
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
    }
}


//Right buttons
var videoId = 'n61ULEU7CO0';

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        },
        height: '0',
        width: '0',
        playerVars: {
            controls: 0,
            autoplay: 0
        }

    });
}

function onPlayerReady(_event) {
    var music = document.getElementById('music');
    var icon = document.getElementById("music-img");
    let on = false;
    let on_color = "#EE7867";
    let off_color = "#fdfdfd";

    music.addEventListener('click', function () {
        if (!on) {
            player.playVideo();
            on = true;
            // icon.src="music-on.jpg";
            icon.setAttribute("style", `fill:${on_color}`);
        }
        else {
            player.pauseVideo();
            on = false;
            // icon.src="music-off.jpg";
            icon.setAttribute("style", `fill:${off_color}`);
        }
    });

}

const changeButton = document.getElementById('changeButton');
const element = document.querySelector('body');

const images = [
     'lofi3.jpg','lofi1.gif', 'lofi2.gif', 'lofi4.jpg', 'lofi5.jpg', 'lofi6.jpg','lofi7.jpg'
];

let currentImageIndex = 0;

changeButton.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageUrl = images[currentImageIndex];
    element.style.backgroundImage = `url(assets/${newImageUrl})`;
});

const fullscreenButton = document.getElementById('fullscreenButton');
const full=false;

fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
});

function enterFullscreen() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { 
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
    }
}

        