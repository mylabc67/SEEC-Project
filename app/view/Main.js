/**
 * A main view generate by Sencha Cmd
 */
Ext.define('SEEC.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.carousel.Carousel',
        'Ext.Container',
        'SEEC.view.login.Password',
        'SEEC.view.login.LockScreen',
        'SEEC.util.Utils'
    ],
    config: {
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'carousel',
                indicator: false,
                cls: 'login',
                activeItem: 'lockscreen',
                items: [
                    {
                        xtype: 'password'
                    },
                    {
                        xtype: 'lockscreen'
                    }
                ]
            },
            {
                xtype: 'container',
                html: '2nd container'
            }
        ]
    }
});
