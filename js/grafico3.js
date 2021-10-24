    // Inicia uma variável do tipo constante (não pode ser reatribuida)
    const config3 = {
        type: "doughnut", // tipo do gráfico
        data: { // objeto que vai conter os dados do gráfico
            labels: ["Brasil (Total)", "Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"], // labels (rótulos) que serão identificados os nossos dados 
            datasets: [ // datasets (conjunto de dados)
                {
                    label: "Porcentagem de desempregados", // irá conter o rótulo principal do nosso gráfico
                    data: [11, 10.6, 13.6, 11.4, 6.8, 9.3], // os dados referentes aqueles rótulos
                    backgroundColor: [
                        'rgb(153,204,50)',
                        'rgb(255,255,0)',
                        'rgb(255,0,0)',
                        'rgb(255,255,255)',
                        'rgb(95,159,159)',
                        'rgb(77,77,255)'
                    ], // cor das "bolinhas" do gráfico

                }
            ]
        },
        options: {
            maintainAspectRatio: false
                /* maintainAspectRatio (manter relação de aspecto) 
                  caso true: ele "obdece" a altura e largura que colocamos
                  caso false: ele não "obdece" a altura e largura que colocamos e se ajusta ao componente pai
                */
        }
    }

    var myChartLine = new Chart(document.getElementById("myChart3"), config3);
    /* aqui obrigatoriamente tem que colocar new Chart() para criar um novo chart 
    e passar dentro dos (parênteses) o elemento canvas que você quer mandar e 
    separado pela virgula o que você quer mandar, no nosso caso a config que fizemos 
    */