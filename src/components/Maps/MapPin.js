import React from 'react';
import { Tooltip } from 'antd';
import { MapMarker } from './MapMarker';


export class MapPin extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { text } = this.props;
        const Marker = () => {
            let markerprops = {
                src: MapMarker.getMarker()
            }

            return (
                <Tooltip title={text}>
                    <img {...markerprops} style={{ height: 25, cursor: 'pointer' }} />
                </Tooltip>
            )
        }

        return (
            <div>
                <Marker />
            </div>
        );
    }

}

MapPin.defaultProps = {
    markercolor: 'red'
};
