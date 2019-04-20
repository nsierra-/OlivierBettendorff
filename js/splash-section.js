class SplashSection
{
	constructor($)
	{
		this.$splashLogo = $("#splash-logo");
		this.$splashDiv = $("#splash-row");

		this.$splashLogo.click(this.onSplashLogoClick.bind(this));
	}

	onSplashLogoClick()
	{
		console.log('Hide and show main');
	}

	hide()
	{

	}
}
