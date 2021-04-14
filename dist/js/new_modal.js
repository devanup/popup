$overlay = $('#overlay');
$lightBtn = $('.light-btn');
$primaryBtn = $('.primary-btn');
$topModal = $('.top-modal');
$bottomModal = $('.bottom-modal');

$(document).ready(() => {
	$overlay.hide();
	$bottomModal.removeClass('slide-out-br');
	$topModal.removeClass('slide-out-tr');
});

$lightBtn.click((e) => {
	$overlay.show();
	$bottomModal.removeClass('slide-out-br');
	$bottomModal.addClass('slide-in-br');
	$overlay.click(() => {
		$overlay.hide();
		$bottomModal.addClass('slide-out-br');
		$bottomModal.removeClass('slide-in-br');
	});
});

$primaryBtn.click((e) => {
	$overlay.show();
	$topModal.removeClass('slide-out-tr');
	$topModal.addClass('slide-in-tr');
	$overlay.click(() => {
		$overlay.hide();
		$topModal.addClass('slide-out-tr');
		$topModal.removeClass('slide-in-tr');
	});
});
