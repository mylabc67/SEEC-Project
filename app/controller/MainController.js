/**
 * Created by Yilei Mou on 11/1/14.
 */
/**
 * Controls the login screen and dashboard.
 * Once password is confirmed, bring the user to dash board. More global functionality could be added in this controller.
 */
Ext.define('SEEC.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            passWordPad: 'password',
            dashboard: 'dashboard',
            main: 'main'
        },

        control: {
            password: {
                switchToDashboard: 'switchToDashboard'
            }
        }
    },

    /**
     *
     */
    switchToDashboard: function () {
        var me = this;
        me.getMain().setActiveItem(1);
    }

});