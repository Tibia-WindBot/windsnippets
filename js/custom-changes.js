$(document).ready(function(){
	$(".button-collapse").sideNav({
		menuWidth: 250,
		edge: "left",
		closeOnClick: true
	});

	$(".dropdown-button").dropdown({
		inDuration: 1000,
		outDuration: 250,
	});

	$(".tooltipped").tooltip({delay: 50});

	$(".modal-trigger").leanModal({
		dismissible: true,
		opacity: .5,
		in_duration: 500,
		out_duration: 250,
	});

	$('select').material_select();
    
    var theme = "ace/theme/ambiance";
    var mode = "ace/mode/lua";
	var editor = ace.edit("editor");
    
	editor.setTheme(theme);
	editor.getSession().setMode(mode);
	editor.setPrintMarginColumn(-1);

	$('#editor-mode').on('change', function() {
        editor.getSession().setMode('ace/mode/' + $(this).val().toLowerCase());
	});

    $('#editor-theme').on('change', function() {
        editor.setTheme('ace/theme/' + $(this).val().toLowerCase());
        $("body").css("background-color", $('#editor').css("background-color"));
        // ToDo: fix background color (black hides shadow and other effects)
    });
});

