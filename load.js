function getQuerySelection(o, attr)
{
	var css = [];
	if (attr == undefined) attr=['id','class'];

	do
	{
		var tag = o.tagName;
		var path = '';	
		
		if (tag != null) path = tag;
		for (var i = 0; i < attr.length; i++)
		{
			var tmp = o.getAttribute(attr[i]);
			if (tmp != null) path += '['+attr[i]+'="'+tmp+'"]';
		}
		css[css.length] = path;
		o = o.parentNode;
	} while (tag != 'BODY');
	return css.reverse().join(' ');
} 

//window.onload = function()
//{
	var list = document.body.querySelectorAll('*');
	var path = [];
	for (var i = 0; i < list.length; i++)
	{
		list[i].addEventListener('mousedown', function()
		{
			path[path.length] = getQuerySelection(this);
		});
		list[i].addEventListener('mouseup', function()
		{
			if (path.length)
			{
				console.log(path);
				path = [];
			}
		});
	}
//}
