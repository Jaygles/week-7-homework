$('#submit-btn').on('click', function() {
	event.preventDefault();
	var currentInput = $('#current-input').val();
	searchValue = currentInput.replace(/ /g,"+");
	$('.btn-container').append('<button class="btn search-btn" value="' + searchValue + '">' + currentInput + '</button>');
});

$(document).on('click', '.search-btn', function() {
	var searchTerm = $(this).attr('value');
	console.log(searchTerm);
	var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=5");
	xhr.done(function(result) {
		console.log(result);
		for (var i = result.data.length - 1; i >= 0; i--) {
			$('.gif-display-wrapper').append('<img src="' + result.data[i].images.fixed_width.url + '">');
		};	
	});
});
