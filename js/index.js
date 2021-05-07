var posXOld = 0;
var posYOld = 0;

document.querySelector('body').addEventListener('mousemove', function (event) {

    var posX = event.clientX,
        posY = event.clientY;

    var olho1 = document.getElementById('Layer_2')
    var olho2 = document.getElementById('Layer_3')

    var circle1 = olho1.getElementsByTagName('circle')
    var circle2 = olho2.getElementsByTagName('circle')

    if ((posXOld - posX) === 2 || (posXOld - posX) === -2){

        var x1 = circle1.item(0).getAttribute('cx')
        var x2 = circle2.item(0).getAttribute('cx')

        if (posX > posXOld){

            if (x1 < 421){

                circle1.item(0).setAttribute('cx', Number(x1) + 2)
            }

            if (x2 < 331){

                circle2.item(0).setAttribute('cx', Number(x2) + 2)
            }

        } else if (posX < posXOld){

            if (x1 > 361){

                circle1.item(0).setAttribute('cx', new Number(x1) - 2)
            }

            if (x2 > 281){

                circle2.item(0).setAttribute('cx', new Number(x2) - 2)
            }
        }
     }

    if ((posYOld - posY) === 2 || (posYOld - posY) === -2){

        var y1 = circle1.item(0).getAttribute('cy')
        var y2 = circle2.item(0).getAttribute('cy')

        if (posY > posYOld){

            if (y1 < 261){

                circle1.item(0).setAttribute('cy', new Number(y1) + 2)
            }

            if (y2 < 201){

                circle2.item(0).setAttribute('cy', new Number(y2) + 2)
            }

        } else if (posY < posYOld){

            if (y1 > 201){

                circle1.item(0).setAttribute('cy', new Number(y1) - 2)
            }

            if (y2 > 161){

                circle2.item(0).setAttribute('cy', new Number(y2) - 2)
            }
        }
    }

    posXOld = posX
    posYOld = posY
});
