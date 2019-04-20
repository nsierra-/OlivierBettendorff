class MainSection
{
	constructor(navigation)
	{
		this.$mainSection = jQuery("#main-section");
	}

	hide(callback)
	{
		this
			.$mainSection
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
			.$mainSection
			.show(
				{
					complete: callback
				}
			)
		;
	}
}
