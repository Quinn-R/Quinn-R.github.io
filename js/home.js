var menuOpen = 0;
var menuOpenSize = 100, menuContentOpenSize = 90;
var menuCloseSize = 10, menuContentCloseSize = 0;
var result = "";

function menuSize()
{
	if(menuOpen == 0)
	{
		menuOpen = 1;
		
		result = menuOpenSize + "vw";
		
		document.getElementById('menu').style.width= result;
		
		result = menuContentOpenSize + "vw";
		
		document.getElementById('menuContent').style.width = result;
	}
	else 
	{
		menuOpen = 0;
		
		result = menuCloseSize + "vw";
		
		document.getElementById('menu').style.width = result;
		
		result = menuContentCloseSize + "vw";
		
		document.getElementById('menuContent').style.width = result;
	}
}

/*

# Copy/paste bin

document.getElementById('div_register').style.height= result;

*/
