import playerOptions from '../config/playerOptions.json';
import Inventory from '../components/Inventory';

export default {
    onLoad: function(ctx) {},

    onInit: function(player, ctx) {
        // add the inventory ui component
        player.ui.add('inventory', Inventory);

        // register the inventory variable
        // update the variable when the 'pick up' clip ends
        player.variables.register({
            name: 'inventory',
            initialValue: [],
            updateOn: 'nodeend',
            resetOn: 'playlistreset',
            dataSet: {
                node_orange_first_take_orange_dbb620: ['Orange'],
                node_banana_first_take_banana_cb135e: ['Banana'],
                node_orange_first_take_banana_46891d: ['Orange', 'Banana'],
                node_banana_first_take_orange_e7f48e: ['Orange', 'Banana']
            }
        });

    },
    
    playerOptions
};
