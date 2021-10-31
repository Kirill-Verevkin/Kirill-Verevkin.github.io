document.querySelector('.item-1').onclick = function () {
	let audioBlock = document.querySelector('.audio-block');
	audioBlock.classList.remove("hidden");
	audioBlock.src = 'musik/youmorist.mp3';
	let Img = document.querySelector('.img');
	Img.src = 'assets/img/youmorist.png';

}


document.querySelector('.item-2').onclick = function () {
	let audioBlock = document.querySelector('.audio-block');
	audioBlock.classList.remove("hidden");
	audioBlock.src = 'musik/nadezda.mp3';
	let Img = document.querySelector('.img');
	Img.src = 'assets/img/nadezda.png';

}






