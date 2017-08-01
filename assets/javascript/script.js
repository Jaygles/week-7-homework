$('#submit-btn').on('click', function() {
	event.preventDefault();
	var currentInput = $('#current-input').val();
	$('.btn-container').append('<button class="btn" value="' + currentInput + '">' + currentInput + '</button>');
});
