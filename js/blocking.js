var dictionary = [ 'tyrion', 'jamie', 'cersei', 'daenerys', 'jon', 'snow', 'lannister', 'baelish', 'petyr', 'arya', 'stark', 'sansa', 'greyjoy', 'game of thrones', 'baratheon', 'frey', 'martell', 'tully', 'tyrel', 'westeros', 'night\'s watch', 'bolton', 'clegane', 'targaryen', 'varys' ];

function replace() {
	tags = document.getElementsByTagName('*');

	for ( var i = 0; i < tags.length; i++) {
		var element = tags[i];

		for ( var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if ( node.nodeType === 3 ) {
				var text = node.nodeValue;
				text = text.toLowerCase();
				dictionary.forEach( function( dictionaryItem ) {
					var newText = text.includes( dictionaryItem );
					if ( newText ) {
						element.style.backgroundColor = 'black';
						element.style.color = 'black';
					}
				});
			}
		}
	}
}

replace();