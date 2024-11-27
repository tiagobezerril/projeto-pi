// ------------------- GRAFICOS SENSOR 1 ----------------------------------------

var sensorAnalogico1 = document.getElementById('graficoLinha1').getContext('2d');

var dadosLabel = ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h'];

const configLinha = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Índice de vazamento',
            borderColor: '#464646',
            backgroundColor: '#464646',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // COMENTAR QUANDO FOR CONECTAR NA API
        },
        {
            label: 'Extremo risco',
            borderColor: '#e63535',
            backgroundColor: '#e63535',
            data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // COMENTAR QUANDO FOR CONECTAR NA API
            borderDash: [5, 5], // Configuração para linha pontilhada
            tension: 0.3 // Para suavizar a linha
        }
        ],
        labels: dadosLabel // COMENTAR QUANDO FOR CONECTAR NA API

    },
    options: {
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


/////////////////////MODO MANUTENÇÃO//////////////////////////////////////

var dashboard1 = new Chart(sensorAnalogico1, configLinha);

// VAR CRIADA PARA CONTROLAR O ESTADO DE ATIVIDADE DO SENSOR 
var sensorAtivo = true; // DASHBOARD JÁ ESTÁ ATIVA E CAPTANDO DINAMICAMENTE OS DADOS DO SENSOR(quando botão está modo off OFF)

// PUXANDO Elemento físico do botão manutenção
const manutencaoBtn = document.getElementById('onoff');

// Função para atualizar o gráfico com os dados dinamicos. Função inicialmente criada com Math.Random para simular entrada de dados do sensor
function atualizarDashboard() {
    if (sensorAtivo) {
        console.log("O sensor está captando e plotando dados na dashboard...");
        // Simula chamada à API com fetch ou outro método
        const novosDados = Array.from({ length: 11 }, () => Math.random() * 3);
        dashboard1.data.datasets[0].data = novosDados; // Atualiza dados do primeiro dataset
        dashboard1.update(); // Atualiza o gráfico
    } else {
        console.log("Dashboard pausada, manutenção de cilindro em andamento!");
    }
}

// Evento no botão toggle
manutencaoBtn.addEventListener('change', () => {
    sensorAtivo = !manutencaoBtn.checked; // Quando manutencaoBtn está ON, pausa o dashboard
    console.log(`Dashboard ${sensorAtivo ? "ativada" : "pausada"}`);
});

// Intervalo para simular a atualização periódica
setInterval(atualizarDashboard, 2000); // Atualiza a cada 2 segundos

/// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// CONFIGURAÇÃO DE MEIA LUA 

var vazamentoAtual = document.getElementById("graficoMeia1").getContext('2d');

var valorAtual1 = 0;
var corAtual1 = '#e63535';

if (valorAtual1 > 0) {
    corAtual1 = '#e63535';
} else {
    corAtual1 = '#60CE60';
}

const configVazamentoAtual = {
    type: 'doughnut',
    data: {
        labels: ["Vazamento atual"],
        datasets: [{
            backgroundColor: [corAtual1, 'rgba(0, 0, 0, 0.1)'],
            borderWidth: 0,
            data: [valorAtual1, 45 - valorAtual1]
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
            label: 'Fogão 01',
            data: [1, 0, 3, 2, 4, 1],
            backgroundColor: '#6e65ec',
            borderColor: '#6e65ec'
        },
        {
            label: 'Cilindro 01',
            data: [0, 0, 0, 1, 0, 1],
            backgroundColor: '#36317a',
            borderColor: '#36317a'
        },
        {
            label: 'Total de vazamentos',
            data: [1, 0, 3, 3, 4, 2],
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
            borderColor: '#464646',
            backgroundColor: '#464646',
            data: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] 
        },
        {
            label: 'Extremo risco',
            borderColor: '#e63535',
            backgroundColor: '#e63535',
            data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // COMENTAR QUANDO FOR CONECTAR NA API
            borderDash: [5, 5], // Configuração para linha pontilhada
            tension: 0.3 // Para suavizar a linha
        }
        ],
        labels: dadosLabel

    },
    options: {
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

var grafico = new Chart(linhaCtx2, configLinha2);

/// --------------------------GRAFICO MEIA LUA----------------------------------------------------------

// CONFIGURAÇÃO DE MEIA LUA 

var vazamentoAtual2 = document.getElementById("graficoMeia2").getContext('2d');

var valorAtual2 = 0;
var corAtual2 = '#e63535';

if (valorAtual2 > 0) {
    corAtual2 = '#e63535';
} else {
    corAtual2 = '#60CE60';
}

const configVazamentoAtual2 = {
    type: 'doughnut',
    data: {
        labels: ["Vazamento atual"],
        datasets: [{
            backgroundColor: [corAtual2, 'rgba(0, 0, 0, 0.1)'],
            borderWidth: 0,
            data: [valorAtual2, 45 - valorAtual2]
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

new Chart(document.getElementById('graficoMensal2'), {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Fogão 01',
            data: [1, 0, 3, 2, 4, 1],
            backgroundColor: '#6e65ec',
            borderColor: '#6e65ec'
        },
        {
            label: 'Cilindro 01',
            data: [0, 0, 0, 1, 0, 1],
            backgroundColor: '#36317a',
            borderColor: '#36317a'
        },
        {
            label: 'Total de vazamentos',
            data: [1, 0, 3, 3, 4, 2],
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