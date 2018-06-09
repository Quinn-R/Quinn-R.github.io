var menuOpen = 0;
var wrapperSize = 0, menuClickSize = 0;
var menuOpenSize = 400, menuContentOpenSize = 0;
var menuCloseSize = 80, menuContentCloseSize = 0;
var result = "";

function menuSize()
{
	
	
	if(menuOpen == 0)
	{
		menuOpen = 1;
		
		result = menuOpenSize + "px";
		
		document.getElementById('menu').style.width = result;
		
		wrapperSize = document.getElementById("menu"); 
		menuClickSize = document.getElementById("menuClick");
		//alert(wrapperSize);
		menuContentOpenSize = wrapperSize.offsetWidth - menuClickSize.offsetWidth;
		//alert(menuContentOpenSize);
		
		result = menuContentOpenSize + "px";
		
		document.getElementById('menuContent').style.width = result;
	}
	else 
	{
		menuOpen = 0;
		
		result = menuCloseSize + "px";
		
		document.getElementById('menu').style.width = result;
		
		result = menuContentCloseSize + "px";
		
		document.getElementById('menuContent').style.width = result;
	}
}

/*

# Copy/paste bin

document.getElementById('div_register').style.height= result;

*/
