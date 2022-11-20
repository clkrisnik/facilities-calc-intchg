var MEGA_STONE_LOOKUP = {
	"Mega Venusaur": "Venusaurite",
	"Mega Charizard X": "Charizardite X",
	"Mega Charizard Y": "Charizardite Y",
	"Mega Blastoise": "Blastoisinite",
	"Mega Alakazam": "Alakazite",
	"Mega Gengar": "Gengarite",
	"Mega Kangaskhan": "Kangaskhanite",
	"Mega Pinsir": "Pinsirite",
	"Mega Gyarados": "Gyaradosite",
	"Mega Aerodactyl": "Aerodactylite",
	"Mega Mewtwo X": "Mewtwonite X",
	"Mega Mewtwo Y": "Mewtwonite Y",
	"Mega Ampharos": "Ampharosite",
	"Mega Scizor": "Scizorite",
	"Mega Heracross": "Heracronite",
	"Mega Houndoom": "Houndoominite",
	"Mega Tyranitar": "Tyranitarite",
	"Mega Blaziken": "Blazikenite",
	"Mega Gardevoir": "Gardevoirite",
	"Mega Mawile": "Mawilite",
	"Mega Aggron": "Aggronite",
	"Mega Medicham": "Medichamite",
	"Mega Manectric": "Manectite",
	"Mega Banette": "Banettite",
	"Mega Absol": "Absolite",
	"Mega Latias": "Latiasite",
	"Mega Latios": "Latiosite",
	"Mega Garchomp": "Garchompite",
	"Mega Lucario": "Lucarionite",
	"Mega Abomasnow": "Abomasite",
	"Mega Beedrill": "Beedrillite",
	"Mega Pidgeot": "Pidgeotite",
	"Mega Slowbro": "Slowbronite",
	"Mega Steelix": "Steelixite",
	"Mega Sceptile": "Sceptilite",
	"Mega Swampert": "Swampertite",
	"Mega Sableye": "Sablenite",
	"Mega Sharpedo": "Sharpedonite",
	"Mega Camerupt": "Cameruptite",
	"Mega Altaria": "Altarianite",
	"Mega Glalie": "Glalitite",
	"Mega Salamence": "Salamencite",
	"Mega Metagross": "Metagrossite",
	"Mega Lopunny": "Lopunnite",
	"Mega Gallade": "Galladite",
	"Mega Audino": "Audinite",
	"Mega Diancie": "Diancite"
};

function exportToPsFormat(pokeInfo) {
	var pokemon = new Pokemon(pokeInfo);
	var finalText = "";
	var evSum = 0;
	var ivSum = 0;
	var evsAlert = false;
	var name = pokemon.name;
	if (name.indexOf("Mega ") != -1) {
		var speciesName = name.substring(0, name.indexOf("Mega") - 1) + name.substring(name.indexOf("Mega") + 4, name.length);
		if ((speciesName.indexOf(" X") == speciesName.length - 2) || (speciesName.indexOf(" Y") == speciesName.length - 2)) {
			speciesName = speciesName.substring(0, speciesName.length - 2);
		}
		pokemon.item = MEGA_STONE_LOOKUP[name];
	} else if (name.indexOf("-Blade") != -1) {
		var speciesName = name.substring(0, name.indexOf("-")) + name.substring(name.indexOf("-") + 6, name.length);
	} else if (name.indexOf("-Both") != -1) {
		var speciesName = name.substring(0, name.indexOf("-")) + name.substring(name.indexOf("-") + 5, name.length);
	} else if (name.indexOf("Primal ") != -1) {
		var speciesName = name.substring(0, name.indexOf("Primal") - 1) + name.substring(name.indexOf("Primal") + 6, name.length);
	} else {
		var speciesName = name;
	}

	finalText = speciesName + (pokemon.item ? " @ " + pokemon.item : "") + "\n";
	finalText += pokemon.nature && gen > 2 ? pokemon.nature + " Nature" + "\n" : "";
	finalText += pokemon.ability ? "Ability: " + pokemon.ability + "\n" : "";
	finalText += pokemon.teraType ? "Tera Type: " + pokemon.teraType + "\n" : "";
	finalText += "EVs: ";
	var EVs_Array = [];
	if (pokemon.HPEVs && pokemon.HPEVs > 0) {
		evSum += pokemon.HPEVs;
		EVs_Array.push(pokemon.HPEVs + " HP");
	}
	for (stat in pokemon.evs) {
		if (pokemon.evs[stat]) {
			evSum += pokemon.evs[stat];
			EVs_Array.push(pokemon.evs[stat] + " " + toSmogonStat(stat));
		}
	}
	if (evSum > 510) {
		evsAlert = true;
	}

	var ivArray = [];
	var IVs_Array = [];
	if (pokemon.HPIVs != -1) {
		ivSum += pokemon.HPIVs;
		//IVs_Array.push(pokemon.HPIVs + " HP");
		if (pokemon.HPIVs != 31) {
			ivArray.push(pokemon.HPIVs + " HP");
		}
	}
	for (stat in pokemon.ivs) {
		if (pokemon.ivs[stat]) {
			ivSum += pokemon.ivs[stat];
		}
		if (pokemon.ivs[stat] < 31) {
			ivArray.push(pokemon.ivs[stat] + " " + toSmogonStat(stat));
		}
	}

	for (var i = 0; i < ivArray.length - 2; i++) {
		IVs_Array.push(ivArray[i]);
	}

	finalText += serialize(EVs_Array, " / ");
	finalText += "\n";

	if (ivSum < 186) {
		finalText += "IVs: ";
		finalText += serialize(IVs_Array, " / ");
		finalText += "\n";
	}

	var movesArray = [];
	for (i = 0; i < 4; i++) {
		var moveName = pokemon.moves[i].name;
		if (moveName !== "(No Move)") {
			finalText += "- " + moveName + "\n";
		}
	}
	finalText = finalText.trim();

	if (evsAlert === true) {
		alert("Exported Pokemon has " + evSum + " EVs and is therefore illegal. Exported set anyway.");
	}
	document.getElementById("customMon").innerHTML = finalText;

	var copyText = document.getElementById("customMon");
	copyText.select();
	document.execCommand("Copy");
}

