$(document).ready(function() {
	var currentFloor = 1;
	var counterUp = $(".counter_up"); 
	var floorPath = $(".home_image path")
	var counterDawn = $(".counter_dawn");
	var modal = $(".modal");
	var modalButtonClose = $(".modal_button_close");
	var viewFlatsButton = $(".view_flats");



	floorPath.on("mouseover", function() {
		currentFloor = $(this).attr("data-floor");
		floorPath.removeClass("current_floor");
		$(".counter").text(currentFloor);
	});


	floorPath.on("click", toggleModal);
	modalButtonClose.on("click", toggleModal);
	viewFlatsButton.on("click", toggleModal);

	counterUp.on("click", function() {
		if(currentFloor < 18){
			currentFloor++;
		usCurrentFloor = currentFloor.toLocaleString("en-US", {
			minimumIntegerDigits: 2, useGroupping: false });
		$(".counter").text(usCurrentFloor);

		floorPath.removeClass("current_floor");
		$(`[data-floor=${usCurrentFloor}]`).toggleClass("current_floor");

		}
	});

	counterDawn.on("click", function() {
		if(currentFloor > 2){
			currentFloor--;
		usCurrentFloor = currentFloor.toLocaleString("en-US", {
			minimumIntegerDigits: 2, useGroupping: false });
		$(".counter").text(usCurrentFloor);

		floorPath.removeClass("current_floor");
		$(`[data-floor=${usCurrentFloor}]`).toggleClass("current_floor");

		}
	});

	function toggleModal(){
		modal.toggleClass("is_open");
	};
});


