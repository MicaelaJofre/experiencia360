import {ChangeMap} from './helper.js'
AFRAME.registerComponent('change-site', {
    schema: {
        //lo que se desea cambiar
        img: {
            type: 'string'
        },
        sound: {
            type: 'string'
        },
        scene: {
            type: 'string'
        }
    },

    init: function () {
        let data = this.data;
        let el = this.el;

        //nombre de la escena
        let sceneText = document.querySelector('#scene-text')
        
        
        el.addEventListener("mouseenter", function (e) {
            
            ChangeMap(data)
            
        })

        

    }
});


