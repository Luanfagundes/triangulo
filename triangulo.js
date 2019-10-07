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
    },
    rostoGato = {
        largura: 300,
        altura: 240,
        tamanho: 170
    },
    oGatoDireito = {
        largura: 220,
        altura: 230,
        tamanho: 30
    },
    oGatoEsquerdo = {
        largura: 380,
        altura: 230,
        tamanho: 30
    },
    dRetina = {
        lados: 217,
        altura: 217,
        largura: 05,
        tamanho: 25
    },
    eRetina = {
        lados: 380,
        altura: 217,
        largura: 05,
        tamanho: 25
    },
    nariz = {
        posA: 300,
        tamA: 300,
        posB: 270,
        tamB: 275,
        posC: 330,
        tamC: 275 
    };


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
        var oLargura = rostoGato.largura, oAltura = rostoGato.altura, oTamanho = rostoGato.tamanho;
        var eLargura = rostoGato.largura, eAltura = rostoGato.altura, eTamanho = rostoGato.tamanho;
        var vLargura = dRetina.largura, vAltura = dRetina.altura, vTamanho = dRetina.tamanho, vLados = dRetina.lados;
        var aposA = oEsq.posA, atamA = oEsq.tamA, aposB = oEsq.posB, atamB = oEsq.tamB, aposC = oEsq.posC, atamC = oEsq.tamC;

        var orelhaEsqueda = this.orelhas(oEsq.posA, oEsq.tamA, oEsq.posB, oEsq.tamB, oEsq.posC, oEsq.tamC);
        var rosto = this.rosto(rostoGato.largura, rostoGato.altura, rostoGato.tamanho);
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
                cpx.clearRect(0,0,tela.width,tela.height);
                cpx.stroke(orelhaEsqueda);
                cpx.stroke(orelhaDireita);
                cpx.stroke(rosto);
            }, 10 * tempo);

            //sair do loop
            if ((posA ===  oDir.posA) && (tamA ===  oDir.tamA) &&  (posB ===  oDir.posB) && 
                (tamB ===  oDir.tamB) && (posC ===  oDir.posC) && (tamC ===  oDir.tamC)){
                sair = false;
            }
        }

        sair = true;

        while(sair){
            
            if (oLargura !== oGatoDireito.largura) if (rostoGato.largura > oGatoDireito.largura){ oLargura--; }else if(rostoGato.largura < oGatoDireito.largura){ oLargura++ };
            if (oAltura !== oGatoDireito.altura) if (rostoGato.largura > oGatoDireito.largura){ oAltura--; }else if(rostoGato.largura < oGatoDireito.largura){ oAltura++ };
            if (oTamanho !== oGatoDireito.tamanho) if (rostoGato.tamanho > oGatoDireito.tamanho){ oTamanho--; }else if(rostoGato.tamanho < oGatoDireito.tamanho){ oTamanho++ };
            
            let bolinhas = this.rosto(oLargura, oAltura, oTamanho);
            tempo++;
            setTimeout(function(){
                cpx.clearRect(0,0,tela.width,tela.height);
                cpx.stroke(bolinhas);
                cpx.stroke(orelhaEsqueda);
                cpx.stroke(this.orelhas(posA, tamA, posB, tamB, posC, tamC));
                cpx.stroke(rosto);
            }, 10 * tempo);

            //sair do loop
            if ((oLargura ===  oGatoDireito.largura) && (oAltura ===  oGatoDireito.altura) &&  (oTamanho ===  oGatoDireito.tamanho)){
                sair = false;
            }
        }

        sair = true;

        while(sair){
            
            if (eLargura !== oGatoEsquerdo.largura) if (rostoGato.largura > oGatoEsquerdo.largura){ eLargura--; }else if(rostoGato.largura < oGatoEsquerdo.largura){ eLargura++ };
            if (eAltura !== oGatoEsquerdo.altura) if (rostoGato.altura > oGatoEsquerdo.altura){ eAltura--; }else if(rostoGato.altura < oGatoEsquerdo.altura){ eAltura++ };
            if (eTamanho !== oGatoEsquerdo.tamanho) if (rostoGato.tamanho > oGatoEsquerdo.tamanho){ eTamanho--; }else if(rostoGato.tamanho < oGatoEsquerdo.tamanho){ eTamanho++ };
            
            let ebolinhas = this.rosto(eLargura, eAltura, eTamanho);
            tempo++;
            setTimeout(function(){
                cpx.clearRect(0,0,tela.width,tela.height);
                cpx.stroke(this.rosto(oLargura, oAltura, oTamanho));
                cpx.strokeRect(dRetina.lados, dRetina.altura, dRetina.largura, dRetina.tamanho);
                cpx.stroke(ebolinhas);
                cpx.stroke(orelhaEsqueda);
                cpx.stroke(this.orelhas(posA, tamA, posB, tamB, posC, tamC));
                cpx.stroke(rosto);
            }, 10 * tempo);

            //sair do loop
            if ((eLargura ===  oGatoEsquerdo.largura) && (eAltura ===  oGatoEsquerdo.altura) &&  (eTamanho ===  oGatoEsquerdo.tamanho)){
                sair = false;
            }
        }

        sair = true;
        var tempo2 = tempo;

        while(sair){
            
            if (vLargura !== eRetina.largura) if (dRetina.largura > eRetina.largura){ vLargura--; }else if(dRetina.largura < eRetina.largura){ vLargura++ };
            if (vAltura !== eRetina.altura) if (dRetina.altura > eRetina.altura){ vAltura--; }else if(dRetina.altura < eRetina.altura){ vAltura++ };
            if (vTamanho !== eRetina.tamanho) if (dRetina.tamanho > eRetina.tamanho){ vTamanho--; }else if(dRetina.tamanho < eRetina.tamanho){ vTamanho++ };
            if (vLados !== eRetina.lados) if (dRetina.lados > eRetina.lados){ vLados--; }else if(dRetina.lados < eRetina.lados){ vLados++ };

            cpx.strokeRect(dRetina.lados, dRetina.altura, dRetina.largura, dRetina.tamanho);
            tempo++;
            setTimeout(function(){
                cpx.clearRect(0,0,tela.width,tela.height);
                cpx.strokeRect(vLados, vAltura, vLargura, vTamanho);
                cpx.strokeRect(dRetina.lados, dRetina.altura, dRetina.largura, dRetina.tamanho);
                cpx.stroke(this.rosto(oLargura, oAltura, oTamanho));
                cpx.stroke(this.rosto(eLargura, eAltura, eTamanho));
                cpx.stroke(orelhaEsqueda);
                cpx.stroke(this.orelhas(posA, tamA, posB, tamB, posC, tamC));
                cpx.stroke(rosto);
                this.desenharNariz();
            }, 10 * tempo);

            //sair do loop
            if ((vLargura ===  eRetina.largura) && (vAltura ===  eRetina.altura) 
            &&  (vTamanho ===  eRetina.tamanho) && (vLados ===  eRetina.lados)){
                sair = false;
            }
        }

        sair = true;

        while(sair){
            
            if (aposA !== nariz.posA) if (oEsq.posA > nariz.posA){ aposA--; }else if(oEsq.posA < nariz.posA){ aposA++ };
            if (atamA !== nariz.tamA) if (oEsq.tamA > nariz.tamA){ atamA--; }else if(oEsq.tamA < nariz.tamA){ atamA++ };
            if (aposB !== nariz.posB) if (oEsq.posB > nariz.posB){ aposB--; }else if(oEsq.posB < nariz.posB){ aposB++ };
            if (atamB !== nariz.tamB) if (oEsq.tamB > nariz.tamB){ atamB--; }else if(oEsq.tamB < nariz.tamB){ atamB++ };
            if (aposC !== nariz.posC) if (oEsq.posC > nariz.posC){ aposC--; }else if(oEsq.posC < nariz.posC){ aposC++ };
            if (atamC !== nariz.tamC) if (oEsq.tamC > nariz.tamC){ atamC--; }else if(oEsq.tamC < nariz.tamC){ atamC++ };

            let iorelhaDireita = this.orelhas(aposA, atamA, aposB, atamB, aposC, atamC);

            tempo2++;
            setTimeout(function(){
                cpx.clearRect(0,0,tela.width,tela.height);
                cpx.strokeRect(vLados, vAltura, vLargura, vTamanho);
                cpx.strokeRect(dRetina.lados, dRetina.altura, dRetina.largura, dRetina.tamanho);
                cpx.stroke(this.rosto(oLargura, oAltura, oTamanho));
                cpx.stroke(this.rosto(eLargura, eAltura, eTamanho));
                cpx.stroke(iorelhaDireita);
                cpx.stroke(orelhaEsqueda);
                cpx.stroke(this.orelhas(posA, tamA, posB, tamB, posC, tamC));
                cpx.stroke(rosto);
                this.desenharNariz();
            }, 10 * tempo2);

            //sair do loop
            if ((aposA ===  nariz.posA) && (atamA ===  nariz.tamA) &&  (aposB ===  nariz.posB) &&
                (atamB ===  nariz.tamB) && (aposC ===  nariz.posC) && (atamC ===  nariz.tamC)){
                sair = false;
            }
        }  
    });
}


function carregada() {
    vincularEventos();
};

function rosto(lados, cimabaixo, largura) {
    let cpx = new Path2D();
    
    cpx.arc(lados, cimabaixo, largura, 0, Math.PI * 2, true); // Lado, Cima Baixo, Largura
    
    return cpx;
}

function orelhas(posA, tamA, posB, tamB, posC, tamC) {
    let cpx = new Path2D();
    
    cpx.moveTo(posA, tamA); // parte de cima        - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posB, tamB); // parte esquerda baixa - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posC, tamC); // parte direita baixa  - (lados(direita + esquerda -); altura(cima - baixo +));
    cpx.lineTo(posA, tamA);
    
    return cpx;
}

function desenharNariz() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.strokeRect(270, 320, 60, 05); // (Lados (dir + esquerda - ) Cimabaixo (baixo + cima - ) Largura, Tamanho)
    cpx.strokeRect(297, 300, 05, 20); // (Lados (dir + esquerda - ) Cimabaixo (baixo + cima - ) Largura, Tamanho)
}