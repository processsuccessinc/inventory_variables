import React from 'react';

export default class Inventory extends React.Component {
    render() {
        // For this example we have two
        let inventory = player.variables.getValue('inventory');
        let inventoryBody = inventory === 1 ? 
        <div>
            <ul>
                <li>Clemantine</li>
            </ul>
        </div> 
        : 
        <div></div>;

        return (
            <div style={{ float: 'right', position: 'absolute', top: '35%', right: '30%', border: 'solid', height: '30%', width: '25%' }}>
                <div style={{ padding: '6%' }}><h2>Inventory</h2></div>
                <div style={{ padding: '6%' }}>{inventoryBody}</div>
            </div>
        );
    }
}