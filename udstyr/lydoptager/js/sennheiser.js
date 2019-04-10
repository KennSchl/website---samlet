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
			start: '2018-10-04',
			end: '2018-10-06' },

		{
			title: 'Udlejet',
			start: '2018-10-11T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-16T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-17',
			end: '2018-10-20' },

		{
			title: 'Udlejet',
			start: '2018-10-18T10:30:00',
			end: '2018-10-14T12:30:00' },

		{
			title: 'Udlejet',
			start: '2019-10-18T12:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-19T14:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-19T17:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-12T20:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-13T07:00:00' }] });

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