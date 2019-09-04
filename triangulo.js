calcularTriangulo = () => { 
    let a = parseFloat(prompt("digite a:"));
    let b = parseFloat(prompt("digite b:"));
    let c = parseFloat(prompt("digite c:"));
    
    if(a == b && b ==c){
     document.write("Triangulo equilatero!");
    }
    else if(a != b && b != c && c != a){
     document.write("Triangulo escaleno!");
    }
    else{
     document.write("Triangulo isóceles!");
    }
};


function verificarTriangulo() {
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");
    cpx.clearRect(0,0,tela.width,tela.height);

    var verticeAX = parseFloat($('#txtVerticeAX').val());
    var verticeAY = parseFloat($('#txtVerticeAY').val());
    var verticeBX = parseFloat($('#txtVerticeBX').val());
    var verticeBY = parseFloat($('#txtVerticeBY').val());
    var verticeCX = parseFloat($('#txtVerticeCX').val());
    var verticeCY = parseFloat($('#txtVerticeCY').val());


    cpx.fillStyle = "gray";
    cpx.beginPath();
    cpx.moveTo(verticeAX, verticeAY); // parte de cima        - (largura - altura);
    cpx.lineTo(verticeBX, verticeBY); // parte esquerda baixa - (largura - altura);
    cpx.lineTo(verticeCX, verticeCY); // parte direita baixa  - (largura - altura);
    cpx.fill();
    classificarTriangulo();
}

function classificarTriangulo()
{
    $('#lblTipoTriangulo').val('');
    var verticeAX = parseFloat($('#txtVerticeAX').val());
    var verticeAY = parseFloat($('#txtVerticeAY').val());
    var verticeBX = parseFloat($('#txtVerticeBX').val());
    var verticeBY = parseFloat($('#txtVerticeBY').val());
    var verticeCX = parseFloat($('#txtVerticeCX').val());
    var verticeCY = parseFloat($('#txtVerticeCY').val());

    var distanciaAB = Math.abs(Math.pow((verticeAX - verticeBX),2)) + Math.abs(Math.pow((verticeAY - verticeBY),2));
    var distanciaAC = Math.abs(Math.pow((verticeAX - verticeCX),2)) + Math.abs(Math.pow((verticeAY - verticeCY),2));;
    var distanciaBC = Math.abs(Math.pow((verticeBX - verticeCX),2)) + Math.abs(Math.pow((verticeBY - verticeCY),2));;

    if(distanciaAB == distanciaAC && distanciaAC == distanciaBC)
    {
        alert('O triângulo é equilátero!');
        //$('#lblTipoTriangulo').val('O triângulo é equilátero!');
    }
    else if(distanciaAB == distanciaAC || distanciaAB == distanciaBC || distanciaBC == distanciaAC)
    {
        alert('O triângulo é escaleno!');
        // $('#lblTipoTriangulo').val('O triângulo é escaleno!');
    }
    else
    {
        alert('O triângulo é isósceles!');
        // $('#lblTipoTriangulo').val('O triângulo é isósceles!');
    }
}

function rotacionarTriangulo()
{
    var verticeAX = parseFloat($('#txtVerticeAX').val());
    var verticeAY = parseFloat($('#txtVerticeAY').val());
    var verticeBX = parseFloat($('#txtVerticeBX').val());
    var verticeBY = parseFloat($('#txtVerticeBY').val());
    var verticeCX = parseFloat($('#txtVerticeCX').val());
    var verticeCY = parseFloat($('#txtVerticeCY').val());

    var rotacao = parseFloat($('#txtRotacao').val());

  //  x´ = x.cos q - y.sen q
//y´ = x.sen q + y.cos q
    verticeAX = verticeAX * (Math.cos(rotacao)) - verticeAY * (Math.sin(rotacao));
    verticeAY = verticeAX * (Math.sin(rotacao)) + verticeAY * (Math.cos(rotacao));

    verticeBX = verticeBX * (Math.cos(rotacao)) - verticeBY * (Math.sin(rotacao));
    verticeBY = verticeBX * (Math.sin(rotacao)) + verticeBY * (Math.cos(rotacao));

    verticeCX = verticeCX * (Math.cos(rotacao)) - verticeCY * (Math.sin(rotacao));
    verticeCY = verticeCX * (Math.sin(rotacao)) + verticeCY * (Math.cos(rotacao));

    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.clearRect(0,0,tela.width,tela.height);
    cpx.fillStyle = "gray";
    cpx.beginPath();
    cpx.moveTo(verticeAX, verticeAY); // parte de cima        - (largura - altura);
    cpx.lineTo(verticeBX, verticeBY); // parte esquerda baixa - (largura - altura);
    cpx.lineTo(verticeCX, verticeCY); // parte direita baixa  - (largura - altura);
    cpx.fill();
}

montarTriangulo = () => { 
    let tela = document.getElementById("tela");
    let cpx = tela.getContext("2d");

    cpx.fillStyle = "gray";
    cpx.beginPath();
    cpx.moveTo(50, 10); // parte de cima        - (largura - altura);
    cpx.lineTo(10, 50); // parte esquerda baixa - (largura - altura);
    cpx.lineTo(90, 50); // parte direita baixa  - (largura - altura);
    cpx.fill();
};

function carregada() {
    //this.calcularTriangulo();
    //this.montarTriangulo();
};