//Created by Yilei Mou on 10/30/2014
Ext.define('SEEC.util.Utils', {
    singleton: true,

    timeRenderer: function (date) {
        return Ext.util.Format.date(date, 'h:m');
    },

    dateRenderer: function (date) {
        return Ext.util.Format.date(date, 'D, M d');
    }
});