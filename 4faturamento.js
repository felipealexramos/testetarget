const faturamentoDiario = [
    1500, 2000, 0, 3000, 2500, 0, 1000, 500, 0, 4000, 3500, 0, 4500, 0, 0, 5000, 0, 6000, 0, 7000, 0, 8000, 0, 9000, 0, 10000, 0, 11000, 0, 12000
];

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    const mediaMensal = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoDiario);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);