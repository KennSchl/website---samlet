$(document).ready(function () {

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay' },

		defaultDate: '2019-04-12',
		navLinks: false, // can click day/week names to navigate views
		editable: false,
		eventLimit: true, // allow "more" link when too many events
		events: [
		{
			title: 'Udlejet',
			start: '2019-04-01' },

		{
			title: 'Udlejet',
			start: '2019-04-03',
			end: '2019-04-10' },

		{
			title: 'Udlejet',
			start: '2019-04-05T16:00:00' },

		{
			title: 'Udlejet',
			start: '2019-04-08T16:00:00' },

		{
			title: 'Udlejet',
			start: '2019-04-15',
			end: '201904-13' },

		{
			title: 'Udlejet',
			start: '2019-04-17T10:30:00',
			end: '2019-04-14T12:30:00' },

		{
			title: 'Udlejet',
			start: '2019-04-17T12:00:00' },

		{
			title: 'Udlejet',
			start: '2019-04-19T14:30:00' },

		{
			title: 'Udlejet',
			start: '2019-04-19T17:30:00' },

		{
			title: 'Udlejet',
			start: '2019-04-20T20:00:00' },

		{
			title: 'Udlejet',
			start: '2019-04-23T07:00:00' }] });

		/* {
			title: 'Udlejning med link??',
			url: 'https://google.com/',
			start: '2019-04-08' }] }); */
});

$('.date').datepicker({})

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 210) {
        $('.information').addClass('fixed');
    } else {
        $('.information').removeClass('fixed');
    }
});
