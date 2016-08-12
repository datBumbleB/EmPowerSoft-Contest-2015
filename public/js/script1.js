$(document).ready(function() {
$('#fullpage').fullpage({
menu: '#menu',
anchors: ['Home', 'Portfolio', 'Store', 'Services', 'About', 'Contact'],
sectionsColor: ['#4A6FB1', '#939FAA', '#323539', '#939FAA', '#939FAA', '#939FAA'],
scrollOverflow: true,
navigation: true,
navigationPosition: 'right',
navigationTooltips: ['Home', 'Portfolio', 'Store', 'Services', 'About', 'Contact'],
responsive: 900
});
});