let menu = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	sidebar.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("fa-times");
	sidebar.classList.remove("active");
};

let moon = document.querySelector(".fa-moon");

moon.onclick = () => {
	moon.classList.toggle("fa-sun");
	if (moon.classList.contains("fa-sun")) {
		document.body.classList.add("active");
	} else {
		document.body.classList.remove("active");
	}
};

const player = document.querySelector(".player"),
	musicImg = player.querySelector(".img-area img"),
	musicName = player.querySelector(".song-details .name"),
	musicArtist = player.querySelector(".song-details .artist"),
	playPauseBtn = player.querySelector(".play-pause"),
	prevBtn = player.querySelector("#prev"),
	nextBtn = player.querySelector("#next"),
	mainAudio = player.querySelector("#main-audio"),
	progressArea = player.querySelector(".progress-area"),
	progressBar = progressArea.querySelector(".progress-bar");

let musicIndex = true;
isMusicPaused = true;

window.addEventListener("load", () => {
	loadMusic(musicIndex);
	playingSong();
});
function loadMusic(indexNumb) {
	musicName.innerText = allMusic[indexNumb - 1].name;
	musicArtist.innerText = allMusic[indexNumb - 1].artist;
	musicImg.src = `assets/files/img/${allMusic[indexNumb - 1].img}.jpg`;
	mainAudio.src = `assets/files/songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic() {
	player.classList.add("paused");
	playPauseBtn.querySelector("i").innerText = "pause";
	mainAudio.play();
}

//pause music function
function pauseMusic() {
	player.classList.remove("paused");
	playPauseBtn.querySelector("i").innerText = "play_arrow";
	mainAudio.pause();
}

//prev music function
function prevMusic() {
	musicIndex--; //decrement of musicIndex by 1
	//if musicIndex is less than 1 then musicIndex will be the array length so the last music play
	musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
	loadMusic(musicIndex);
	playMusic();
	playingSong();
}

//next music function
function nextMusic() {
	musicIndex++; //increment of musicIndex by 1
	//if musicIndex is greater than array length then musicIndex will be 1 so the first music play
	musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
	loadMusic(musicIndex);
	playMusic();
	playingSong();
}

// play or pause button event
playPauseBtn.addEventListener("click", () => {
	const isMusicPlay = player.classList.contains("paused");
	//if isPlayMusic is true then call pauseMusic else call playMusic
	isMusicPlay ? pauseMusic() : playMusic();
	playingSong();
});

//prev music button event
prevBtn.addEventListener("click", () => {
	prevMusic();
});

//next music button event
nextBtn.addEventListener("click", () => {
	nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
	const currentTime = e.target.currentTime; //getting playing song currentTime
	const duration = e.target.duration; //getting playing song total duration
	let progressWidth = (currentTime / duration) * 100;
	progressBar.style.width = `${progressWidth}%`;

	let musicCurrentTime = player.querySelector(".current-time"),
		musicDuartion = player.querySelector(".max-duration");
	mainAudio.addEventListener("loadeddata", () => {
		// update song total duration
		let mainAdDuration = mainAudio.duration;
		let totalMin = Math.floor(mainAdDuration / 60);
		let totalSec = Math.floor(mainAdDuration % 60);
		if (totalSec < 10) {
			//if sec is less than 10 then add 0 before it
			totalSec = `0${totalSec}`;
		}
		musicDuartion.innerText = `${totalMin}:${totalSec}`;
	});
	// update playing song current time
	let currentMin = Math.floor(currentTime / 60);
	let currentSec = Math.floor(currentTime % 60);
	if (currentSec < 10) {
		//if sec is less than 10 then add 0 before it
		currentSec = `0${currentSec}`;
	}
	musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e) => {
	let progressWidth = progressArea.clientWidth; //getting width of progress bar
	let clickedOffsetX = e.offsetX; //getting offset x value
	let songDuration = mainAudio.duration; //getting song total duration

	mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
	playMusic(); //calling playMusic function
	playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = player.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
	let getText = repeatBtn.innerText; //getting this tag innerText
	switch (getText) {
		case "repeat":
			repeatBtn.innerText = "repeat_one";
			repeatBtn.setAttribute("title", "Song looped");
			break;
		case "repeat_one":
			repeatBtn.innerText = "shuffle";
			repeatBtn.setAttribute("title", "Playback shuffled");
			break;
		case "shuffle":
			repeatBtn.innerText = "repeat";
			repeatBtn.setAttribute("title", "Playlist looped");
			break;
	}
});

//code for what to do after song ended
mainAudio.addEventListener("ended", () => {
	// we'll do according to the icon means if user has set icon to
	// loop song then we'll repeat the current song and will do accordingly
	let getText = repeatBtn.innerText; //getting this tag innerText
	switch (getText) {
		case "repeat":
			nextMusic(); //calling nextMusic function
			break;
		case "repeat_one":
			mainAudio.currentTime = 0; //setting audio current time to 0
			loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
			playMusic(); //calling playMusic function
			break;
		case "shuffle":
			let randIndex = Math.floor(Math.random() * allMusic.length + 1); //genereting random index/numb with max range of array length
			do {
				randIndex = Math.floor(Math.random() * allMusic.length + 1);
			} while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
			musicIndex = randIndex; //passing randomIndex to musicIndex
			loadMusic(musicIndex);
			playMusic();
			playingSong();
			break;
	}
});

// let playing = true;
// let random = false;

// let playButton = document.querySelector(".player-play");
// let nextButton = document.querySelector(".player-next");
// let prevButton = document.querySelector(".player-prev");

// let thumbnail = document.querySelector(".player_img");

// let song = document.querySelector("#song");
// let songList = document.querySelectorAll(".song_list");

// let songTitle = document.querySelector(".player_box--title");
// let songArtist = document.querySelector(".player_box--author");

// let progressBar = document.querySelector("#progress-bar");

// let songIndex = 0;

// let songs = [
// 	"./assets/files/WBH.mp3",
// 	"./assets/files/Faded.mp3",
// 	"./assets/files/Mascara.mp3",
// 	"./assets/files/Giua Dai Lo Dong Tay.mp3",
// 	"./assets/files/In The End.mp3",
// 	"./assets/files/xich linh.mp3",
// 	"./assets/files/See you again.mp3",
// 	"./assets/files/Noi Nay Co Anh.mp3",
// 	"./assets/files/Thuy trieu.mp3",
// 	"./assets/files/Ke Theo Duoi Anh Sang.mp3",
// 	"./assets/files/That Girl - Olly Murs.mp3",
// ];

// let thumbnails = [
// 	"./assets/files/img/way-back-home.jpg",
// 	"./assets/files/img/fadedjpg.jpg",
// 	"./assets/files/img/mascara.jpg",
// 	"./assets/files/img/giua dai lo dong tay.jpg",
// 	"./assets/files/img/in the end.jpg",
// 	"./assets/files/img/xich linh.jpg",
// 	"./assets/files/img/see-you-again.jpg",
// 	"./assets/files/img/noi nay co anh.jpg",
// 	"./assets/files/img/thuy trieu.jpg",
// 	"./assets/files/img/ke theo duoi sanh sang.jpg",
// 	"./assets/files/img/that girl.jpg",

// ];

// let songTitles = [
// 	"Way Back Home", "Faded", "Mascara", "Giữa Đại Lộ Đông Tây",
// 	"In The End", "Xích Linh", "See You Again", "Nơi Này Có Anh", "Thủy Triều", "Kẻ Theo Đuổi Ánh Sáng", "That Girl",
// ];

// let songArtists = [
// 	"Shaun", "Alan Walker", "Chillies", "Uyên Linh", "Linkin Park", "Chấp Tố Hề", "Wiz Khalifa Ft Charlie Puth", "Sơn Tùng M-TP", "Phó Mộng Đồng", "Huy Vạc", "Olly Murs",
// ];

// function handleClickEachSong(e) {
// 	const index = parseInt(e.target.dataset.index);
// 	nextSong(index);
// }

// function playPause() {
// 	if (playing) {
// 		const song = document.querySelector("#song");

// 		song.play();
// 		thumbnail.classList.add("is-playing");
// 		playButton.classList.add("fa-play");

// 		playing = false;
// 	} else {
//         thumbnail.classList.remove("is-playing");
// 		playButton.classList.remove("fa-play");
// 		song.pause();

// 		playing = true;
// 	}
// }

// function nextSong(index = - 1) {
//     if (index >= 0) {
//         songIndex = index;
//     } else {
//         songIndex++;
//     }

//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }

//     song.src = songs[songIndex];
//     thumbnail.src = thumbnails[songIndex];

//     songTitle.innerHTML = songTitles[songIndex];
//     songArtist.innerHTML = songArtists[songIndex];

//     playing = true;
//     playPause();
// }

// function previousSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = 1;
//     }

//     song.src = songs[songIndex];
//     thumbnail.src = thumbnails[songIndex];

//     songTitle.innerHTML = songTitles[songIndex];
//     songArtist.innerHTML = songArtists[songIndex];

//     playing = true;
//     playPause();
// }

// function updateProgressValue() {
// 	progressBar.max = song.duration;
// 	progressBar.value = song.currentTime;
// 	document.querySelector(".player_remaining").innerHTML = formatTime(
// 		Math.floor(song.currentTime)
// 	);

// 	if (document.querySelector(".player_duration").innerHTML === "NaN:NaN") {
// 		document.querySelector(".player_duration").innerHTML = "0:00";
// 	} else {
// 		document.querySelector(".player_duration").innerHTML = formatTime(
// 			Math.floor(song.duration)
// 		);
// 	}
// }

// function formatTime(seconds) {
// 	let min = Math.floor(seconds / 60);
// 	let sec = Math.floor(seconds - min * 60);
// 	if (sec < 10) {
// 		sec = `0${sec}`;
// 	}

// 	return `${min}:${sec}`;
// }

// setInterval(updateProgressValue, 500);

// function changeProgressBar() {
// 	song.currentTime = progressBar.value;
// }

// progressBar.addEventListener("change", changeProgressBar);

// playButton.addEventListener("click", playPause);
// nextButton.addEventListener("click", nextSong);
// prevButton.addEventListener("click", previousSong);

// song.addEventListener("ended", function () {
// 	nextSong();
// });

// songList.forEach((el) => el.addEventListener("click", handleClickEachSong));
