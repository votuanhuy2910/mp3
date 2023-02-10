const app = {
	listBillboardSong: [
		{
			src: "/assets/files/img/way-back-home.jpg",
			name: "way back home",
			artist: "shaun",
		},

		{
			src: "/assets/files/img/fadedjpg.jpg",
			name: "faded",
			artist: "alan walker",
		},

		{
			src: "/assets/files/img/mascara.jpg",
			name: "mascara",
			artist: "chillies",
		},

		{
			src: "/assets/files/img/that girl.jpg",
			name: "that girl",
			artist: "olly murs",
		},

		{
			src: "/assets/files/img/10 nam.jpg",
			name: "thập niên nhân gian",
			artist: "lão can ma",
		},

		{
			src: "/assets/files/img/thuy trieu.jpg",
			name: "thủy triều",
			artist: "phó mộng đồng",
		},

		{
			src: "/assets/files/img/jam jam.jpg",
			name: "jam jam",
			artist: "IU",
		},

		{
			src: "/assets/files/img/noi nay co anh.jpg",
			name: "nơi này có anh",
			artist: "sơn tùng m-tP",
		},
	],

	renderBillboardList: function () {
		const billboardList = document.querySelector(".billboard_list");

		const billboardChartList = this.listBillboardSong.map((item) => {
			return `
            <div class="billboard_list--item">
                <div class="billboard_media">
                    <img src="${item.src}" alt="billboard image"
                    class="billboard_media--img">
                    
                    <img src="${item.src}" alt="billboard image"
                    class="billboard_media--img__shadow">
                    
                    <h3 class="billboard_media--title title">${item.name}</h3>
                    <a href="#" class="billboard_media--author author">${item.artist}</a>
                </div>
            </div>
            `;
		});

		billboardList.innerHTML = billboardChartList.join("");

		const billboardListSwiper = document.querySelector(".swiper-wrapper");

		const billboardChartListSwiper = this.listBillboardSong.map((item) => {
			return `
                <div class="swiper-slide">
                    <img src="${item.src}" alt="billboard image"
                                class="media-image">

                    <img src="${item.src}" alt="billboard image"
                                class="media-image_shadow">

                    <h3 class="billboard_media--title title">${item.name}</h3>
                    <a href="#" class="billboard_media--author author">${item.artist}</a>
                </div>
            `;
		});

		billboardListSwiper.innerHTML = billboardChartListSwiper.join("");
	},

	listSong: [
		{
			id: 0,
			index: "01",
			src: "/assets/files/img/way-back-home.jpg",
			name: "way back home",
			artist: "shaun",
			time: "3:12",
		},

		{
			id: 1,
			index: "02",
			src: "/assets/files/img/fadedjpg.jpg",
			name: "faded",
			artist: "alan walker",
			time: "3:32",
		},

		{
			id: 2,
			index: "03",
			src: "/assets/files/img/mascara.jpg",
			name: "mascara",
			artist: "chillies",
			time: "5:00",
		},

		{
			id: 3,
			index: "04",
			src: "/assets/files/img/that girl.jpg",
			name: "that girl",
			artist: "olly murs",
			time: "2:55",
		},

		{
			id: 4,
			index: "05",
			src: "/assets/files/img/que boi.jpg",
			name: "quẻ bói",
			artist: "thôi tử cách",
			time: "3:34",
		},

		{
			id: 5,
			index: "06",
			src: "/assets/files/img/10 nam.jpg",
			name: "thập niên nhân gian",
			artist: "lão can ma",
			time: "4:37",
		},

		{
			id: 6,
			index: "07",
			src: "/assets/files/img/1 trieu kha nang.jpg",
			name: "một triệu khả năng",
			artist: "christine welch",
			time: "4:35",
		},

		{
			id: 7,
			index: "08",
			src: "/assets/files/img/alone.jpg",
			name: "alone",
			artist: "alan walker",
			time: "2:43",
		},

		{
			id: 8,
			index: "09",
			src: "/assets/files/img/best-song-ever.jpg",
			name: "best song ever",
			artist: "one direction",
			time: "3:34",
		},

		{
			id: 9,
			index: "10",
			src: "/assets/files/img/i do.jpg",
			name: "i do",
			artist: "911",
			time: "3:21",
		},

		{
			id: 10,
			index: "11",
			src: "/assets/files/img/cheap_thrills.jpg",
			name: "cheap thrills",
			artist: "sia",
			time: "4:05",
		},

		{
			id: 11,
			index: "12",
			src: "/assets/files/img/i want something just like this.jpg",
			name: "i want something just like this",
			artist: "the chainsmokers",
			time: "4:07",
		},

		{
			id: 12,
			index: "13",
			src: "/assets/files/img/giua dai lo dong tay.jpg",
			name: "giữa đại lộ đông tây",
			artist: "uyên linh",
			time: "3:46",
		},

		{
			id: 13,
			index: "14",
			src: "/assets/files/img/in the end.jpg",
			name: "in the end",
			artist: "linkin park",
			time: "3:38",
		},

		{
			id: 14,
			index: "15",
			src: "/assets/files/img/ke theo duoi anh sang.jpg",
			name: "kẻ theo đuổi ánh sáng",
			artist: "huy vạc",
			time: "3:32",
		},

		{
			id: 15,
			index: "16",
			src: "/assets/files/img/thai binh mo hoi roi.jpg",
			name: "thái bình mồ hôi rơi",
			artist: "sơn tùng m-tP",
			time: "5:06",
		},

		{
			id: 16,
			index: "17",
			src: "/assets/files/img/noi nay co anh.jpg",
			name: "nơi này có anh",
			artist: "sơn tùng m-tp",
			time: "4:17",
		},

		{
			id: 17,
			index: "18",
			src: "/assets/files/img/xich linh.jpg",
			name: "xích linh",
			artist: "chấp tố hề",
			time: "4:57",
		},

		{
			id: 18,
			index: "19",
			src: "/assets/files/img/thuy trieu.jpg",
			name: "thủy triều",
			artist: "phó mộng đồng",
			time: "2:18",
		},

		{
			id: 19,
			index: "20",
			src: "/assets/files/img/jam jam.jpg",
			name: "jam jam",
			artist: "IU",
			time: "3:38",
		},
	],

	renderListSong: function () {
		const song = document.querySelector(".song_list");
		const songList = this.listSong.map((song) => {
			return `
                <div class="song" data-index="${song.id}">
                    <span class="song_index">${song.index}</span>
                    <img src="${song.src}" alt="billboard image"
                        class="song_img">
                    <i class="fas fa-play song_play"></i>
                    <h4 class="song_title">${song.name}</h4>
                    <h5 class="song_album">${song.artist}</h5>
                    <time class="song_time">${song.time}</time>
                    <label for="${song.id}" class="song_love">
                        <input type="checkbox" name="love" id="${song.id}">
                        <i class="fas fa-heart song_love--heart"></i>
                    </label>
                </div>
            `;
		});

		song.innerHTML = songList.join("");
	},

	start: function () {
		this.renderBillboardList();
		this.renderListSong();
	},
};

app.start();
