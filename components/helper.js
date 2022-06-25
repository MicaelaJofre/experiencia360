
export function ChangeMap(data) {

    //nombre de la escena
        let sceneText = document.querySelector('#scene-text')
        
    //nombre de la escena
    sceneText.textContent = data.scene
    
            
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
            if (data.img === '#living' ) {
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
            }
}