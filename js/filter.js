 $(function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 18,
	      max: 79,
	      values: [ 18, 79 ],
	      slide: function( event, ui ) {
	        $( "#min" ).val( "$" + ui.values[ 0 ]);
	        $( "#max" ).val( "$" + ui.values[ 1 ]);
	      }

	    });
	    $( "#min" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
	    $( "#max" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
		
	    
    $('.filter_button').click(function () {
		$( ".price" ).each(function( index ) {
		   $(this).parents('.catalog_item:first').toggle($("#min").val().replace(/[^\d\.]/g, '') <= $.trim($(this).html()));
		});
	});
	 $('.filter_button').click(function () {
		$( ".price" ).each(function( index ) {
		   $(this).parents('.catalog_item:first').toggle($("#max").val().replace(/[^\d\.]/g, '') > $.trim($(this).html()));
		});
	});

});
