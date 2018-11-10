var changetheme = function () {
	if (document.getElementById("theme").value === "aegislash") {
		loadjscssfile("_css/ap_calc.css", "css");
		loadjscssfile("_css/nb_calc.css", "css");
		loadjscssfile("_css/select2.css", "css");
		console.log("loaded aegislash theme");
		var select = document.getElementById("theme");
		var selectedItem = select.value;
		createCookie("selectedItem", selectedItem, 3000);
		removejscssfile("_css/dark_ap_calc.css", "css");
		removejscssfile("_css/dark_nb_calc.css", "css");
		removejscssfile("_css/legacy_ap_calc.css", "css");
		removejscssfile("_css/legacy_nb_calc.css", "css");
		removejscssfile("_css/volc_ap_calc.css", "css");
		removejscssfile("_css/volc_nb_calc.css", "css");
		document.getElementById("midimg").src = "_images/aegi trozei.png";
	} else if (document.getElementById("theme").value === "dark") {
		loadjscssfile("_css/dark_ap_calc.css", "css");
		loadjscssfile("_css/dark_nb_calc.css", "css");
		var select = document.getElementById("theme");
		var selectedItem = select.value;
		removejscssfile("_css/legacy_ap_calc.css", "css");
		removejscssfile("_css/legacy_nb_calc.css", "css");
		removejscssfile("_css/volc_ap_calc.css", "css");
		removejscssfile("_css/volc_nb_calc.css", "css");
		removejscssfile("_css/ap_calc.css", "css");
		removejscssfile("_css/nb_calc.css", "css");
		createCookie("selectedItem", selectedItem, 3000);
		document.getElementById("midimg").src = "_images/shiny aegi trozei.png";
		console.log("loaded dark theme");
	} else if (document.getElementById("theme").value === "legacy") {
		loadjscssfile("_css/legacy_ap_calc.css", "css");
		loadjscssfile("_css/legacy_nb_calc.css", "css");
		loadjscssfile("_css/legacy_select2.css", "css");
		removejscssfile("_css/dark_ap_calc.css", "css");
		removejscssfile("_css/dark_nb_calc.css", "css");
		removejscssfile("_css/volc_ap_calc.css", "css");
		removejscssfile("_css/volc_nb_calc.css", "css");
		removejscssfile("_css/ap_calc.css", "css");
		removejscssfile("_css/nb_calc.css", "css");
		document.getElementById("midimg").src = "_images/cantsay.png";
		var select = document.getElementById("theme");
		var selectedItem = select.value;
		createCookie("selectedItem", selectedItem, 3000);
		console.log("loaded legacy theme");
	} else if (document.getElementById("theme").value === "volcarona") {
		loadjscssfile("_css/volc_ap_calc.css", "css");
		loadjscssfile("_css/volc_nb_calc.css", "css");
		loadjscssfile("_css/volc_select2.css", "css");
		removejscssfile("_css/dark_ap_calc.css", "css");
		removejscssfile("_css/dark_nb_calc.css", "css");
		removejscssfile("_css/legacy_ap_calc.css", "css");
		removejscssfile("_css/legacy_nb_calc.css", "css");
		removejscssfile("_css/ap_calc.css", "css");
		removejscssfile("_css/nb_calc.css", "css");
		document.getElementById("midimg").src = "_images/volc.png";
		var select = document.getElementById("theme");
		var selectedItem = select.value;
		createCookie("selectedItem", selectedItem, 3000);
		console.log("loaded volcarona theme");
	}
};
