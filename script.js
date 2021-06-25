const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const nombre = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getDate, 2500);

function getDate() {
	header.innerHTML = '<img src="laptop2.jfif" alt="" />';
	title.innerHTML = 'Lorem ipsum dolor sit amet.';
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officia!';
	profile_img.innerHTML = '<img src="banner.jpg" alt="" />';
	nombre.innerHTML = 'Elide Zavala Vinagre';
	date.innerHTML = 'Jun 24, 2021';

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}