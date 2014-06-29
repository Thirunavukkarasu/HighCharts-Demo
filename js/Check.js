		
		/* The ready event occurs when the DOM (document object model) has been loaded */
		$(document).ready(function() {
		drawChart1();
		drawChart2();
		drawChart3();
		drawChart4();
		drawChart5();
		drawChart6();
		});
		
		function drawChart1()
		{
			var options = {chart: {renderTo: 'container1',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-1'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart1.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}
		
		function drawChart2()
		{
			var options = {chart: {renderTo: 'container2',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-2'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart2.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}

		function drawChart3()
		{
			var options = {chart: {renderTo: 'container3',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-3'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart3.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}
		
		
		function drawChart4()
		{
			var options = {chart: {renderTo: 'container4',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-4'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart4.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}
		
		function drawChart5()
		{
			var options = {chart: {renderTo: 'container5',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-5'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart5.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}
		
		function drawChart6()
		{
			var options = {chart: {renderTo: 'container6',type: 'area'},credits: {enabled: false},series: [{      }],title:{text:'Backlog-Trend-6'},xAxis:{title:{text:'Hour'}}};
			$.getJSON('json/Chart6.json',function(data) {
					options.series = data;
					var chart = new Highcharts.Chart(options);
					});
		}
		
		