import React from 'react';
import '../css/TitleBar.css';

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);

        this.minimizeElectron = this.minimizeElectron.bind(this);
        this.closeElectron = this.closeElectron.bind(this);
        this.closeElectron = this.closeElectron.bind(this);
    }

    render() {
        return (
            <div id="title-bar">
                <div id="title">{this.props.title}</div>
                <div id="title-bar-btns">
                    <button id="min-btn" className="title-bar-btn" onClick={this.minimizeElectron}>-</button>
                    <button id="close-btn" className="title-bar-btn" onClick={this.closeElectron}>x</button>
                </div>
            </div>
        );
    }

    minimizeElectron() {
        window.require('electron').remote.getCurrentWindow().minimize();
    }

    closeElectron() {
        window.require('electron').remote.getCurrentWindow().close();
    }
}