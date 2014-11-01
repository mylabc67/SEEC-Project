//Created by Yilei Mou on 10/29/14
/**
 * A password pin pad
 * Input any 4 digit password will allow the user access the dashboard
 */
Ext.define('SEEC.view.login.Password', {
    extend: 'Ext.Container',
    xtype: 'password',
    requires: [
        'Ext.Anim'
    ],
    config: {
        html: 'password',
        styleHtmlContent: true,
        cls: 'password'
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.on('painted', me.onPainted, me);
    },

    /**
     * When component is rendered, fade it in
     * @param el
     * @param eOpts
     */
    onPainted: function (el, eOpts) {
        Ext.Anim.run(el, 'fade', {
            out: false,
            to: {
                opacity: 1
            },
            from: {
                opacity: 0
            },
            autoClear: false
        });
    }
});