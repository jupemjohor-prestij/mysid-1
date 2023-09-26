	mapboxgl.accessToken = 'pk.eyJ1IjoiZW5haW1hbnN5YWhtaSIsImEiOiJjbGFhaWNmamIwNzA4M25vM2d5cDFrYjFjIn0.ZUhZjJVocvsakOr_nLaufw';
    const beforeMap = new mapboxgl.Map({
        container: 'before',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11',
        center: [103.815, 1.883],
        zoom: 8
    });

    const afterMap = new mapboxgl.Map({
        container: 'after',
        style: 'mapbox://styles/enaimansyahmi/clmyq2n6f02rz01nzbi91408z',
        center: [103.815, 1.883],
        zoom: 8
    });

    // A selector or reference to HTML element
    const container = '#comparison-container';

    const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
    });


