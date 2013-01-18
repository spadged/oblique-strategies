var strategies;

$(document).ready(function()
{
	init_app();
	init_ui();
});

function init_app()
{
	$.ajax({
		type: "GET",
		url: "lib/js/obliquestrategies.json",
		dataType: "json",
		success: function(json) {
			strategies = json;
			get_stratagy();
		}
	});
}

function get_stratagy()
{
	var number = Math.ceil(194*Math.random());
	
	var strategy = strategies.os[number];
	
	var strategy_link = $("a[href='#another']");
	
	$("span", strategy_link).html(strategy.number+".");
	$("em", strategy_link).html(strategy.strategy);
}

function init_ui()
{
	$("a[href='#oblique-strategies']").click(function()
	{	
		var me = $(this);
		var article = $("section:first-child > article");
		
		if(article.is(":visible"))
		{
			me.html('+');	
		}
		else
		{
			me.html('&times;');	
		}
	
		article.slideToggle();
		
		return false;
	});
	
	$("a[href='#another']").click(function()
	{
		get_stratagy();
		
		return false;
	});	
}