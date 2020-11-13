const E_goal = document.querySelector("#one-week");
const config = {
    type: 'pie',
    data: {
        labels: [
            '목표 전력량', '사용 전력량'
        ],
        datasets: [{
            label: '이번주 전력사용량',
            backgroundColor: [
                "rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"
            ],
            fill: false,
            data: [
                Math.floor(Math.random() * (30 - 21) + 21),
                Math.floor(Math.random() * (33 - 20) + 20)
            ]
        }]
    },
    options: {
        
        maintainAspectRatio: false, //부모 테그에 따라  
        title: {
            text: 'Chart.js Time Scale'
        },
        plugins: {
            labels: {
              // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
              render: 'percentage',
      
              // precision for percentage, default is 0
              precision: 0,
      
              // identifies whether or not labels of value 0 are displayed, default is false
              showZero: true,
      
              // font size, default is defaultFontSize
              fontSize: 12,
      
              // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
              fontColor: '#fff',
      
              // font style, default is defaultFontStyle
              fontStyle: 'normal',
      
              // font family, default is defaultFontFamily
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      
              // draw text shadows under labels, default is false
              textShadow: true,
      
              // text shadow intensity, default is 6
              shadowBlur: 10,
      
              // text shadow X offset, default is 3
              shadowOffsetX: 3,
      
              // text shadow Y offset, default is 3
              shadowOffsetY: 3,
      
              // text shadow color, default is 'rgba(0,0,0,0.3)'
              shadowColor: 'rgba(255,0,0,0.75)',
      
              // draw label in arc, default is false
              // bar chart ignores this
              arc: true,
      
              // position to draw label, available value is 'default', 'border' and 'outside'
              // bar chart ignores this
              // default is 'default'
              position: 'default',
      
              // draw label even it's overlap, default is true
              // bar chart ignores this
              overlap: true,
      
              // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
              showActualPercentages: true,
      
              // set images when `render` is 'image'

      
              // add padding when position is `outside`
              // default is 2
              outsidePadding: 4,
      
              // add margin of text when position is `outside` or `border`
              // default is 2
              textMargin: 2
            }
        },
        scales: {
            xAxes: [{
                ticks:{
                    display: false,
                },
                gridLines:{
                    display: false,
                    drawBorder: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: '차트',
                }
            }],
            yAxes: [{
                ticks:{
                    display: false,
                    beginAtZero:false,
                },
                gridLines:{
                    display: false,
                    drawBorder: false,
                },
                scaleLabel: {
                    display: false,
                }
            }]
        },
    }
}

let E_gaolChart = new Chart(E_goal, config);