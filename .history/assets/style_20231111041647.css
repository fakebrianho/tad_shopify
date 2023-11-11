* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
@font-face {
	font-family: 'Sackers';
	src: url('/assets/Fonts/Sackers/SackersGothicLight.ttf');
	font-weight: 300;
	font-style: normal;
}
.image_container {
	position: relative;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
}

.slide {
	position: absolute;
	width: 100%;
	/* display: none; */
	visibility: hidden;
	height: 100%;
	opacity: 0;
	/* transition: opacity 1s ease-in-out; */
	transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
}

.active {
	/* display: block; */
	visibility: visible;
	opacity: 1;
}

.hidden {
	visibility: hidden !important;
	opacity: 0 !important;
}
.slide img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* width: 100px; */
}
.cover {
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	width: 100%;
	height: 100%;
	opacity: 0.4;
	z-index: 3;
}
.top_navigation {
	z-index: 6;
	position: fixed;
	display: flex;
	width: 100vw;
	height: 75px;
	/* background-color: red; */
	justify-content: space-between;
	align-items: center;
	padding: 0px 40px;
	top: 0;
}
.top_navigation .nav_logo {
	font-family: 'Sackers';
	font-size: 32px;
	text-align: center;
}
.top_navigation .nav_login {
	font-family: 'Sackers';
	text-align: center;
	font-size: 12px;
}
.top_navigation .nav_login:hover {
	cursor: pointer;
}
.content {
	font-family: 'Sackers';
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	z-index: 5;
}

.content p {
	padding: 2px 0px;
	transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
}
.content_comingSoon {
	font-size: 32px;
	text-align: center;
	opacity: 1;
	visibility: visible;
}
.content_signUp {
	font-size: 16px;
	text-align: center;
	opacity: 1;
	visibility: visible;
}

.content_subscribe {
	display: flex;
	justify-content: center;
	transition: transform 1s ease-in-out;
	margin-top: 15px;
}
.content_subscribe input {
	font-family: 'Sackers';
	border: none;
	background-color: #777b7e;
	color: white;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 18vw;
	padding: 8px 0px;
}
.content_subscribe input::placeholder {
	font-family: 'Sackers';
	text-align: center;
	color: white;
}
.content_arrow {
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
	width: 3vw;
}

.content_subscribe input:focus {
	outline: none;
}

.bottom_navigation {
	font-family: 'Sackers';
	position: fixed;
	bottom: 40px;
	z-index: 5;
	width: 100%;
}
.bottom_links {
	width: max-content;
	margin: auto;
	display: flex;
	gap: 3rem;
}

.bottom_navigation a {
	font-size: 12px;
	text-decoration: none;
	color: black;
}

.move_up {
	transform: translateY(-100%);
}
.input-fade-out::placeholder {
	opacity: 0;
	transition: opacity 1s ease;
}

.input-fade-in::placeholder {
	opacity: 1;
	transition: opacity 1s ease;
}

@media screen and (max-width: 900px) {
	.content_subscribe input {
		width: 30vw;
	}
	.content_arrow {
		width: 7vw;
	}
}

@media screen and (max-width: 500px) {
	.content_subscribe input {
		width: 45vw;
	}
	.content_arrow {
		width: 12vw;
	}
	.top_navigation .nav_logo {
		font-size: 20px;
	}
	.top_navigation .nav_login {
		font-size: 8px;
	}
}
