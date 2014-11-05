//Created by Yilei Mou on 10/29/14
/**
 * A password pin pad
 * Input any 4 digit password will allow the user access the dashboard
 */
Ext.define('SEEC.view.login.Password', {
    extend: 'Ext.Container',
    xtype: 'password',
    passwordInput: '',
    requires: [
        'Ext.Anim'
    ],
    config: {
        styleHtmlContent: true,
        cls: 'password',
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        }
    },

    /**
     * Customization initiated here.
     */
    initialize: function () {
        var me = this;
        me.setItems();
        me.callParent(arguments);
        me.createCustomizedTpl();
        me.on('painted', me.onPainted, me);
        me.element.on('singletap', me.onTap, me);
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
    },

    /**
     * Create a customized html template.
     */
    createCustomizedTpl: function () {
        var me = this;
        var html = '<div id="loading-div"></div>\
            <div id="statusbar-20"></div>\
            <div id="main-div">\
                <div class="title">Enter Passcode</div>\
                <div class="input-div">\
                    <span class="input-num">·</span>\
                    <span class="input-num">·</span>\
                    <span class="input-num">·</span>\
                    <span class="input-num">·</span>\
                </div>\
                <div class="num-row">\
                    <button class="num">1</button>\
                    <button class="num">2</button>\
                    <button class="num">3</button>\
                </div>\
                <div class="num-row">\
                    <button class="num">4</button>\
                    <button class="num">5</button>\
                    <button class="num">6</button>\
                </div>\
                <div class="num-row">\
                    <button class="num">7</button>\
                    <button class="num">8</button>\
                    <button class="num">9</button>\
                </div>\
                <div class="num-row">\
                    <button class="num">0</button>\
                </div>\
            </div>';
        me.setHtml(html);
    },

    /**
     * Fired when the component is tapped.
     * @param event
     * @param node
     * @param options
     * @param eOpts
     */
    onTap: function (event, node, options, eOpts) {
        var me = this;
        if (Ext.get(node).hasCls('num')) {
            me.onNumberTap(node)
        }
    },

    /**
     * Fired when a number is tapped. Trigger the password input.
     * @param node
     */
    onNumberTap: function (node) {
        var me = this, number = node.textContent;
        me.passwordInput = me.passwordInput + number;
        var length = me.passwordInput.length;
        var index = length - 1;
        me.updateInput(index);
        me.checkPassword(length);
    },

    /**
     * Update the password input to let the user know how many digits he has entered.
     * @param index
     */
    updateInput: function (index) {
        var me = this;
        var headerElArray = me.element.query('.input-num');
        Ext.get(headerElArray[index]).setHtml('*');
    },

    /**
     * Monitored the password. If password length reaches 4, compare the password.
     * @param length
     */
    checkPassword: function (length) {
        var me = this;
        if (length >= 4) {
            me.fireEvent('switchToDashboard');
        }
    }
});