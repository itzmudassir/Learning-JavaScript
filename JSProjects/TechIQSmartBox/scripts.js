// Include a library like Chart.js by adding it to your HTML or installing via npm/yarn for this to work

document.addEventListener('DOMContentLoaded', function () {
    var ctxDataChart = document.getElementById('dataChart').getContext('2d');
    var ctxStatusChart = document.getElementById('statusChart').getContext('2d');

    var dataChart = new Chart(ctxDataChart, {
        // Chart configuration for data
    });

    var statusChart = new Chart(ctxStatusChart, {
        // Chart configuration for device status
    });
});
