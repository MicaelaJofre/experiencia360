AFRAME.registerComponent('show-menu', {
    schema: {
        //lo que se desea cambiar
        img: {
            type: 'string'
        },
        sound: {
            type: 'string'
        }
    },

    init: function () {
        let data = this.data;
        let el = this.el;
    }
});