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
    this.montarTriangulo();
};