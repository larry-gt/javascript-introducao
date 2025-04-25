
function descobrirNome() {
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;

    let escolhaMes = "";
    let escolhaDia = "";

    

    switch (mesEscolhido) {
        case "1":
            escolhaMes = "Capirotos";
            break;

        case "2":
            escolhaMes = "Senhores";

            break;

        case "3":
            escolhaMes = "Ratos";

            break;

        case "4":
            escolhaMes = "Filhos";

            break;

        case "5":
            escolhaMes = "Lobos";

            break;

        case "6":
            escolhaMes = "Mercenarios";

            break;

        case "7":
            escolhaMes = "Exilados";

            break;

        case "8":
            escolhaMes = "Cavaleiros";

            break;

        case "9":
            escolhaMes = "Mensageiros";

            break;

        case "10":
            escolhaMes = "Vermes";

            break;

        case "11":
            escolhaMes = "Escravos";

            break;

        case "12":
            escolhaMes = "Motoqueiros";

            break;
    }

    switch (diaEscolhido) {
        case "1":
            escolhaDia = "De valhalla";

            break;

        case "2":
            escolhaDia = "Do inferno";

            break;

        case "3":
            escolhaDia = "De marte";

            break;

        case "4":
            escolhaDia = "Baratos";

            break;

        case "5":
            escolhaDia = "Da terra media";

            break;

        case "6":
            escolhaDia = "Insensiveis";

            break;

        case "7":
            escolhaDia = "Do apocalipse";

            break;

        case "8":
            escolhaDia = "Da noite";

            break;

        case "9":
            escolhaDia = "Das profundezas";

            break;

        case "10":
            escolhaDia = "Imundos";

            break;

        case "11":
            escolhaDia = "Da estradas";

            break;

        case "12":
            escolhaDia = "Do trovão";

            break;

        case "13":
            escolhaDia = "Da escuridão";

            break;

        case "14":
            escolhaDia = "Do raio";

            break;
        case "15":
            escolhaDia = "Da superação";

            break;
        case "16":
            escolhaDia = "Dos anjos";

            break;
        case "17":
            escolhaDia = "Dos demonios";

            break;
        case "18":
            escolhaDia = "Das chagas";

            break;
        case "19":
            escolhaDia = "Da luz";

            break;
        case "20":
            escolhaDia = "De aço";

            break;
        case "21":
            escolhaDia = "Da vingança";

            break;
        case "22":
            escolhaDia = "Alados";

            break;
        case "23":
            escolhaDia = "From the dark";

            break;
        case "24":
            escolhaDia = "Do lixo";

            break;
        case "25":
            escolhaDia = "Do mordor";

            break;
        case "26":
            escolhaDia = "Do metal";

            break;
        case "27":
            escolhaDia = "Anarquistas";

            break;
        case "28":
            escolhaDia = "Da galaxia";

            break;
        case "29":
            escolhaDia = "Bebados";

            break;
        case "30":
            escolhaDia = "Goticos";

            break;

        case "31":
            escolhaDia = "Do tempo";

            break;


    }

    alert(`O nome da sua banda é ${escolhaMes} ${escolhaDia}`);
}
