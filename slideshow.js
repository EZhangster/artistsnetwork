$(document).ready(function() {
setTimeout(function() {
$(function() {
	$("#slides").slidesjs({
	play: {
		width:1600,
		height:1000,
		active: true,
		auto:true,
		interval: 5000,
		effect: "fade",
		swap: true,
	}
	});
});
	}, 10000);
});

jQuery(document).ready(function() {
	setTimeout(function() {
    window.setInterval(function() {
            var oldBox = jQuery('.artist-maker-inspired li.artist-maker-inspired-active');
            if(oldBox.length == 0 || oldBox.next().length == 0)
            {
                    oldBox.removeClass('artist-maker-inspired-active');
                jQuery('.artist-maker-inspired li:first-child').addClass('artist-maker-inspired-active');
            }
            else
                oldBox.removeClass('artist-maker-inspired-active').next().addClass('artist-maker-inspired-active');
    },5000);
	}, 5000);
});
