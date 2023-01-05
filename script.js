function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.lenght == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - fano.value;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/foto-bebe-m.png");
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "imagens/foto-jovem-m.png");
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute("src", "imagens/foto-adulto-m.png");
            } else {
                img.setAttribute("src", "imagens/foto-idoso-m.png");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/foto-bebe-f.png");
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "imagens/foto-jovem-f.png");
            } else if (idade < 50) {
                img.setAttribute("src", "imagens/foto-adulto-f.png");
            } else {
                img.setAttribute("src", "imagens/foto-idoso-f.png");
            }
        }
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos.";
        res.appendChild(img);
    }
}
