// ------------------- GRAFICOS SENSOR 1 ----------------------------------------

const publicacoes = [

];
window.onload = function() {
    puxarBanco(); // Chama a função ao carregar a página
};

function puxarBanco(idSensor) {
    
    const ctxTotal = document.getElementById('chartTotal').getContext('2d');
    const chartTotal = new Chart(ctxTotal, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Porcentagem',
                data: [],
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
// var sensorAnalogico1 = document.getElementById('graficoLinha1').getContext('2d');

// var dadosLabel = ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h'];

// const configLinha = {
//     type: 'line',
//     data: {
//         datasets: [{
//             label: 'Índice de vazamento',
//             borderColor: '#464646',
//             backgroundColor: '#464646',
//             data: [] // COMENTAR QUANDO FOR CONECTAR NA API
//         },
//         {
//             label: 'Extremo risco',
//             borderColor: '#e63535',
//             backgroundColor: '#e63535',
//             data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // COMENTAR QUANDO FOR CONECTAR NA API
//             borderDash: [5, 5], // Configuração para linha pontilhada
//             tension: 0.3 // Para suavizar a linha
//         }
//         ],
//         labels: dadosLabel // COMENTAR QUANDO FOR CONECTAR NA API

//     },
//     options: {
//         responsive: false,
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: '(%)'
//                 },
//                 beginAtZero: true,
//             },
//         },

//     }
// }

// var grafico1 = new Chart(sensorAnalogico1, configLinha);

// /// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// // CONFIGURAÇÃO DE MEIA LUA 

// var vazamentoAtual = document.getElementById("graficoMeia1").getContext('2d');

// var valorAtual1 = 3;
// var corAtual1 = '#e63535';

// if (valorAtual1 > 0) {
//     corAtual1 = '#e63535';
// } else {
//     corAtual1 = '#60CE60';
// }

// const configVazamentoAtual = {
//     type: 'doughnut',
//     data: {
//         labels: ["Vazamento atual"],
//         datasets: [{
//             backgroundColor: [corAtual1, 'rgba(0, 0, 0, 0.1)'],
//             borderWidth: 0,
//             data: [valorAtual1, 45 - valorAtual1]
//         }]
//     },
//     options: {
//         responsive: true,
//         cutoutPercentage: 85,
//         rotation: -90,
//         circumference: 180,
//         tooltips: {
//             enabled: false
//         },
//         legend: {
//             display: false
//         },
//         animation: {
//             animateRotate: true,
//             animateScale: false
//         },
//         title: {
//             display: true,
//             text: "Vazamento atual",
//             fontSize: 16
//         }
//     }
// }
//  new Chart(vazamentoAtual, configVazamentoAtual);

// // ---------------- GRAFICO MENSAL --------------------

// const mesCtx = document.getElementById('graficoMensal1');

// new Chart(mesCtx, {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
//         datasets: [{
//             label: 'Fogão 01',
//             data: [2, 0, 0, 2, 4, 4],
//             backgroundColor: '#6e65ec',
//             borderColor: '#6e65ec'
//         },
//         {
//             label: 'Forno 01',
//             data: [0, 1, 0, 1, 0, 1],
//             backgroundColor: '#36317a',
//             borderColor: '#36317a'
//         },
//         {
//             label: 'Fogão 02',
//             data: [1, 0, 2, 0, 0, 1],
//             backgroundColor: '#5b5baa',
//             borderColor: '#5b5baa'
//         },
//         {
//             label: 'Total de vazamentos',
//             data: [3, 1, 2, 3, 4, 6],
//             backgroundColor: '#939399',
//             borderColor: '#939399'
//         }
//         ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });    


// // ------------------- GRAFICOS SENSOR 2 ----------------------------------------

// var linhaCtx2 = document.getElementById('graficoLinha2').getContext('2d');

// var dadosLabel = ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h'];

// const configLinha2 = {
//     type: 'line',
//     data: {
//         datasets: [{
//             label: 'Índice de vazamento',
//             borderColor: '#60CE60',
//             backgroundColor: '#60CE60',
//             data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
//         },
//         {
//             label: 'Extremo risco',
//             borderColor: '#e63535',
//             backgroundColor: '#e63535',
//             data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // COMENTAR QUANDO FOR CONECTAR NA API
//             borderDash: [5, 5], // Configuração para linha pontilhada
//             tension: 0.3 // Para suavizar a linha
//         }
//         ],
//         labels: dadosLabel

//     },
//     options: {
//         responsive: false,
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: '(%)'
//                 },
//                 beginAtZero: true,
//             },
//         },

//     }
// }

// var grafico = new Chart(linhaCtx2, configLinha2);

// /// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// // CONFIGURAÇÃO DE MEIA LUA 

// var vazamentoAtual2 = document.getElementById("graficoMeia2").getContext('2d');

// var valorAtual2 = 0;
// var corAtual2 = '#e63535';

// if (valorAtual2 > 0) {
//     corAtual2 = '#e63535';
// } else {
//     corAtual2 = '#60CE60';
// }

// const configVazamentoAtual2 = {
//     type: 'doughnut',
//     data: {
//         labels: ["Vazamento atual"],
//         datasets: [{
//             backgroundColor: [corAtual2, 'rgba(0, 0, 0, 0.1)'],
//             borderWidth: 0,
//             data: [valorAtual2, 45 - valorAtual2]
//         }]
//     },
//     options: {
//         responsive: true,
//         cutoutPercentage: 85,
//         rotation: -90,
//         circumference: 180,
//         tooltips: {
//             enabled: false
//         },
//         legend: {
//             display: false
//         },
//         animation: {
//             animateRotate: true,
//             animateScale: false
//         },
//         title: {
//             display: true,
//             text: "Vazamento atual",
//             fontSize: 16
//         }
//     }
// }
//  new Chart(vazamentoAtual2, configVazamentoAtual2);

// // ---------------- GRAFICO MENSAL --------------------

// const mes2Ctx = document.getElementById('graficoMensal2');

// new Chart(document.getElementById('graficoMensal2'), {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
//         datasets: [{
//             label: 'Fogão 01',
//             data: [2, 0, 0, 2, 4, 4],
//             backgroundColor: '#6e65ec',
//             borderColor: '#6e65ec'
//         },
//         {
//             label: 'Forno 01',
//             data: [0, 1, 0, 1, 0, 1],
//             backgroundColor: '#36317a',
//             borderColor: '#36317a'
//         },
//         {
//             label: 'Fogão 02',
//             data: [1, 0, 2, 0, 0, 1],
//             backgroundColor: '#5b5baa',
//             borderColor: '#5b5baa'
//         },
//         {
//             label: 'Total de vazamentos',
//             data: [3, 1, 2, 3, 4, 6],
//             backgroundColor: '#939399',
//             borderColor: '#939399'
//         }
//         ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });  

// // ----------------------- GRAFICOS SENSOR 3 -----------------------

// var linhaCtx3 = document.getElementById('graficoLinha3').getContext('2d');

// const configLinha3 = {
//     type: 'line',
//     data: {
//         datasets: [{
//             label: 'Índice de vazamento',
//             borderColor: '#60CE60',
//             backgroundColor: '#60CE60',
//             data: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] 
//         },
//         {
//             label: 'Extremo risco',
//             borderColor: '#e63535',
//             backgroundColor: '#e63535',
//             data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // COMENTAR QUANDO FOR CONECTAR NA API
//             borderDash: [5, 5], // Configuração para linha pontilhada
//             tension: 0.3 // Para suavizar a linha
//         }
//         ],
//         labels: dadosLabel

//     },
//     options: {
//         responsive: false,
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: '(%)'
//                 },
//                 beginAtZero: true,
//             },
//         },

//     }
// }

// var grafico = new Chart(linhaCtx3, configLinha3);

// /// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// // CONFIGURAÇÃO DE MEIA LUA 

// var vazamentoAtual3 = document.getElementById("graficoMeia3").getContext('2d');

// var valorAtual3 = 0;
// var corAtual3 = '#e63535';

// if (valorAtual3 > 0) {
//     corAtual3 = '#e63535';
// } else {
//     corAtual3 = '#60CE60';
// }

// const configVazamentoAtual3 = {
//     type: 'doughnut',
//     data: {
//         labels: ["Vazamento atual"],
//         datasets: [{
//             backgroundColor: [corAtual3, 'rgba(0, 0, 0, 0.1)'],
//             borderWidth: 0,
//             data: [valorAtual3, 45 - valorAtual3]
//         }]
//     },
//     options: {
//         responsive: true,
//         cutoutPercentage: 85,
//         rotation: -90,
//         circumference: 180,
//         tooltips: {
//             enabled: false
//         },
//         legend: {
//             display: false
//         },
//         animation: {
//             animateRotate: true,
//             animateScale: false
//         },
//         title: {
//             display: true,
//             text: "Vazamento atual",
//             fontSize: 16
//         }
//     }
// }
//  new Chart(vazamentoAtual3, configVazamentoAtual3);

// // ---------------- GRAFICO MENSAL --------------------

// const mes3Ctx = document.getElementById('graficoMensal2');

// new Chart(document.getElementById('graficoMensal3'), {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
//         datasets: [{
//             label: 'Fogão 01',
//             data: [2, 0, 0, 2, 4, 4],
//             backgroundColor: '#6e65ec',
//             borderColor: '#6e65ec'
//         },
//         {
//             label: 'Forno 01',
//             data: [0, 1, 0, 1, 0, 1],
//             backgroundColor: '#36317a',
//             borderColor: '#36317a'
//         },
//         {
//             label: 'Fogão 02',
//             data: [1, 0, 2, 0, 0, 1],
//             backgroundColor: '#5b5baa',
//             borderColor: '#5b5baa'
//         },
//         {
//             label: 'Total de vazamentos',
//             data: [3, 1, 2, 3, 4, 6],
//             backgroundColor: '#939399',
//             borderColor: '#939399'
//         }
//         ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });