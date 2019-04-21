class Navigation
{
	constructor()
	{
		this.splashSection = new SplashSection(this);
		this.mainSection = new MainSection(this);
		this.menu = new Menu(this);
	}

	switchToSection(sectionName)
	{
		switch (sectionName)
		{
			case "main":
				this.splashSection.hide(() => this.mainSection.show());
				break ;

			case "splash":
				this.mainSection.hide(() => this.splashSection.show());
				break ;
		}
	}
}
