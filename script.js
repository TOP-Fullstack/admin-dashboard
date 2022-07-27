const labels = [
    'January',
    'February',
    'March',
    'Attack',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Stats',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 0, 132)', 'rgb(0, 99, 132)'],
        data: [54, 100, 24, 30]
    }]
};

const config = {
    type: 'polarArea',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);