AFRAME.registerComponent('show-info', {
    schema: {
        //lo que se desea cambiar
        image: {
            type: 'string'
        }
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        let imgH = 3;
        let imgPos = 1;
        let titlePos = 2.75;
        let containerH = 6;
        let textPos = -1.7;
        let textH = 2.6;
        var color = this.color;

        //evento boton del menu cava
        var cavaButton = this.cavaButton = document.querySelectorAll('.cavaButton')
            
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        for (let i = 0; i < cavaButton.length; ++i) {
            cavaButton[i].addEventListener('mouseenter', this.onMouseEnter);
            cavaButton[i].addEventListener('mouseleave', this.onMouseLeave);
        }

        

        let info = [
            {
                title: 'Cocina',
                img: '../img/organizadores.jpg',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.',
            },
            {
                title: 'Cabernet',
                img: '../img/cabernet.jpg',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.',
            },
            {
                title: 'Malbec',
                img: '../img/malbec.jpg',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.',
            },
            {
                title: 'Pinot',
                img: '../img/pinot.jpg',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.',
            },
            {
                title: 'Tipos de reservas',
                img: '../img/wino.jpg',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s rd dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but als.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.',
            }
        ]
        
        el.addEventListener('click', function () {
            //panel que se despliega con el icono info
            let infoPanel = document.querySelector('#infoPanel')

            //info del cartel 
            let title = document.querySelector('#title')
            let img = document.querySelector('#img')
            let text = document.querySelector('#text')
            let container = document.querySelector('#infoPanel')
            let currentTextH = textH;

            
            //ubicacion panel y contenido
            if (el.id === 'cabernet') {
                infoPanel.setAttribute('position', '1.5 2 7')
                infoPanel.setAttribute('rotation', '0 180 0')
                //info del cartel de cabertnet
                title.setAttribute('value', info[1].title)
                img.setAttribute('src', info[1].img)
                img.setAttribute("height", imgH*.7)
                text.setAttribute('value', info[1].text)
                currentTextH = 3.5;

            } else if (el.id === 'malbec') {
                infoPanel.setAttribute('position', '1.5 2 7')
                infoPanel.setAttribute('rotation', '0 180 0')
                //info del cartel de malbec
                title.setAttribute('value', info[2].title)
                img.setAttribute('src', info[2].img)
                img.setAttribute("height", imgH*.8)
                text.setAttribute('value', info[2].text)
                currentTextH = 2;

            } else if (el.id === 'pinot') {
                infoPanel.setAttribute('position', '1.5 2 7')
                infoPanel.setAttribute('rotation', '0 180 0')
                //info del cartel de pinot
                title.setAttribute('value', info[3].title)
                img.setAttribute('src', info[3].img)
                img.setAttribute("height", imgH*.8)
                text.setAttribute('value', info[3].text)
                currentTextH = 2;

            } else if (el.id === 'reserva') {
                infoPanel.setAttribute('position', '1.5 2 7')
                infoPanel.setAttribute('rotation', '0 180 0')
                //info del cartel de reserva
                title.setAttribute('value', info[4].title)
                img.setAttribute('src', info[4].img)
                img.setAttribute("height", imgH*.8)
                text.setAttribute('value', info[4].text)
                currentTextH = 2;

            } else if (el.id === 'kitchen') {
                infoPanel.setAttribute('position', '-5.5 2 2.5')
                infoPanel.setAttribute('rotation', '0 90 0')
                //info del cartel de cocina
                title.setAttribute('value', info[0].title)
                img.setAttribute('src', info[0].img)
                img.setAttribute("height", imgH*.6)
                text.setAttribute('value', info[0].text)
                currentTextH = 2;
            }

            //setear posicion y tamaño
            let currentImgH = img.getAttribute("height")
            
            let newContainerH = containerH - (imgH - currentImgH) - (textH - currentTextH)

            container.setAttribute("geometry", {
                height: newContainerH
            })
            
                    
            title.setAttribute("position", "-1.5 " + (titlePos - ((containerH - newContainerH))/2) + " 0")

            img.setAttribute("position", "0 " + ((imgPos - ((containerH - newContainerH))/2 + (imgH - currentImgH)/2)) + " 0.01")

            text.setAttribute("position", "0 " + ((textPos + ((containerH - newContainerH))/2 - (textH - currentTextH)/2)) + " 0")
            

            //cambio de boton actual con click
            if (infoPanel.getAttribute('current') === el.id || infoPanel.getAttribute('current') === 'null') {
                if (infoPanel.getAttribute('visible')) {
                    infoPanel.setAttribute('visible', 'false')
                    infoPanel.setAttribute('current', 'null')

                } else {
                    infoPanel.setAttribute('visible', 'true')
                    infoPanel.setAttribute('current', el.id)
                }
            } else {
                infoPanel.setAttribute('current', el.id)
            }
            
        })
    },
    onMouseEnter: function (evt) {
            
        let button = this.cavaButton
        
        for (let i = 0; i < button.length; ++i) {
            
            if (evt.target === button[i]) {
                this.color = evt.target.getAttribute('material').color
                console.log(this.color);
                evt.target.setAttribute('material', 'color', '#046de7');
                evt.target.object3D.scale.set(1.2, 1.2, 1.2);
                this.el.addState('hover');
                }
        }
        
        },

    onMouseLeave: function (evt) {
        let button = this.cavaButton
        if (this.el.is('hover')) {
            console.log(this.color);
            evt.target.object3D.scale.set(1, 1, 1);
            evt.target.setAttribute('material', 'color', this.color);
        }
        this.el.removeState('hover');
            
        
        },

});