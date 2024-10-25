// ------------------- GRAFICOS SENSOR 1 ----------------------------------------

var sensorAnalogico = document.getElementById('graficoLinha1').getContext('2d');

sensorAnalogico.width = '800px';
sensorAnalogico.height = '800px';

var dadosLabel = ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h'];

const configLinha = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Índice de vazamento',
            borderColor: '#e63535',
            backgroundColor: '#e63535',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3] // COMENTAR QUANDO FOR CONECTAR NA API
        }],
        labels: dadosLabel // COMENTAR QUANDO FOR CONECTAR NA API

    },
    options: {
        // responsive: true, // Torna o gráfico responsivo
        // maintainAspectRatio: false,
        responsive: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: '(%)'
                },
                beginAtZero: true,
            },
        },

    }
}

var grafico = new Chart(sensorAnalogico, configLinha);

/// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// CONFIGURAÇÃO DE MEIA LUA 

var vazamentoAtual = document.getElementById("graficoMeia1").getContext('2d');

var valorVazamento = 4;

const configVazamentoAtual = {
    type: 'doughnut',
    data: {
        labels: ["Vazamento atual"],
        datasets: [{
            backgroundColor: ['#e63535', 'rgba(0, 0, 0, 0.1)'],
            borderWidth: 0,
            data: [valorVazamento, 45 - valorVazamento]
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 85,
        rotation: -90,
        circumference: 180,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        },
        animation: {
            animateRotate: true,
            animateScale: false
        },
        title: {
            display: true,
            text: "Vazamento atual",
            fontSize: 16
        }
    }
}
 new Chart(vazamentoAtual, configVazamentoAtual);

// ---------------- GRAFICO MENSAL --------------------

const mesCtx = document.getElementById('graficoMensal1');

new Chart(mesCtx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Sensor 1',
            data: [2, 0, 0, 2, 4, 4],
            backgroundColor: '#6e65ec',
            borderColor: '#6e65ec'
        },
        {
            label: 'Sensor 2',
            data: [0, 1, 0, 1, 0, 1],
            backgroundColor: '#36317a',
            borderColor: '#36317a'
        },
        {
            label: 'Sensor 3',
            data: [1, 0, 2, 0, 0, 1],
            backgroundColor: '#5b5baa',
            borderColor: '#5b5baa'
        },
        {
            label: 'Total de vazamentos',
            data: [3, 1, 2, 3, 4, 6],
            backgroundColor: '#939399',
            borderColor: '#939399'
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});    


// ------------------- GRAFICOS SENSOR 2 ----------------------------------------

var linhaCtx2 = document.getElementById('graficoLinha2').getContext('2d');

var dadosLabel = ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h'];

const configLinha2 = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Índice de vazamento',
            borderColor: '#60CE60',
            backgroundColor: '#60CE60',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
        }],
        labels: dadosLabel

    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: '(%)'
                },
                beginAtZero: true,
            },
        },

    }
}

var grafico = new Chart(linhaCtx2, configLinha2);

/// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// CONFIGURAÇÃO DE MEIA LUA 

var vazamentoAtual2 = document.getElementById("graficoMeia2").getContext('2d');

var valorVazamento = 0;

const configVazamentoAtual2 = {
    type: 'doughnut',
    data: {
        labels: ["Vazamento atual"],
        datasets: [{
            backgroundColor: ['#60CE60', 'rgba(0, 0, 0, 0.1)'],
            borderWidth: 0,
            data: [valorVazamento, 45 - valorVazamento]
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 85,
        rotation: -90,
        circumference: 180,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        },
        animation: {
            animateRotate: true,
            animateScale: false
        },
        title: {
            display: true,
            text: "Vazamento atual",
            fontSize: 16
        }
    }
}
 new Chart(vazamentoAtual2, configVazamentoAtual2);

// ---------------- GRAFICO MENSAL --------------------

const mes2Ctx = document.getElementById('graficoMensal2');

new Chart(document.getElementById('graficoMensal2'), {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Sensor 1',
            data: [2, 0, 0, 2, 4, 4],
            backgroundColor: '#6e65ec',
            borderColor: '#6e65ec'
        },
        {
            label: 'Sensor 2',
            data: [0, 1, 0, 1, 0, 1],
            backgroundColor: '#36317a',
            borderColor: '#36317a'
        },
        {
            label: 'Sensor 3',
            data: [1, 0, 2, 0, 0, 1],
            backgroundColor: '#5b5baa',
            borderColor: '#5b5baa'
        },
        {
            label: 'Total de vazamentos',
            data: [3, 1, 2, 3, 4, 6],
            backgroundColor: '#939399',
            borderColor: '#939399'
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});  

// ----------------------- GRAFICOS SENSOR 3 -----------------------

var linhaCtx3 = document.getElementById('graficoLinha3').getContext('2d');

const configLinha3 = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Índice de vazamento',
            borderColor: '#60CE60',
            backgroundColor: '#60CE60',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
        }],
        labels: dadosLabel

    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: '(%)'
                },
                beginAtZero: true,
            },
        },

    }
}

var grafico = new Chart(linhaCtx3, configLinha3);

/// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// CONFIGURAÇÃO DE MEIA LUA 

var vazamentoAtual3 = document.getElementById("graficoMeia3").getContext('2d');

var valorVazamento3 = 0;

const configVazamentoAtual3 = {
    type: 'doughnut',
    data: {
        labels: ["Vazamento atual"],
        datasets: [{
            backgroundColor: ['#60CE60', 'rgba(0, 0, 0, 0.1)'],
            borderWidth: 0,
            data: [valorVazamento3, 45 - valorVazamento3]
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 85,
        rotation: -90,
        circumference: 180,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        },
        animation: {
            animateRotate: true,
            animateScale: false
        },
        title: {
            display: true,
            text: "Vazamento atual",
            fontSize: 16
        }
    }
}
 new Chart(vazamentoAtual3, configVazamentoAtual3);

// ---------------- GRAFICO MENSAL --------------------

const mes3Ctx = document.getElementById('graficoMensal2');

new Chart(document.getElementById('graficoMensal3'), {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Sensor 1',
            data: [2, 0, 0, 2, 4, 4],
            backgroundColor: '#6e65ec',
            borderColor: '#6e65ec'
        },
        {
            label: 'Sensor 2',
            data: [0, 1, 0, 1, 0, 1],
            backgroundColor: '#36317a',
            borderColor: '#36317a'
        },
        {
            label: 'Sensor 3',
            data: [1, 0, 2, 0, 0, 1],
            backgroundColor: '#5b5baa',
            borderColor: '#5b5baa'
        },
        {
            label: 'Total de vazamentos',
            data: [3, 1, 2, 3, 4, 6],
            backgroundColor: '#939399',
            borderColor: '#939399'
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});