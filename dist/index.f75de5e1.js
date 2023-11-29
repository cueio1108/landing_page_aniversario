AOS.init();
const dataDaFesta = new Date("Aug 11, 2023 18:00:00");
const timeStampFesta = dataDaFesta.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteAFesta = timeStampFesta - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteAFesta = Math.floor(distanciaAteAFesta / diaEmMs);
    const horasAteAFesta = Math.floor(distanciaAteAFesta % diaEmMs / horaEmMs);
    const minutossAteAFesta = Math.floor(distanciaAteAFesta % horaEmMs / minutoEmMs);
    const segundosAteAFesta = Math.floor(distanciaAteAFesta % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `começa em ${diasAteAFesta}d ${horasAteAFesta}h ${minutossAteAFesta}min ${segundosAteAFesta}s`;
    document.getElementById("button").innerHTML = `Confirme sua presença`;
    if (distanciaAteAFesta < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "j\xe1 terminou!";
        document.getElementById("button").innerHTML = "A festa j\xe1 terminou";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