function exportToPsFormatLG(pokeInfo) {
	var pokemon = new Pokemon(pokeInfo);
	var finalText = "";
	var avSum = 0;
	var ivSum = 0;
	var name = pokemon.name;
	if (name.indexOf("Mega ") != -1) {
		var speciesName = name.substring(0, name.indexOf("Mega") - 1) + name.substring(name.indexOf("Mega") + 4, name.length);
	} else if (name.indexOf("-Blade") != -1) {
		var speciesName = name.substring(0, name.indexOf("-")) + name.substring(name.indexOf("-") + 6, name.length);
	} else if (name.indexOf("-Both") != -1) {
		var speciesName = name.substring(0, name.indexOf("-")) + name.substring(name.indexOf("-") + 5, name.length);
	} else if (name.indexOf("Primal ") != -1) {
		var speciesName = name.substring(0, name.indexOf("Primal") - 1) + name.substring(name.indexOf("Primal") + 6, name.length);
	} else {
		var speciesName = name;
	}

	finalText = speciesName + "\n";
	finalText += pokemon.nature && gen > 2 ? pokemon.nature + " Nature" + "\n" : "";
	finalText += "EVs: ";
	var AVs_Array = [];
	if (pokemon.HPAVs && pokemon.HPAVs > 0) {
		avSum += pokemon.HPAVs;
		AVs_Array.push(pokemon.HPAVs + " HP");
	}
	for (stat in pokemon.avs) {
		if (pokemon.avs[stat]) {
			avSum += pokemon.avs[stat];
			AVs_Array.push(pokemon.avs[stat] + " " + toSmogonStat(stat));
		}
	}

	var ivArray = [];
	var IVs_Array = [];
	if (pokemon.HPIVs != -1) {
		ivSum += pokemon.HPIVs;
		//IVs_Array.push(pokemon.HPIVs + " HP");
		if (pokemon.HPIVs != 31) {
			ivArray.push(pokemon.HPIVs + " HP");
		}
	}
	for (stat in pokemon.ivs) {
		if (pokemon.ivs[stat]) {
			ivSum += pokemon.ivs[stat];
		}
		if (pokemon.ivs[stat] < 31) {
			ivArray.push(pokemon.ivs[stat] + " " + toSmogonStat(stat));
		}
	}

	for (var i = 0; i < ivArray.length - 2; i++) {
		IVs_Array.push(ivArray[i]);
	}

	finalText += serialize(AVs_Array, " / ");
	finalText += "\n";

	if (ivSum < 186) {
		finalText += "IVs: ";
		finalText += serialize(IVs_Array, " / ");
		finalText += "\n";
	}

	var movesArray = [];
	for (i = 0; i < 4; i++) {
		var moveName = pokemon.moves[i].name;
		if (moveName !== "(No Move)") {
			finalText += "- " + moveName + "\n";
		}
	}
	finalText = finalText.trim();

	document.getElementById("customMon").innerHTML = finalText;

	var copyText = document.getElementById("customMon");
	copyText.select();
	document.execCommand("Copy");
}

function serialize(array, separator) {
	var text = "";
	for (i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}