const mainChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Nitrogen',
        data: [40, 60, 80, 50, 70, 90, 100, 120, 140, 160, 180, 200],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'Phosphorus',
        data: [10,40,60,70,50,30,20,40,60,80,70,120],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
    }, {
        label: 'Potassium',
        data: [30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
    }]
};

const mainChartConfig = {
    type: 'line',
    data: mainChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const mainChart = new Chart(
    document.getElementById('mainChartCanvas').getContext('2d'),
    mainChartConfig
);


// Scripts for smaller charts

const moistureChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Moisture Levels',
        data: [30, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95],
        fill: false,
        borderColor: 'orange',
        tension: 0.3
    }]
};

const moistureChartConfig = {
    type: 'line',
    data: moistureChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
};

const soilTemperatureChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Soil Temperature',
        data: [5, 10, 15, 20, 18, 25, 23, 22, 30, 28, 25, 20],
        fill: false,
        borderColor: 'blue',
        tension: 0.3
    }]
};

const soilTemperatureChartConfig = {
    type: 'line',
    data: soilTemperatureChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 35
            }
        }
    }
};

const pHChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'pH Values',
        data: [6, 6.3, 6.6, 6.8, 7.0, 7.2, 7.3, 7.1, 7.0, 6.8, 6.5, 6.2],
        fill: false,
        borderColor: 'green',
        tension: 0.3
    }]
};

const pHChartConfig = {
    type: 'line',
    data: pHChartData,
    options: {
        scales: {
            y: {
                beginAtZero: false,
                min: 5,
                max: 8
            }
        }
    }
};

// Initialize all charts
const moistureChart = new Chart(document.getElementById('moistureChartCanvas').getContext('2d'), moistureChartConfig);
const soilTemperatureChart = new Chart(document.getElementById('temperatureChartCanvas').getContext('2d'), soilTemperatureChartConfig);
const pHChart = new Chart(document.getElementById('phChartCanvas').getContext('2d'), pHChartConfig);
