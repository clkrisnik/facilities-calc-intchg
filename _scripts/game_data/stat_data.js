var AT = "at", DF = "df", SA = "sa", SD = "sd", SP = "sp", SL = "sl", AC = "ac", ES = "es";
var STATS_RBY = [AT, DF, SL, SP];
var STATS_GSC = [AT, DF, SA, SD, SP, AC, ES];

function CALC_HP_ADV(poke) {
	var hp = poke.find(".hp");
	var total;
	var base = ~~hp.find(".base").val();
	if (base === 1) {
		total = 1;
	} else {
		var level = ~~poke.find(".level").val();
		var evs = ~~hp.find(".evs").val();
		var ivs = ~~hp.find(".ivs").val();
		total = Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + level + 10;
	}

	if (poke.find(".max").prop("checked") && total > 1) {
		var dmaxLevel = poke.find(".max-level").val();
		total = Math.floor(total * (1.5 + (dmaxLevel * 0.05)));
	}
	hp.find(".total").text(total);
	poke.find(".max-hp").text(total);
	calcCurrentHP(poke, total, ~~poke.find(".percent-hp").val());
}

function CALC_STAT_ADV(poke, statName) {
	var stat = poke.find("." + statName);
	var level = ~~poke.find(".level").val();
	var base = ~~stat.find(".base").val();
	var evs = ~~stat.find(".evs").val();
	var ivs = ~~stat.find(".ivs").val();
	var natureMods = NATURES[poke.find(".nature").val()];
	var nature = natureMods[0] === statName ? 1.1 : natureMods[1] === statName ? 0.9 : 1;
	var total = Math.floor((Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + 5) * nature);
	stat.find(".total").text(total);
}
