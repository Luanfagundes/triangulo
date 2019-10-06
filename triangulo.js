verificaTipoTriangulo = (verticeAX, verticeBX, verticeCX, verticeAY, verticeBY, verticeCY) => { 
    var distanciaAB = Math.abs(Math.pow((verticeAX - verticeBX),2)) + Math.abs(Math.pow((verticeAY - verticeBY),2));
    var distanciaAC = Math.abs(Math.pow((verticeAX - verticeCX),2)) + Math.abs(Math.pow((verticeAY - verticeCY),2));;
    var distanciaBC = Math.abs(Math.pow((verticeBX - verticeCX),2)) + Math.abs(Math.pow((verticeBY - verticeCY),2));;

    if(distanciaAB == distanciaAC && distanciaAC == distanciaBC)
    {
        alert('O triângulo é equilátero!');
    }
    else if(distanciaAB == distanciaAC || distanciaAB == distanciaBC || distanciaBC == distanciaAC)
    {
        alert('O triângulo é escaleno!');
    }

    alert('O triângulo é isósceles!');
};

vincularEventos = () => {
    document.getElementById('aplicar-efeitos').addEventListener('click', (e) => {
        let tela = document.getElementById("tela");
        let cpx = tela.getContext("2d");
        var posA = oEsq.posA, tamA = oEsq.tamA, posB = oEsq.posB, tamB = oEsq.tamB, posC = oEsq.posC, tamC = oEsq.tamC;
        var tempo = 1;
        var sair = true;
    
        while(sair){
            
            if (posA !== oDir.posA) if (oEsq.posA > oDir.posA){ posA--; }else if(oEsq.posA < oDir.posA){ posA++ };
            if (tamA !== oDir.tamA) if (oEsq.tamA > oDir.tamA){ tamA--; }else if(oEsq.tamA < oDir.tamA){ tamA++ };
            if (posB !== oDir.posB) if (oEsq.posB > oDir.posB){ posB--; }else if(oEsq.posB < oDir.posB){ posB++ };
            if (tamB !== oDir.tamB) if (oEsq.tamB > oDir.tamB){ tamB--; }else if(oEsq.tamB < oDir.tamB){ tamB++ };
            if (posC !== oDir.posC) if (oEsq.posC > oDir.posC){ posC--; }else if(oEsq.posC < oDir.posC){ posC++ };
            if (tamC !== oDir.tamC) if (oEsq.tamC > oDir.tamC){ tamC--; }else if(oEsq.tamC < oDir.tamC){ tamC++ };
            
            let orelhaDireita = this.orelhas(posA, tamA, posB, tamB, posC, tamC);
            tempo++;
            setTimeout(function(){
                let orelhaEsqueda = this.orelhas(oEsq.posA, oEsq.tamA, oEsq.posB, oEsq.tamB, oEsq.posC, oEsq.tamC);
                
                cpx.clearRect(0,0,tela.width,tela.height);
                
                cpx.stroke(orelhaDireita);
                cpx.stroke(orelhaEsqueda);
            }, 10 * tempo);

            //sair do loop
            if ((posA ===  oDir.posA) && (tamA ===  oDir.tamA) &&  (posB ===  oDir.posB) && 
                (tamB ===  oDir.tamB) && (posC ===  oDir.posC) && (tamC ===  oDir.tamC)){
                sair = false;
            }
        }
    });
}

//posA: oEsq.posA + 380,
//tamA: oEsq.tamA + 0,
//posB: oEsq.posB + 240,
//tamB: oEsq.tamB - 100,
//posC: oEsq.posC + 230,
//tamC: oEsq.tamC + 100,

let oEsq = {
        posA: 110,
        tamA: 30,
        posB: 130,
        tamB: 220,
        posC: 240,
        tamC: 120 
    },
    oDir = {
        posA: 490,
        tamA: 30,
        posB: 470,
        tamB: 220,
        posC: 370,
        tamC: 120
    };

function carregada() {
    vincularEventos();

    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    let orelhaEsqueda = this.orelhas(oEsq.posA, oEsq.tamA, oEsq.posB, oEsq.tamB, oEsq.posC, oEsq.tamC);
    let orelhaDireita = this.orelhas(oDir.posA, oDir.tamA, oDir.posB, oDir.tamB, oDir.posC, oDir.tamC);
    
    desenharRosto();

    cpx.stroke(orelhaEsqueda);
    cpx.stroke(orelhaDireita);
};


function orelhas(posA, tamA, posB, tamB, posC, tamC) {
    let cpx = new Path2D();
    
    cpx.moveTo(posA, tamA); // parte de cima        - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posB, tamB); // parte esquerda baixa - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posC, tamC); // parte direita baixa  - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posA, tamA);
    
    return cpx;
}

function rotacionarOrelhas(posA, tamA, posB, tamB, posC, tamC) {
    let cpx = new Path2D();

    var rotacao = 10;

    let verticeAX = posA;
    let verticeAY = tamA;
    let verticeBX = posB;
    let verticeBY = tamB;
    let verticeCX = posC;
    let verticeCY = tamC;
    //120 y
    //160 x posb
    verticeAX = (160 * (Math.cos(rotacao))) + (120 * (Math.sin(rotacao)));
    verticeAY = (160 * (Math.sin(rotacao))) + (120 * (Math.cos(rotacao)));

    verticeBX = (160 * (Math.cos(rotacao))) + (120 * (Math.sin(rotacao)));
    verticeBY = (160 * (Math.sin(rotacao))) + (120 * (Math.cos(rotacao)));

    verticeCX = (160 * (Math.cos(rotacao))) + (120 * (Math.sin(rotacao)));
    verticeCY = (160 * (Math.sin(rotacao))) + (120 * (Math.cos(rotacao)));
    
    
    cpx.moveTo(verticeAX, verticeAY);
    cpx.lineTo(verticeBX, verticeBY);
    cpx.lineTo(verticeCX, verticeCY);
    cpx.lineTo(verticeAX, verticeAY);
    
    return cpx;
}

function desenharRosto() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.beginPath();
    cpx.arc(300, 240, 170, 0, Math.PI * 2, true); // Lado, Cima Baixo, Largura
    
    cpx.stroke();
}

function desenharOlhos() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");
    
    var teste = new Path2D();

    teste.arc(220, 230, 30, 0, Math.PI * 2, true); // Lado, Cima Baixo, Largura
    cpx.stroke(teste);
}

function desenharRetinas() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.strokeRect(217, 217, 05, 25); // (Lados (dir + esquerda - ) Cimabaixo (baixo + cima - ) Largura, Tamanho)
}

function desenharNariz() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.strokeRect(270, 305, 50, 15); // (Lados (dir + esquerda - ) Cimabaixo (baixo + cima - ) Largura, Tamanho)
    cpx.strokeRect(290, 320, 10, 22); // (Lados (dir + esquerda - ) Cimabaixo (baixo + cima - ) Largura, Tamanho)
}