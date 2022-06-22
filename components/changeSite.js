AFRAME.registerComponent('change-site', {
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


        el.addEventListener("mouseenter", function () {
            //icono de info
            let kitchen = document.querySelector('#kitchen')


            let imag360 = document.querySelector("#imag360");
            imag360.setAttribute("src", data.img);
            
            //sonido
            let playingMusic = imag360.getAttribute("class", "playing-music")
            imag360.setAttribute("sound", "src", data.sound)
            if (playingMusic) {
                imag360.components.sound.playSound()
            }

            //menu cava
            let menuPanel = document.querySelector("#menuPanel")

            //panel que se despliega con el icono info
            let infoPanel = document.querySelector('#infoPanel')

            //cambio de boton
            infoPanel.setAttribute('current', 'null')
            

            //flechas de ingreso a living o a cava
            let livingContainer = document.querySelector("#living-container")
            let cavaContainer = document.querySelector("#cava-container")


            //aparecen o desaparecen las flechas de ingreso a living o a cava
            if (data.img === '#living') {   
                //panel se borra si cambia de escena
                infoPanel.setAttribute('visible', 'false')
                
                //menu cava
                menuPanel.setAttribute('visible', 'false')

                //icono de info
                kitchen.setAttribute('visible', 'true')

                //flechas
                cavaContainer.setAttribute("class", "click")
                cavaContainer.setAttribute('visible', 'true')

                livingContainer.classList.remove("click")
                livingContainer.setAttribute('visible', 'false')
            }
            if (data.img === '#cava') {
                //panel se borra si cambia de escena
                infoPanel.setAttribute('visible', 'false')

                //menu cava
                menuPanel.setAttribute('visible', 'true')

                //icono de info
                kitchen.setAttribute('visible', 'false')

                //flechas
                cava.classList.remove("click")
                cava.setAttribute('visible', 'false')

                cavaContainer.classList.remove("click")
                cavaContainer.setAttribute('visible', 'false')

                livingContainer.setAttribute("class", "click")
                livingContainer.setAttribute('visible', 'true')

                document.querySelector("#camera").setAttribute("rotation", "-5 2330 0")
            }


            
        })

    }
});


