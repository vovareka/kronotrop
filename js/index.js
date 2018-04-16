// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});

$grid.on( 'click', '.gallery_hover', function( event ) {
  $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
  $grid.masonry();
});


$grid.on( 'click', '.gallery_works', function( event ) {
        if(!$('.bar').hasClass('disappear')){
            $('.bar').toggleClass('disappear');
            $grid.masonry();
        } 
});
$grid.on( 'click', '.gallery_bar', function( event ) {
        if($('.bar').hasClass('disappear')){
            $('.bar').toggleClass('disappear');
            $grid.masonry();
        } 
});
$grid.on( 'click', '.gallery_bar', function( event ) {
        if(!$('.works').hasClass('disappear')){
            $('.works').toggleClass('disappear');
            $grid.masonry();
        } 
});
$grid.on( 'click', '.gallery_works', function( event ) {
        if($('.works').hasClass('disappear')){
            $('.works').removeClass('disappear');
            $grid.masonry();
        } 
});

$grid.on( 'click', '.gallery_all', function( event ) {
            $('.grid-item').removeClass('disappear');
            $grid.masonry();
});

$grid.on( 'click', '.photo_gallery', function( event ) {
  $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
  $grid.masonry();
});
