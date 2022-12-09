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

let playing = true;
let random = false;

let playButton = document.querySelector(".player-play");
let nextButton = document.querySelector(".player-next");
let prevButton = document.querySelector(".player-prev");

let thumbnail = document.querySelector(".player_img");

let song = document.querySelector("#song");
let songList = document.querySelectorAll(".song");

let songTitle = document.querySelector(".player_box--title");
let songArtist = document.querySelector(".player_box--author");

let progressBar = document.querySelector("#progress-bar");

let songIndex = 0;

let songs = ["./assets/files/WBH.mp3", "./assets/files/Faded.mp3"];

let thumbnails = [
	"./assets/files/img/way-back-home.jpg",
	"./assets/files/img/fadedjpg.jpg",
];

let songTitles = ["Way Back Home", "Faded"];

let songArtists = ["Shaun", "Alan Walker"];

function handleClickEachSong(e) {
	const index = parseInt(e.target.dataset.index);
	nextSong(index);
}

function playPause() {
	if (playing) {
		const song = document.querySelector("#song");

		song.play();
		thumbnail.classList.add("is-playing");
		playButton.classList.add("fa-play");

		playing = false;
	} else {
        thumbnail.classList.remove("is-playing");
		playButton.classList.remove("fa-play");
		song.pause();

		playing = true;
	}
}

function nextSong(index = - 1) {
    if (index >= 0) {
        songIndex = index;
    } else {
        songIndex++;
    }

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];

    songTitle.innerHTML = songTitles[songIndex];
    songArtist.innerHTML = songArtists[songIndex];

    playing = true;
    playPause();
}

function previousSong() {
    songIndex--;
    
    if (songIndex < 0) {
        songIndex = 1;
    }

    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];

    songTitle.innerHTML = songTitles[songIndex];
    songArtist.innerHTML = songArtists[songIndex];

    playing = true;
    playPause();
}

function updateProgressValue() {
	progressBar.max = song.duration;
	progressBar.value = song.currentTime;
	document.querySelector(".player_remaining").innerHTML = formatTime(
		Math.floor(song.currentTime)
	);

	if (document.querySelector(".player_duration").innerHTML === "NaN:NaN") {
		document.querySelector(".player_duration").innerHTML = "0:00";
	} else {
		document.querySelector(".player_duration").innerHTML = formatTime(
			Math.floor(song.duration)
		);
	}
}

function formatTime(seconds) {
	let min = Math.floor(seconds / 60);
	let sec = Math.floor(seconds - min * 60);
	if (sec < 10) {
		sec = `0${sec}`;
	}

	return `${min}:${sec}`;
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
	song.currentTime = progressBar.value;
}

progressBar.addEventListener("change", changeProgressBar);

playButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", previousSong);

song.addEventListener("ended", function () {
	nextSong();
});

songList.forEach((el) => el.addEventListener("click", handleClickEachSong));
