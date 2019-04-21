class Menu
{
	constructor(navigation)
	{
		this.navigation = navigation;
		this.$toggler = jQuery(".navbar-toggler.hamburger");

		this.$toggler.click(this.onTogglerClick.bind(this));
	}

	onTogglerClick()
	{
		if (this.$toggler.is(".is-active"))
			this.$toggler.removeClass("is-active");
		else
			this.$toggler.addClass("is-active");
	}
}
