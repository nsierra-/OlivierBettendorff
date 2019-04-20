class SplashSection
{
	constructor(navigation)
	{
		this.navigation = navigation;
		this.$splashLogo = jQuery("#splash-logo");
		this.$splashSection = jQuery("#splash-section");

		this.$splashLogo.click(this.onSplashLogoClick.bind(this));
	}

	onSplashLogoClick()
	{
		this.navigation.switchToSection("main");
	}

	hide(callback)
	{
		this
			.$splashSection
			.hide(
				{
					complete: callback
				}
			)
		;
	}

	show(callback)
	{
		this
			.$splashSection
			.show(
				{
					complete: callback
				}
			)
		;
	}
}
