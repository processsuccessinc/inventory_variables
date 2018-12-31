import playerOptions from '../config/playerOptions.json';
import Inventory from '../components/Inventory';

export default {
    onLoad: function(ctx) {},

    onInit: function(player, ctx) {
        // add the inventory ui component
        player.ui.add('inventory', Inventory);

        // register the inventory variable
        player.variables.register({
            name: 'inventory',
            initialValue: [],
            updateOn: 'nodestart',
            resetOn: 'playlistreset',
            dataSet: {
                node_banana_left_613ae5: ['Orange'],
                node_orange_left_cf47c4: ['Banana'],
                node_fridge_empty_70b503: ['Orange', 'Banana']
            }
        });

        // the last decision of the example is based on the inventory variable
        // The plate contents that show up should be corresponding to what we have in our inventory
        player.decision.add('node_eat_8f5498', {
            decider: function(parent, children, options) {
                let inventory = player.variables.getValue('inventory');
                let orange = inventory.includes('Orange');
                let banana = inventory.includes('Banana');
                
                // Show the node with the right fruits
                if(orange && banana) {
                    return 'node_orange_and_banana_on_plate_d91bab';
                } else if(orange) {
                    return 'node_orange_on_plate_4c07f4';
                } else if(banana) {
                    return 'node_banana_on_plate_f573b4';
                } else {
                    return 'node_empty_plate_6342bf';
                }
            }
        });
        
    },
    
    playerOptions
};
