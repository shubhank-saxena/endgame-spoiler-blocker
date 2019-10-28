var dictionary = ['Endgame','jaskeerat','hackerman','Tony Stark', 'Iron Man', 'Pepper Potts', 'Rescue', 'James Rhodes','War Machine','Nick Fury','Nicholas Joseph Fury','Howard Stark','Bruce Banner','Hulk','Natasha Romanoff','Black Widow','Anton Vanko','Whiplash',
'Boris Turgenov','Crimson Dynamo','Justin Hammer','Igor Vanko','Peter Parker','Spider-Man','Thor','Jane Foster','Odin','Loki','Heimdall','Clint Barton','Hawkeye','Ronin',
'Steve Rogers','Captain America','Johann Shmidt','Red Skull','Peggy Carter','Bucky Barnes','Winter Soldier','Hunter','White Wolf','Arnim Zola','Thanos','Wanda Maximoff','Scarlet Witch',
'Peter Quill','Star-Lord','Gamora','Arthur Douglas','Drax the Destroyer','Rocket Raccoon','Groot','Rhomann Dey','Nova Prime','Garthan Saal','Nova Omega','Nebula','Ronan the Accuser','Korath the Pursuer',
'Kraglin','Cosmo','Karman-Kan','Vision','Hank','Pym','Ant-Man','Scott Lang','Ant-Man','Darren Cross','Yellow jacket','Hope Pym','Red Queen','Janet van Dyne','Wasp',"T'Challa",'Black Panther','Helmut Zemo','Baron Zemo','Everett Ross',
'Shuri','Nakia','Stephen Strange','Doctor Strange','Dormammu','Mantis','Valkyrie','Surtur','Carol Danvers','Captain Marvel','Yon-Rogg','Magnitron','Minn-Erva','Doctor Minerva','Maria Rambeau','Ikaris','Sersi','Gamora','Hawkeye'];

function replace() {
	tags = document.getElementsByTagName('*');

	for ( var i = 0; i < tags.length; i++) {
		var element = tags[i];

		for ( var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if ( node.nodeType === 3 ) {
				var text = node.nodeValue;
				text = text.toString();
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
