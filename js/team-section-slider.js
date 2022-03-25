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

if (window.matchMedia("(max-width: 1239px)").matches) {
    document.addEventListener( 'DOMContentLoaded', function() {
        let splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 1,
            focus  : 'center',
            gap: '1em',
            width: "75%",
            height: "400px",
        } );
        splide.mount();
    } );
}