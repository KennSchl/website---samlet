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
			start: '2018-10-02' },

		{
			title: 'Udlejet',
			start: '2018-10-04',
			end: '2018-10-07' },

		{
			title: 'Udlejet',
			start: '2018-10-10T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-12T16:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-14',
			end: '2018-10-16' },

		{
			title: 'Udlejet',
			start: '2018-10-17T10:30:00',
			end: '2018-10-12T12:30:00' },

		{
			title: 'Udlejet',
			start: '2019-10-18T12:00:00' },

		{
			title: 'Udlejet',
			start: '2018-10-18T14:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-12T18:30:00' },

		{
			title: 'Udlejet',
			start: '2018-10-12T18:00:00' },

		{
			title: 'Udlejet',
			start: '2018-11-13T19:00:00' }] });

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