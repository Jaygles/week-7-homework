$('#submit-btn').on('click', function() {
	event.preventDefault();
	var currentInput = $('#current-input').val();
	var newBtn = $('<button>');
	newBtn.addClass('btn');
	newBtn.append(currentInput);
	$('#btn_container').append(newBtn);
});