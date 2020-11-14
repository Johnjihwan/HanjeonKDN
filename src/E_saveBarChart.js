const ctx_bar1 = document.getElementById('one-week-bar');
const ctx_bar2 = document.getElementById('two-week-bar');
const ctx_bar3 = document.getElementById('three-week-bar');
const ctx_bar4 = document.getElementById('four-week-bar');
//처음 보여줄 차트
let dayChart1 = new Chart(ctx_bar1, {
	type: 'bar',
	data: {
		labels: [ // Date Objects
			'data1',
			'data2',
			'data3',
			'data4',
			'data5',
			'data6',
			'data7'
		],
		datasets: [{
			label: '오전',
			backgroundColor: 'rgba(75, 192, 192, 1)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
			]
		},
		{
			label: '오후',
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
			]
		}]
	},
	options: {
		maintainAspectRatio: false,
		title: {
			text: 'Chart.js Time Scale'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: '차트'
				}
			}]
		},
	}
});
let dayChart2 = new Chart(ctx_bar2, {
	type: 'bar',
	data: {
		labels: [ // Date Objects
			'data1',
			'data2',
			'data3',
			'data4',
			'data5',
			'data6',
			'data7'
		],
		datasets: [{
			label: '오전',
			backgroundColor: 'rgba(75, 192, 192, 1)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
			]
		},
		{
			label: '오후',
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
			]
		}]
	},
	options: {
		maintainAspectRatio: false,
		title: {
			text: 'Chart.js Time Scale'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: '차트'
				}
			}]
		},
	}
});
let dayChart3 = new Chart(ctx_bar3, {
	type: 'bar',
	data: {
		labels: [ // Date Objects
			'data1',
			'data2',
			'data3',
			'data4',
			'data5',
			'data6',
			'data7'
		],
		datasets: [{
			label: '오전',
			backgroundColor: 'rgba(75, 192, 192, 1)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
			]
		},
		{
			label: '오후',
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
			]
		}]
	},
	options: {
		maintainAspectRatio: false,
		title: {
			text: 'Chart.js Time Scale'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: '차트'
				}
			}]
		},
	}
});
let dayChart4 = new Chart(ctx_bar4, {
	type: 'bar',
	data: {
		labels: [ // Date Objects
			'data1',
			'data2',
			'data3',
			'data4',
			'data5',
			'data6',
			'data7'
		],
		datasets: [{
			label: '오전',
			backgroundColor: 'rgba(75, 192, 192, 1)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
			]
		},
		{
			label: '오후',
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
			]
		}]
	},
	options: {
		maintainAspectRatio: false,
		title: {
			text: 'Chart.js Time Scale'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: '차트'
				}
			}]
		},
	}
});
let dayChart5 = new Chart(ctx_bar5, {
	type: 'bar',
	data: {
		labels: [ // Date Objects
			'data1',
			'data2',
			'data3',
			'data4',
			'data5',
			'data6',
			'data7'
		],
		datasets: [{
			label: '오전',
			backgroundColor: 'rgba(75, 192, 192, 1)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
                Math.floor(Math.random() * (30 - 10) + 10),
			]
		},
		{
			label: '오후',
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false,
			data: [
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
                Math.floor(Math.random() * (30 - 15) + 15),
			]
		}]
	},
	options: {
		maintainAspectRatio: false,
		title: {
			text: 'Chart.js Time Scale'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: '차트'
				}
			}]
		},
	}
});