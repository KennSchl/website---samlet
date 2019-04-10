$(document).ready(function () {

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay' },

		defaultDate: '2018-10-12',
		navLinks: false, // can click day/week names to navigate views
		editable: false,
		eventLimit: true, // allow "more" link when too many events
		events: [
		{
			title: 'Udlejet',
			start: '2018-10-01' },

		{
			title: 'Udlejet',
			start: '2018-10-03',
			end: '2018-10-10' },

		{
			title: 'Udlejet',
			start: '2018-10-05T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-08T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-15',
			end: '2018-10-13' },

		{
			title: 'Udlejet',
			start: '2018-10-17T10:30:00',
			end: '2018-10-14T12:30:00' },

		{
			title: 'Udlejet',
			start: '2019-10-17T12:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-19T14:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-19T17:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-20T20:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-23T07:00:00' }] });

		/* {
			title: 'Udlejning med link??',
			url: 'https://google.com/',
			start: '2018-10-28' }] }); */
});

$('.date').datepicker({})

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 210) {
        $('.information').addClass('fixed');
    } else {
        $('.information').removeClass('fixed');
    }
});