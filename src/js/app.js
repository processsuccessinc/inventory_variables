import playerOptions from '../config/playerOptions.json';
import Inventory from '../components/Inventory';

export default {
    onLoad: function(ctx) {},

    onInit: function(player, ctx) {
        player.ui.add('inventory', Inventory);
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

        player.decision.add('finalFruitsInPlate', {
            parent: 'node_eat_8f5498',
            endTime: -4,
            decider: function(parent, children, options) {
                let inventory = player.variables.getValue('inventory');
                let orange = inventory.include('orange');
                let banana = inventory.include('banana');
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
