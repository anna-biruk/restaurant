import React, {Component} from 'react';

export default class Map extends Component {
    render() {
        return (
            <div className='map-container'>
                <iframe
                    title="map"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ68ItKinXJnd0UnKYPAEFljjueGqWyho&q=Space+Needle,Seattle+WA" allowFullScreen>
                </iframe>
            </div>
        )
    }
}