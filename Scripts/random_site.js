$(document).ready(function(){
	$("#animate_sideways_div").on('mouseup', function (e) {

	    switch (e.which)
	    {
		// Left Click.
		case 1:
		    // By way of example, I've added Ctrl+Click Modifiers.
		    if (e.ctrlKey) {
			// Ctrl+LeftClick behaviour.
			$("#animate_sideways_div").css({"background-color": "yellow"})			
		    } else if (e.altKey) {
			// Ctrl+LeftClick behaviour.
			$("#animate_sideways_div").css({"background-color": "red"})			
		    } else {
			// Standard LeftClick behaviour.
			$("#animate_sideways_div").animate({left: '+=50px'});
		    }
		    break;

		// Middle click.
		case 2:
		    // Interrupts "Firefox Open New Tab" behaviour.
		    break;

		// Default behaviour for right click.
		case 3:
			$("#animate_sideways_div").animate({left: '-=50px'});
	    }

	    // Pass control back to default handler.
	    return true;
	});
});
