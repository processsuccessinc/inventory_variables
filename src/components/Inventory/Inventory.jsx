import React from 'react';
import './Inventory.scss';
import orangeImg from './Orange.png';
import bananaImg from './Banana.png';

// this UI component displays the status of our inventory
// The logic of the inventory itself is defined in app.js
export default class Inventory extends React.Component {

    // register the global 'inventoryOpen' state variable
    constructor(props) {
        super(props);
        this.props.player.variables.register('inventoryOpen', {initialValue: 'true'});
    }

    // toggles inventory collapse
    toggleCollapse(){
        let inventoryOpen = this.props.globalState.variables.inventoryOpen;
        this.props.player.variables.setValue('inventoryOpen', !inventoryOpen)
    }

    render() {
        // these are the items of our inventory
        let items = ['Orange', 'Banana'];

        let itemAssets = {
            Orange: orangeImg,
            Banana: bananaImg
        };

        // create an image icon for each item
        let itemIcons = items.map(itemName => {
            // if the item is added to the inventory, apply class 'added' to its icon
            let itemAdded = this.props.globalState.variables.inventory.includes(itemName);
            return <img key={itemName}
                        src={itemAssets[itemName]}
                        className={itemAdded?'added':''}/>
        });

        // show placeholder if no items;
        let noItems = this.props.globalState.variables.inventory.length === 0;



        let inventoryOpen = this.props.globalState.variables.inventoryOpen;
        let toggleText = inventoryOpen ? '-' : '+';
        
        return (
            <div className='inventory'
                 style={Object.assign({}, this.props.style)} // allow customizing style from "outside"
                 onClick={()=>this.toggleCollapse()}
            >
                <div className='title'>Inventory {toggleText}</div>
                <div className={`items ${inventoryOpen === false? 'collapsed':''}`}>
                    {itemIcons}
                </div>
                <div className={`noFruit ${noItems?'':'hidden'}`}>No fruit yet!</div>
            </div>
        );
    }
}