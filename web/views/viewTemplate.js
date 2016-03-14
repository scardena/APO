extends layout
block content
	// Content Header (Page header)
	section.content-header
		h1
			| ALMA Monitoring
			small General
		ol.breadcrumb
			li
				a(href='#')
					i.fa.fa-dashboard
					| Template Dashboard
			li.active Dashboard
	// Main content
	section.content
		.row
			h1 New dashboard created!


block javascript
	// add new calendar event modal
	// jQuery 2.0.2
	script(src='/js/libs/jquery.min.js')
	// jQuery UI 1.10.3
	script(src='/js/jquery-ui-1.10.3.min.js', type='text/javascript')
	// Bootstrap
	script(src='/js/bootstrap.min.js', type='text/javascript')
	// Morris.js charts
	script(src='/js/libs/raphael-min.js')
	script(src='/js/plugins/morris/morris.min.js', type='text/javascript')
	// Sparkline
	script(src='/js/plugins/sparkline/jquery.sparkline.min.js', type='text/javascript')
	// jvectormap
	script(src='/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js', type='text/javascript')
	script(src='/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js', type='text/javascript')
	// fullCalendar
	script(src='/js/plugins/fullcalendar/fullcalendar.min.js', type='text/javascript')
	// jQuery Knob Chart
	script(src='/js/plugins/jqueryKnob/jquery.knob.js', type='text/javascript')
	// fusionmaps
	script(src='/js/plugins/fusioncharts/fusioncharts.js',type='text/javascript')
	script(src='/js/plugins/fusioncharts/fusioncharts.maps.js',type='text/javascript')
	script(src='/js/plugins/fusioncharts/themes/fusioncharts.theme.fint.js',type='text/javascript')




	// Bootstrap WYSIHTML5
	script(src='/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js', type='text/javascript')
	// iCheck
	script(src='/js/plugins/iCheck/icheck.min.js', type='text/javascript')
	// AdminLTE App
	script(src='/js/AdminLTE/app.js', type='text/javascript')
	// AdminLTE dashboard demo (This is only for demo purposes)
	script(src='/js/AdminLTE/dashboard.js', type='text/javascript')
	// AdminLTE for demo purposes
	script(src='/js/AdminLTE/demo.js', type='text/javascript')

	script.

		console.log("This is a APOTEST - Template")	
