import playerOptions from '../config/playerOptions.json';
import EkoUIComponents from 'EkoUIComponents';
import Inventory from '../components/Inventory/Inventory';

export default {
    onLoad: function(ctx) {},

    onInit: function(player, ctx) {
        // create a group and add the inventory ui component to it

        // using the props paramater, we can control the styling of the component from here
        player.ui.add('inventoryGroup', EkoUIComponents.EkoGroup, {
                fitToVideo: true,
                shouldShow: () => true, // always show the inventory group
                children: [{
                    id: 'inventory',
                    component: Inventory,
                    props: {
                        style: {
                            left: '100px',
                            top: '200px'
                        }
                    }
                }]
            });

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
