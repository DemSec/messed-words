//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\ba\b/g, "an");
	v = v.replace(/\band\b/g, "or");
	v = v.replace(/\bschool\b/g, "toilet paper");
	v = v.replace(/\bSCHOOL\b/g, "TOILET PAPER");
	v = v.replace(/\bHello\b/g, "Bye Bye");
	v = v.replace(/\bMy\b/g, "Somebody's");
	v = v.replace(/\bfun\b/g, "boring");
	v = v.replace(/\bto\b/g, "nyan cat");
	
	textNode.nodeValue = v;
}
