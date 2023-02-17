const app = {
	songsDataVN: [
		{
			image: "/assets/files/img/mascara.jpg",
			name: "mascara",
			artist: "chillies",
		},

		{
			image: "/assets/files/img/giua dai lo dong tay.jpg",
			name: "giua dai lo dong tay",
			artist: "uyen linh",
		},

		{
			image: "/assets/files/img/noi nay co anh.jpg",
			name: "noi nay co anh",
			artist: "ST MT-P",
		},
	],

	songsDataTQ: [
		{
			image: "/assets/files/img/que boi.jpg",
			name: "quẻ bói",
			artist: "thôi tử cách",
		},

		{
			image: "/assets/files/img/10 nam.jpg",
			name: "thập niên nhân gian",
			artist: "lão can ma",
		},

		{
			image: "/assets/files/img/1 trieu kha nang.jpg",
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
			image: "/assets/files/img/that girl.jpg",
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
			image: "/assets/files/img/i do.jpg",
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
			image: "/assets/files/img/jam jam.jpg",
			name: "jam jam",
			artist: "iu",
		},

		{
			image: "/assets/files/img/stand by me.jpg",
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
                <div class="song ${
									index == this.currentIndex ? "active" : ""
								}" data-index="${index}">
                    <div style="position: relative">
                        <img
                            src="${song.image}"
                            class="song_img"
                            alt=""
                        />

                        <i class="fas fa-play play_hover"></i>

                        <img
                            src="/assets/files/component/equalizer.gif"
                            alt=""
                            class="qualizer_gif"
                        />
                    </div>

                    <div class="song_info">
                        <div class="info">
                            <span class="song_name">${song.name}</span>
                            <span class="song_artist">${song.artist}</span>
                        </div>
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
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
                <div class="song ${
									index == this.currentIndex ? "active" : ""
								}" data-index="${index}">
                    <div style="position: relative">
                        <img
                            src="${song.image}"
                            class="song_img"
                            alt=""
                        />

                        <i class="fas fa-play play_hover"></i>

                        <img
                            src="/assets/files/component/equalizer.gif"
                            alt=""
                            class="qualizer_gif"
                        />
                    </div>

                    <div class="song_info">
                        <div class="info">
                            <span class="song_name">${song.name}</span>
                            <span class="song_artist">${song.artist}</span>
                        </div>
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
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
                <div class="song ${
									index == this.currentIndex ? "active" : ""
								}" data-index="${index}">
                    <div style="position: relative">
                        <img
                            src="${song.image}"
                            class="song_img"
                            alt=""
                        />

                        <i class="fas fa-play play_hover"></i>

                        <img
                            src="/assets/files/component/equalizer.gif"
                            alt=""
                            class="qualizer_gif"
                        />
                    </div>

                    <div class="song_info">
                        <div class="info">
                            <span class="song_name">${song.name}</span>
                            <span class="song_artist">${song.artist}</span>
                        </div>
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
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
                <div class="song ${
									index == this.currentIndex ? "active" : ""
								}" data-index="${index}">
                    <div style="position: relative">
                        <img
                            src="${song.image}"
                            class="song_img"
                            alt=""
                        />

                        <i class="fas fa-play play_hover"></i>

                        <img
                            src="/assets/files/component/equalizer.gif"
                            alt=""
                            class="qualizer_gif"
                        />
                    </div>

                    <div class="song_info">
                        <div class="info">
                            <span class="song_name">${song.name}</span>
                            <span class="song_artist">${song.artist}</span>
                        </div>
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
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
