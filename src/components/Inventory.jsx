import React from 'react';
import orangeImg from '../assets/Orange.png';
import bananaImg from '../assets/Banana.png';

export default class Inventory extends React.Component {
    // Here we will render the Inventory ui element
    // It's contents are based on the variables plugin
    // The inventory variable is a decalred in app.js
    render() {
        // the icons are in the src/assets folder
        // we put it in a map
        let assets = {
            Orange: orangeImg,
            Banana: bananaImg
        }
        // Get the inventory variable from the store
        let inventory = player.variables.getValue('inventory');

        // create element for each inventory item
        let inventoryContents = [];
        inventory.forEach(element => {
            inventoryContents.push(
            <td key={element}>
                <img style={{width: '60px'}} src={assets[element]} />
            </td>
            );
        });

        // styling for the inventory element
        let inventoryStyle = { 
            float: 'right',
            position: 'absolute',
            top: '12%',
            right: '35%',
            border: '3px solid #111',
            width: '15%',
            borderRadius: '5px',
            background: '#99c8d9'
        };

        // render the icons inside the inventory
        return (
            <div id="inventory" style={inventoryStyle}>
            <div style={{textAlign: 'center'}}>Inventory</div>
                    <table style={{width: '100%'}}>
                        <tr>{inventoryContents}</tr>
                    </table>
            </div>
        );
    }
}