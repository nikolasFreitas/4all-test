import React from 'react';

function getPlace(props) {
    const ids = [1, 2, 3, 4];
    const placeInfo = {
        id :	"ultimo",
        cidade :	"Porto Alegre",
        bairro :	"Auxiliadora",
        urlFoto :	"http://dev.4all.com:3003/cidade.jpg",
        urlLogo :	"http://dev.4all.com:3003/logometro.png",
        titulo :	"Cidade",
        telefone :	"5144114411",
        texto :	"A metropolis is a large …ce, and communications.",
        endereco :	"Rua. Cândido Silveira, 178",
        latitude :	-30.0209728,
        longitude :	-51.1921976,
        comentarios : {
            0 : {
                urlFoto :	"http://dev.4all.com:3003/usuario5.jpeg",
                nome :	"Usuario asd",
                nota :	3,
                titulo :	"Comentário Título",
                comentario :	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus consequat nulla, a laoreet ipsum blandit ac. Donec vitae convallis nisi. Integer tincidunt nisi ac nibh posuere, in finibus turpis eleifend."
            }
        }
    };

    if (props.id in ids) {
        const promise = new Promise((resolve) => {
            resolve(placeInfo);
        });

        return promise
    } else {
        console.log("not on ids");
        return false
    }

}

export default getPlace
