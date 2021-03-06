//Created by Yilei Mou on 10/29/14
/**
 * A customized component. Simulating the IOS lock screen with a fantastic slider.
 */
Ext.define('SEEC.view.login.LockScreen', {
    extend: 'Ext.Container',
    xtype: 'lockscreen',
    config: {
        cls: 'lock-screen'
    },
    initialize: function () {
        var me = this;
        this.callParent(arguments);
        me.setInitialTpl();
    },

    /**
     * Set the initial customized html template.
     */
    setInitialTpl: function () {
        var me = this;
        var timeTpl = me.getTimeTpl();
        var bottomSlideHtml = me.getBottomSlideHtml();
        me.tpl = Ext.create('Ext.XTemplate', [
            '<div>',
                timeTpl,
                bottomSlideHtml,
            '</div>'
        ].join(''));
        me.tpl.insertFirst(me.element.child('div'), {
            time: SEEC.util.Utils.timeRenderer(new Date()),
            date: SEEC.util.Utils.dateRenderer(new Date())
        });
    },

    /**
     * Create the clock container template
     * @returns {string}
     */
    getTimeTpl: function () {
        return [
            '<tpl>',
                '<div class="time-container">',
                    '<div class="time">{time}</div>',
                    '<div class="date">{date}</div>',
                '</div>',
            '</tpl>'
        ].join('');
    },

    /**
     * Create the slider template
     * @returns {string}
     */
    getBottomSlideHtml: function () {
        var html = [
            '<div class="slide-bottom">', '' +
                '> slide to unlock',
            '</div>'
        ].join('');
        return html;
    },

    /**
     * Reset the clock time
     */
    resetTime: function () {
        var me = this;
        if (me.tpl) {
            me.tpl.overwrite(me.body, {time: new Date()});
        }
    }
});