const video1 = document.getElementById('video_1');
const video2 = document.getElementById('video_2');
const video3 = document.getElementById('video_3');
const video4 = document.getElementById('video_4');
const video5 = document.getElementById('video_5');
const video6 = document.getElementById('video_6');

const offsets = [0, 0, 0, 0, 0, 0];
const volumes = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0];

const toggleButton = document.querySelector(".toggleButton");
const stopButton = document.querySelector(".stopButton");
const checkButton = document.querySelector(".checkButton");

const sliders = document.querySelectorAll(".controls__slider");

function timeStop() {
		video1.currentTime = 0;
		video1.volume = volumes[0];
		video2.currentTime = 0;
		video2.volume = volumes[1];
		video3.currentTime = 0;		
		video3.volume = volumes[2];
		video4.currentTime = 0;
		video4.volume = volumes[3];
		video5.currentTime = 0;
		video5.volume = volumes[4];
		video6.currentTime = 0;
		video6.volume = volumes[5];
}

function togglePlay() {
	timeStop();
	video1.play();
	video2.play();
	video3.play();
	video4.play();
	video5.play();
	video6.play();
};

function checkToggle() {
	
	video1.volume = sliders[0].value;
	video2.volume = sliders[1].value;
	video3.volume = sliders[2].value;
	video4.volume = sliders[3].value;
	video5.volume = sliders[4].value;
	video6.volume = sliders[5].value;
	
	/*
	let currentTime1 = video1.currentTime.toFixed(5)*100000;
	if (currentTime1 > offsets[1]) {
		video2.play();
	}
	let currentTime2 = video2.currentTime.toFixed(5)*100000;
	if (currentTime2 > offsets[2]) {
		video3.play();
	}
	let currentTime3 = video3.currentTime.toFixed(5)*100000;
	if (currentTime2 > offsets[3]) {
		video4.play();
	}
	*/
}

function clickStopButton() {
	let currentTime = video1.currentTime.toFixed(5)*100000;
	console.log(currentTime);
	
		video1.pause();
		video2.pause();
		video3.pause();
		video4.pause();
		video5.pause();
		video6.pause();
		timeStop();
};

toggleButton.addEventListener("click", togglePlay);
stopButton.addEventListener("click", clickStopButton);
checkButton.addEventListener("click", checkToggle);

video1.addEventListener("timeupdate", checkToggle);