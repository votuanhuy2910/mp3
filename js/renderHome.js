const app = {
	songsDataVN: [
		{
			image: "/assets/files/img/mascara.jpg",
			name: "mascara",
			artist: "chillies",
		},

		{
			image: "/assets/files/img/noinaycoanh.jpg",
			name: "noi nay co anh",
			artist: "son tung M-TP",
		},

		{
			image: "/assets/files/img/giuadailodongtay.jpg",
			name: "giua dai lo dong tay",
			artist: "uyen linh",
		},
	],

	songsDataTQ: [
		{
			image: "/assets/files/img/queboi.jpg",
			name: "quẻ bói",
			artist: "thôi tử cách",
		},

		{
			image: "/assets/files/img/10nam.jpg",
			name: "thập niên nhân gian",
			artist: "lão can ma",
		},

		{
			image: "/assets/files/img/1trieukhanang.jpg",
			name: "một triệu khả năng",
			artist: "christine welch",
		},
	],

	songsDataUS: [
		{
			image: "/assets/files/img/fadedjpg.jpg",
			name: "faded",
			artist: "alan walker",
		},

		{
			image: "/assets/files/img/thatgirl.jpg",
			name: "that girl",
			artist: "olly murs",
		},

		{
			image: "/assets/files/img/alone.jpg",
			name: "alone",
			artist: "alan walker",
		},

		{
			image: "/assets/files/img/best-song-ever.jpg",
			name: "best song ever",
			artist: "one direction",
		},

		{
			image: "/assets/files/img/ido.jpg",
			name: "i do",
			artist: "911",
		},

		{
			image: "/assets/files/img/cheap_thrills.jpg",
			name: "cheap thrills",
			artist: "sia",
		},
	],

	songsDataKR: [
		{
			image: "/assets/files/img/way-back-home.jpg",
			name: "way back home",
			artist: "shaun",
		},

		{
			image: "/assets/files/img/jamjam.jpg",
			name: "jam jam",
			artist: "iu",
		},

		{
			image: "/assets/files/img/standbyme.jpg",
			name: "stand by me",
			artist: "hsk",
		},
	],

	currentIndex: 0,

	defineProperties: function () {
		Object.defineProperty(this, "currentSong", {
			get: function () {
				return this.songsData[this.currentIndex];
			},
		});
	},

	renderRightSongVN: function () {
		const songList = document.querySelector(".tab-vn");
		const htmlsVN = this.songsDataVN.map((song, index) => {
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

					<div class="item-action">
						<span class="item-action_heart">
							<i class="fas fa-heart icon-heart"></i>
							<i class="far fa-heart unheart"></i>
						</span>
					</div>
				</div>
            `;
		});

		songList.innerHTML = htmlsVN.join("");
	},

	renderRightSongUS: function () {
		const songList = document.querySelector(".tab-us");
		const htmlsUS = this.songsDataUS.map((song, index) => {
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

					<div class="item-action">
						<span class="item-action_heart">
							<i class="fas fa-heart icon-heart"></i>
							<i class="far fa-heart unheart"></i>
						</span>
					</div>
				</div>
            `;
		});

		songList.innerHTML = htmlsUS.join("");
	},

	renderRightSongKR: function () {
		const songList = document.querySelector(".tab-kr");
		const htmlsKR = this.songsDataKR.map((song, index) => {
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

					<div class="item-action">
						<span class="item-action_heart">
							<i class="fas fa-heart icon-heart"></i>
							<i class="far fa-heart unheart"></i>
						</span>
					</div>
				</div>
            `;
		});

		songList.innerHTML = htmlsKR.join("");
	},

	renderRightSongTQ: function () {
		const songList = document.querySelector(".tab-tq");
		const htmlsTQ = this.songsDataTQ.map((song, index) => {
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

					<div class="item-action">
						<span class="item-action_heart">
							<i class="fas fa-heart icon-heart"></i>
							<i class="far fa-heart unheart"></i>
						</span>
					</div>
				</div>
            `;
		});

		songList.innerHTML = htmlsTQ.join("");
	},

	start: function () {
		this.renderRightSongVN();
		this.renderRightSongUS();
		this.renderRightSongKR();
		this.renderRightSongTQ();
	},
};

app.start();
