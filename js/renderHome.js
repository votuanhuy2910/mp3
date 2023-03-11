// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const musicNowTym = $(".item-action_heart");
// const volumeIcon = $(".music-control__right-volume-icon");
// const audio = $("#audio");
// const playBtn = $(".js__music-control__icon-play");
// const thumbPlayerBox = $(".side_first");
// const progress = $("#seek");
// const remainTime = $("#currentStart");
// const durationTime = $("#currentEnd");
// const prevBtn = $("#back");
// const nextBtn = $("#next");
// const nameSong= $(".nameSong");
// const nameSinger= $(".subtitle");
// const cdThumb = $("#poster_master_play");
// const playBtnAll = $(".btn-playAll");
// const randomBtn = $("#arrows-shuffle");
// const repeatBtn = $("#repeat");
// const volumeProgress = $("#vol");
// const rightSong = $(".right-song");

const music = new Audio("/assets/files/songs/Mascara.mp3");
// let title = document.querySelector(".nameSong");
// let subtitle = document.querySelector(".subtitle");

const app = {
	songsDataVN: [
		{
			id: "1",
			image: "/assets/files/img/mascara.jpg",
			name: "mascara",
			artist: "chillies",
			src: "/assets/files/songs/Mascara.mp3",
		},

		{
			id: "2",
			image: "/assets/files/img/noinaycoanh.jpg",
			name: "noi nay co anh",
			artist: "son tung M-TP",
			src: "/assets/files/songs/Noi Nay Co Anh.mp3",
		},

		{
			id: "3",
			image: "/assets/files/img/giuadailodongtay.jpg",
			name: "giua dai lo dong tay",
			artist: "uyen linh",
			src: "/assets/files/songs/Giua Dai Lo Dong Tay.mp3",
		},

		{
			id: "4",
			image: "/assets/files/img/way-back-home.jpg",
			name: "way back home",
			artist: "shaun",
			src: "/assets/files/songs/WBH.mp3",
		},

		{
			id: "5",
			image: "/assets/files/img/jamjam.jpg",
			name: "jam jam",
			artist: "iu",
			src: "/assets/files/songs/Jam-Jam-IU.mp3",
		},

		{
			id: "6",
			image: "/assets/files/img/standbyme.jpg",
			name: "stand by me",
			artist: "hsk",
			src: "/assets/files/songs/Stand By Me - SHINee.mp3",
		},

		{
			id: "7",
			image: "/assets/files/img/fadedjpg.jpg",
			name: "faded",
			artist: "alan walker",
			src: "/assets/files/songs/Faded.mp3",
		},

		{
			id: "8",
			image: "/assets/files/img/thatgirl.jpg",
			name: "that girl",
			artist: "olly murs",
			src: "/assets/files/songs/That Girl - Olly Murs.mp3",
		},

		{
			id: "9",
			image: "/assets/files/img/alone.jpg",
			name: "alone",
			artist: "alan walker",
			src: "/assets/files/songs/Alone.mp3",
		},

		{
			id: "10",
			image: "/assets/files/img/best-song-ever.jpg",
			name: "best song ever",
			artist: "one direction",
			src: "/assets/files/songs/Best Song Ever.mp3",
		},

		{
			id: "11",
			image: "/assets/files/img/ido.jpg",
			name: "i do",
			artist: "911",
			src: "/assets/files/songs/I Do.mp3",
		},

		{
			id: "12",
			image: "/assets/files/img/cheap_thrills.jpg",
			name: "cheap thrills",
			artist: "sia",
			src: "/assets/files/songs/Cheap Thrills.mp3",
		},

		{
			id: "13",
			image: "/assets/files/img/queboi.jpg",
			name: "quẻ bói",
			artist: "thôi tử cách",
			src: "/assets/files/songs/que boi.mp3",
		},

		{
			id: "14",
			image: "/assets/files/img/10nam.jpg",
			name: "thập niên nhân gian",
			artist: "lão can ma",
			src: "/assets/files/songs/10 Nhan Gian.mp3",
		},

		{
			id: "15",
			image: "/assets/files/img/1trieukhanang.jpg",
			name: "một triệu khả năng",
			artist: "christine welch",
			src: "/assets/files/songs/1 Trieu kha nang.mp3",
		},
	],

	currentIndex: 0,
	isPlaying: false,
	isRandom: false,
	isRepeat: false,

	// cdThumbRotate: cdThumb.animate([{ transform: "rotate(360deg)" }], {
	// 	duration: 8000,
	// 	iterations: Infinity,
	// }),

	defineProperties: function () {
		Object.defineProperty(this, "currentSong", {
			get: function () {
				return this.songsData[this.currentIndex];
			},
		});
	},

	renderRightSong: function () {
		const songList = document.querySelector(".tab-vn");
		const htmls = this.songsDataVN.map((song, index) => {
			return `
				<div class="tab-pane__item ${
					index == this.currentIndex ? "active" : ""
				}" data-index="${index}">
					<div class="item-img" style="background-image: url(${song.image});">
						<div class="item-playbtn">
							<i class="fas fa-play"></i>
						</div>

						<div class="item-playing">
							<img src="/assets/files/component/icon-playing.gif" alt="">
						</div>
					</div>

					<div class="item-body">
						<span class="item-body__heading">
							${song.name}
						</span>

						<span class="item-body__desc">
							${song.artist}
						</span>
					</div>
				</div>
            `;
		});
		songList.innerHTML = htmls.join("");
	},

	renderMidSong: function () {
		const songList = document.querySelector(".content-right_list");
		const htmls = this.songsDataVN.map((song, index) => {
			return `
				<li class="content-item ${
					index == this.currentIndex ? "active" : ""
				}" data-index="${index}"">
					<div class="item-img" style="background-image: url(${song.image})">
						<div class="item-playbtn">
							<i class="fas fa-play"></i>
						</div>

						<div class="item-playing">
							<img src="/assets/files/component/icon-playing.gif" alt="">
						</div>
					</div>

					<div class="item-body">
						<span class="item-body__heading">
							${song.name}
						</span>

						<span class="item-body__desc">
							${song.artist}
						</span>
					</div>

					<div class="item-action">
						<span class="item-action_heart">
							<i class="fas fa-heart icon-heart"></i>
							<i class="far fa-heart unheart"></i>
						</span>
					</div>
				</li>
            `;
		});

		songList.innerHTML = htmls.join("");
	},

	handleEventClick: function () {
		let masterPlay = document.getElementById("masterPlay");
		let wave = document.getElementsByClassName("wave")[0];

		masterPlay.addEventListener("click", () => {
			if (music.paused || music.currentTime <= 0) {
				music.play();
				masterPlay.classList.remove("fa-play");
				masterPlay.classList.add("fa-pause");
				wave.classList.add("active2");
			} else {
				music.pause();
				masterPlay.classList.add("fa-play");
				masterPlay.classList.remove("fa-pause");
				wave.classList.remove("active2");
			}
		});

		let currentStart = document.getElementById("currentStart");
		let currentEnd = document.getElementById("currentEnd");
		let seek = document.getElementById("seek");
		let bar2 = document.getElementById("bar2");
		let dot = document.getElementsByClassName("dot")[0];

		music.addEventListener("timeupdate", () => {
			let music_curr = music.currentTime;
			let music_dur = music.duration;

			let min = Math.floor(music_dur / 60);
			let sec = Math.floor(music_dur % 60);
			if (sec < 10) {
				sec = `0${sec}`;
			}
			currentEnd.innerText = `${min}:${sec}`;

			let min1 = Math.floor(music_curr / 60);
			let sec1 = Math.floor(music_curr % 60);
			if (sec1 < 10) {
				sec1 = `0${sec1}`;
			}
			currentStart.innerText = `${min1}:${sec1}`;

			let progressbar = parseInt((music.currentTime / music.duration) * 100);
			seek.value = progressbar;
			let seekbar = seek.value;
			bar2.style.width = `${seekbar}%`;
			dot.style.left = `${seekbar}%`;
		});

		seek.addEventListener("change", () => {
			music.currentTime = (seek.value * music.duration) / 100;
		});

		music.addEventListener("ended", () => {
			masterPlay.classList.add("fa-play");
			masterPlay.classList.remove("fa-pause");
			wave.classList.remove("active2");
		});

		let vol_icon = document.getElementById("vol_icon");
		let vol = document.getElementById("vol");
		let vol_dot = document.getElementById("vol_dot");
		let vol_bar = document.getElementsByClassName("vol_bar")[0];

		vol.addEventListener("change", () => {
			if (vol.value == 0) {
				vol_icon.classList.add("fa-volume-xmark");
				vol_icon.classList.remove("fa-volume-low");
				vol_icon.classList.remove("fa-volume-high");
			}
			if (vol.value > 0) {
				vol_icon.classList.remove("fa-volume-xmark");
				vol_icon.classList.add("fa-volume-low");
				vol_icon.classList.remove("fa-volume-high");
			}
			if (vol.value > 50) {
				vol_icon.classList.remove("fa-volume-xmark");
				vol_icon.classList.remove("fa-volume-low");
				vol_icon.classList.add("fa-volume-high");
			}

			let vol_a = vol.value;
			vol_bar.style.width = `${vol_a}%`;
			vol_dot.style.left = `${vol_a}%`;
			music.volume = vol_a / 100;
		});

		let back = document.getElementById("back");
		let next = document.getElementById("next");
	},

	start: function () {
		this.renderRightSong();
		this.renderMidSong();
		this.defineProperties();
		this.handleEventClick();
	},
};

app.start();
