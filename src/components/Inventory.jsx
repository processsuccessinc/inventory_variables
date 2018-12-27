import React from 'react';

export default class Inventory extends React.Component {
    render() {
        let nodeId = this.props.globalState.player.currentNodeId;
        let decision = nodeId ? this.props.globalState.decision[nodeId] : null;
        let inventory = player.variables.getValue('inventory');
        let inventoryBody = inventory === 1 ? 
        <div>
            <ul>
                <li>Clemantine</li>
            </ul>
        </div> 
        : 
        <div></div>;

        console.log('[][][][][]', player.variables.getValue('inventory'));
        return (
            <div style={{ float: 'right', position: 'absolute', top: '35%', right: '30%', border: 'solid', height: '30%', width: '10%' }}>
                <div style={{ padding: '6%' }}><h2>Inventory</h2></div>
                <div style={{ padding: '6%' }}>{inventoryBody}</div>
            </div>
        );
    }
}