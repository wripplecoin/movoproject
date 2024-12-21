

// Tokenomics Chart
const ctx1 = document.getElementById('tokenomicsChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: [
            'Private Sale',
            'Public Sale (Presale)',
            'Ecosystem Development',
            'Team and Advisors',
            'Liquidity Provision',
            'Community Incentives',
            'Reserve Fund'
        ],
        datasets: [{
            data: [10, 15, 25, 20, 15, 10, 5],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#E7E9ED'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    }
});

// Token Unlock Area Chart
const ctx2 = document.getElementById('tokenUnlockChart').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: Array.from({ length: 49 }, (_, i) => {
            const date = new Date(2025, i, 1);
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        }),
        datasets: [
            {
                label: 'Private Sale',
                data: Array.from({ length: 49 }, (_, i) => (i <= 12 ? 10 * i / 12 : 10)),
                borderColor: '#FF6384',
                fill: true,
            },
            {
                label: 'Public Sale (Presale)',
                data: Array.from({ length: 49 }, (_, i) => (i <= 6 ? 15 * i / 6 : 15)),
                borderColor: '#36A2EB',
                fill: true,
            },
            {
                label: 'Ecosystem Development',
                data: Array.from({ length: 49 }, (_, i) => (i <= 36 ? 25 * i / 36 : 25)),
                borderColor: '#FFCE56',
                fill: true,
            },
            {
                label: 'Team and Advisors',
                data: Array.from({ length: 49 }, (_, i) => (i <= 12 ? 0 : (i <= 48 ? 20 * (i - 12) / 36 : 20))),
                borderColor: '#4BC0C0',
                fill: true,
            },
            {
                label: 'Community Incentives',
                data: Array.from({ length: 49 }, (_, i) => (i <= 12 ? 10 * i / 12 : 10)),
                borderColor: '#FF9F40',
                fill: true,
            },
            {
                label: 'Reserve Fund',
                data: Array.from({ length: 49 }, (_, i) => (i <= 24 ? 0 : (i <= 48 ? 5 * (i - 24) / 48 : 5))),
                borderColor: '#E7E9ED',
                fill: true,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Percentage of Total Supply'
                }
            }
        }
    }
});

const ctx = document.getElementById('tokenAllocationChart').getContext('2d');
const tokenAllocationChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Private Sale',
      'Public Sale (Presale)',
      'Ecosystem Development',
      'Team and Advisors',
      'Liquidity Provision',
      'Community Incentives',
      'Reserve Fund'
    ],
    datasets: [{
      data: [10, 15, 25, 20, 15, 10, 5],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FFCD56'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  }
});