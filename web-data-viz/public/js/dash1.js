
window.onload = function() {
    puxarBanco(); // Chama a função ao carregar a página
};

function puxarBanco(idSensor) {    
    const ctxTotal = document.getElementById('graficoLinha1').getContext('2d');
    const chartTotal = new Chart(ctxTotal, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue'],
            datasets: [{
                label: 'Porcentagem',
                data: [12, 13],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            }]
        },
    });

    fetch(`/ultimo/${idSensor}`)
        .then(response => response.json())
        .then(resultado => {
            console.log("Dados recebidos do servidor:", resultado);
            resultado.forEach((item) => {
                chartTotal.data.labels.push(item.dtColeta);
                chartTotal.data.datasets[0].data.push(item.porcentagem);
            });
            chartTotal.update();
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        });
}