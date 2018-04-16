var ascending = false;


$('#test_select').change(function(){
  if($(this).val() == '4'){ 
  	var ascending = false;
    var sorted = $('.catalog_item').sort(function(a,b){
        return (ascending ==
               (convertToNumber($(a).find('.price').html()) < 
                convertToNumber($(b).find('.price').html()))) ? 1 : -1;
    });
    ascending = ascending ? false : true;

    $('.catalog_items').html(sorted);
  }
});

$('#test_select').change(function(){
  if($(this).val() == '5'){ 
  	var ascending = true;
    var sorted = $('.catalog_item').sort(function(a,b){
        return (ascending ==
               (convertToNumber($(a).find('.price').html()) < 
                convertToNumber($(b).find('.price').html()))) ? 1 : -1;
    });
    ascending = ascending ? false : true;

    $('.catalog_items').html(sorted);
  }
});

var convertToNumber = function(value){
     return parseFloat(value.replace('$',''));
}




