document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 5,
        focus  : 'center',
        gap: '1em',
        width: "80%",
    } );
    splide.mount();
} );
