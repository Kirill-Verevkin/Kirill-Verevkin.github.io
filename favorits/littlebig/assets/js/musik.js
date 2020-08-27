document.querySelector('.item-1').onclick = function () {
	let audioBlock = document.querySelector('.audio-block');
	audioBlock.classList.remove("hidden");
	audioBlock.src = 'musik/uno.mp3';
	let Img = document.querySelector('.img');
	Img.src = 'assets/img/uno-littlebig.png';

}

document.querySelector('.item-2').onclick = function () {
	let audioBlock = document.querySelector('.audio-block');
	audioBlock.classList.remove("hidden");
	audioBlock.src = 'musik/skibidi.mp3';
	let Img = document.querySelector('.img');
	Img.src = 'assets/img/skibidi-littlebig.png';

}



document.querySelector('.item-3').onclick = function () {
	let audioBlock = document.querySelector('.audio-block');
	audioBlock.classList.remove("hidden");
	audioBlock.src = 'musik/hypno.mp3';
	let Img = document.querySelector('.img');
	Img.src = 'assets/img/hypnodancer-littlebig.png';

}




