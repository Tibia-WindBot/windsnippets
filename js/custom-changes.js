$(document).ready(function(){
	$(".button-collapse").sideNav({
		menuWidth: 250,
		edge: "left",
		closeOnClick: true
	});

	$(".dropdown-button").dropdown();

	$(".tooltipped").tooltip({delay: 50});

	$(".modal-trigger").leanModal({
		dismissible: true,
		opacity: .5,
		in_duration: 200,
		out_duration: 200,
	});
});
