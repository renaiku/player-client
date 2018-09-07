import React, { Component } from 'react';
import '../css/SelectableProfile.css';
import SelectableProfile from './SelectableProfile';

class ProfilesContainer extends Component {

	constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
	}

	render() {
		return (
			<div className="ProfilesContainer">
                <SelectableProfile userID={1} userName={"renaiku"}/>
                <SelectableProfile userID={2} userName={"patou"}/>
                <SelectableProfile userID={3} userName={"juju"}/>
                <SelectableProfile userID={4} userName={"laurie"}/>
                <SelectableProfile userID={5} userName={"élo"}/>
                <SelectableProfile userID={6} userName={"vivi"}/>
                <SelectableProfile userID={7} userName={"laurine"}/>
                <SelectableProfile userID={8} userName={"maman"}/>
                <SelectableProfile userID={9} userName={"valou"}/>
                <SelectableProfile userID={10} userName={"robert pattison premier du nom"}/>
                <SelectableProfile userID={11} userName={"calzone"}/>
                <SelectableProfile userID={12} userName={"fred"}/>
                <SelectableProfile userID={13} userName={"père-noël"}/>
                <SelectableProfile userID={14} userName={"fred2"}/>
                <SelectableProfile userID={15} userName={"iron-man"}/>
            </div>
		);
	}

}

export default ProfilesContainer;
