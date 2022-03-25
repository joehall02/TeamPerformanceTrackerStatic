// 1st bar chart on compare teams page
var mydata1 = [20, 15, 55, 60, 100]; // data shown in chart
var ctx1 = document.getElementById('myBarChart1').getContext('2d'); // selects the chart
var myChart1 = new Chart(ctx1, { // creates new chart variable on chart selected
    type: 'bar', // declare type of chart
    data: {
        labels: ['Total Profit', 'Monthly Profit', 'Team Performance', 'Member Performance'], // labels shown on chart
        datasets: [{
            label: 'Overview',
            data: mydata1,
            backgroundColor: [
                'rgba(186, 217, 98, 0.2)', // green
                'rgba(255, 159, 64, 0.2)', // orange
                'rgba(75, 192, 192, 0.2)', // blue
                'rgba(255, 99, 132, 0.2)' // pink
            ],
            borderColor: [
                'rgba(186, 217, 98)', // green
                'rgba(255, 159, 64)', // orange
                'rgba(75, 192, 192)', // blue
                'rgba(255, 99, 132)' // pink
            ],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true, 
                  suggestedMax: 30
              }
          }]
      },
      plugins: {
          datalabels: {
            display: true,
            anchor: 'end',
            align: 'top',
            offset: 5
          }
      }        
    }
});

// 2nd bar chart on compare teams page
var mydata2 = [21, 90, 51, 17, 100]; // data shown in chart
var ctx2 = document.getElementById('myBarChart2').getContext('2d'); // selects the chart
var myChart2 = new Chart(ctx2, { // creates new chart variable on chart selected
    type: 'bar', // declare type of chart
    data: {
        labels: ['Total Profit', 'Monthly Profit', 'Team Performance', 'Member Performance'], // labels shown on chart
        datasets: [{
            label: 'Overview',
            data: mydata2,
            backgroundColor: [
                'rgba(186, 217, 98, 0.2)', // green
                'rgba(255, 159, 64, 0.2)', // orange
                'rgba(75, 192, 192, 0.2)', // blue
                'rgba(255, 99, 132, 0.2)' // pink
            ],
            borderColor: [
                'rgba(186, 217, 98)', // green
                'rgba(255, 159, 64)', // orange
                'rgba(75, 192, 192)', // blue
                'rgba(255, 99, 132)' // pink
            ],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true, 
                  suggestedMax: 30
              }
          }]
      },
      plugins: {
          datalabels: {
            display: true,
            anchor: 'end',
            align: 'top',
            offset: 5
          }
      }        
    }
});