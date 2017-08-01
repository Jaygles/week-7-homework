var buttonCount = 0;

//Creating search button function
$('#submit-btn').on('click', function() {
	event.preventDefault();
	if (buttonCount >= 84) {
		return
	} else {
		var currentInput = $('#current-input').val();
		if (currentInput === '') {
			return
		} else {
			buttonCount++;
			searchValue = currentInput.replace(/ /g,"+");
			$('.btn-container').append('<button class="btn search-btn" value="' + searchValue + '">' + currentInput + '</button>');
		};
	};
});

// Populating page with gifs function
$(document).on('click', '.search-btn', function() {
	$('.gif-display').html('');
	var searchTerm = $(this).attr('value');
	var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=10");
	xhr.done(function(result) {
		console.log(result);
		for (var i = result.data.length - 1; i >= 0; i--) {
			$('.gif-display').append('<div class="gif-wrapper"></div>');
			$('.gif-wrapper').last().append('<img class="gif" data-img="' + result.data[i].images.fixed_width_still.url + '" data-gif="' + result.data[i].images.fixed_width.url + '" src="' + result.data[i].images.fixed_width_still.url + '">');
			$('.gif-wrapper').last().append('<p class="rating">Rating: ' + result.data[i].rating + '</p>');
		};	
	});
});

// Animation toggling on click function
$(document).on('click', '.gif', function () {
	var currentSrc = $(this).attr('src');
	var imgURL = $(this).attr('data-img');
	var gifURL = $(this).attr('data-gif');
	if (currentSrc === imgURL) {
		$(this).attr('src', gifURL);
	} else if (currentSrc === gifURL) {
		$(this).attr('src', imgURL);
	};
});