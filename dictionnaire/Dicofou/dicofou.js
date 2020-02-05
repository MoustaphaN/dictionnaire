/*auteur:jlr. Ce jeu est libre de droits pour toute utilisation non commerciale
Prière de ne pas enlever le sigle JLR avec le lien vers mon site www.progvbjlr.net*/

	var bolauto = new Boolean(0);
	var autfal = new Boolean(0);
	var totnbrmot = 0;
	var chaine1;
	var chaine2;
	var numsuf;
	var numpref;
	var strprov;
	var strprov1;
	var strprov2;
	var motsing;
	var motplur;
	
	
	function initq(iRows,iCols) 
	{ 
		var i; 
		var j; 
		   var a = new Array(iRows); 
		   for (i=0; i < iRows; i++) 
		   { 
			   a[i] = new Array(iCols); 
			   for (j=0; j < iCols; j++) 
			   { 
				   a[i][j] = ""; 
			   } 
		   } 
		   return(a);
		   
						 
	}
	
	var prefixe = initq(164,7); // 163 et 6 ( 0 à 163  -  0 à 6 )
	var suffixe = initq(103,8); //102 et 7 ( 0 à 102   - 0 à 7 )
	
	// remarque: les règles grammaticales et les définitions ne sont pas TOUJOURS observées pour les besoins du jeu
	
	// Préfixes
	
	prefixe[1][1] = "formi" // préfixe
	prefixe[1][2] = "c" // c ou v - consonne ou voyelle d'après la première lettre du préfixe[5]
	prefixe[1][3] = "f" // m ou f - masculin ou féminin d'après le genre du préfixe[5]
	prefixe[1][4] = "p" // s ou p - singulier ou pluriel d'après le nombre du préfixe[5]
	prefixe[1][5] = "fourmis" // définition du préfixe pour la chaine 2 dans la définition du mot
	prefixe[1][6] = "s" // x, aux, s, terminaison au pluriel de préfixe[5] ou i si invariable (dans le dicofou !)
		
	prefixe[2][1] = "mi"
	prefixe[2][2] = "c"
	prefixe[2][3] = "f"
	prefixe[2][4] = "s"
	prefixe[2][5] = "moitié"
	prefixe[2][6] = "s"
	
	prefixe[3][1] = "aéro"
	prefixe[3][2] = "v"
	prefixe[3][3] = "m"
	prefixe[3][4] = "s"
	prefixe[3][5] = "air"
	prefixe[3][6] = "s"
	
	prefixe[4][1] = "mytho"
	prefixe[4][2] = "c"
	prefixe[4][3] = "f"
	prefixe[4][4] = "s"
	prefixe[4][5] = "fable"
	prefixe[4][6] = "s"
	
	prefixe[5][1] = "anthropo"
	prefixe[5][2] = "v"
	prefixe[5][3] = "f"
	prefixe[5][4] = "s"
	prefixe[5][5] = "humanité"
	prefixe[5][6] = "i"
	
	prefixe[6][1] = "phallo"
	prefixe[6][2] = "v"
	prefixe[6][3] = "m"
	prefixe[6][4] = "s"
	prefixe[6][5] = "homme"
	prefixe[6][6] = "s"
	
	prefixe[7][1] = "hydro"
	prefixe[7][2] = "v"
	prefixe[7][3] = "f"
	prefixe[7][4] = "s"
	prefixe[7][5] = "eau"
	prefixe[7][6] = "x"
	
	prefixe[8][1] = "pisci"
	prefixe[8][2] = "c"
	prefixe[8][3] = "m"
	prefixe[8][4] = "p"
	prefixe[8][5] = "poissons"
	prefixe[8][6] = "s"

	prefixe[9][1] = "océano"
	prefixe[9][2] = "v"
	prefixe[9][3] = "m"
	prefixe[9][4] = "s"
	prefixe[9][5] = "océan"
	prefixe[9][6] = "s"
	
	prefixe[10][1] = "télé"
	prefixe[10][2] = "c"
	prefixe[10][3] = "f"
	prefixe[10][4] = "s"
	prefixe[10][5] = "distance"
	prefixe[10][6] = "s"
	
	prefixe[11][1] = "volcano"
	prefixe[11][2] = "c"
	prefixe[11][3] = "m"
	prefixe[11][4] = "p"
	prefixe[11][5] = "volcans"
	prefixe[11][6] = "s"
	
	prefixe[12][1] = "ethno"
	prefixe[12][2] = "c"
	prefixe[12][3] = "f"
	prefixe[12][4] = "p"
	prefixe[12][5] = "races"
	prefixe[12][6] = "s"
	
	prefixe[13][1] = "musico"
	prefixe[13][2] = "c"
	prefixe[13][3] = "f"
	prefixe[13][4] = "s"
	prefixe[13][5] = "musique"
	prefixe[13][6] = "s"

	prefixe[14][1] = "pyro"
	prefixe[14][2] = "c"
	prefixe[14][3] = "m"
	prefixe[14][4] = "s"
	prefixe[14][5] = "feu"
	prefixe[14][6] = "x"
	
	prefixe[15][1] = "papo"
	prefixe[15][2] = "c"
	prefixe[15][3] = "m"
	prefixe[15][4] = "s"
	prefixe[15][5] = "pape"
	prefixe[15][6] = "s"
	
	prefixe[16][1] = "exo"
	prefixe[16][2] = "v"
	prefixe[16][3] = "m"
	prefixe[16][4] = "s"
	prefixe[16][5] = "extérieur"
	prefixe[16][6] = "s"
	
	prefixe[17][1] = "électro"
	prefixe[17][2] = "v"
	prefixe[17][3] = "f"
	prefixe[17][4] = "s"
	prefixe[17][5] = "électricité"
	prefixe[17][6] = "i"
	
	prefixe[18][1] = "véloci"
	prefixe[18][2] = "c"
	prefixe[18][3] = "f"
	prefixe[18][4] = "s"
	prefixe[18][5] = "vitesse"
	prefixe[18][6] = "i"

	prefixe[19][1] = "centri"
	prefixe[19][2] = "c"
	prefixe[19][3] = "m"
	prefixe[19][4] = "s"
	prefixe[19][5] = "centre"
	prefixe[19][6] = "i"
	
	prefixe[20][1] = "melo"
	prefixe[20][2] = "v"
	prefixe[20][3] = "m"
	prefixe[20][4] = "s"
	prefixe[20][5] = "excès"
	prefixe[20][6] = "i"
	
	prefixe[21][1] = "héli"
	prefixe[21][2] = "v"
	prefixe[21][3] = "f"
	prefixe[21][4] = "s"
	prefixe[21][5] = "hélice"
	prefixe[21][6] = "s"
	
	prefixe[22][1] = "théori"
	prefixe[22][2] = "c"
	prefixe[22][3] = "f"
	prefixe[22][4] = "s"
	prefixe[22][5] = "théorie"
	prefixe[22][6] = "s"
	
	prefixe[23][1] = "prati"
	prefixe[23][2] = "c"
	prefixe[23][3] = "f"
	prefixe[23][4] = "s"
	prefixe[23][5] = "pratique"
	prefixe[23][6] = "i"

	prefixe[24][1] = "psycho"
	prefixe[24][2] = "v"
	prefixe[24][3] = "f"
	prefixe[24][4] = "s"
	prefixe[24][5] = "âme"
	prefixe[24][6] = "s"
	
	prefixe[25][1] = "multi"
	prefixe[25][2] = "c"
	prefixe[25][3] = "f"
	prefixe[25][4] = "s"
	prefixe[25][5] = "multitude"
	prefixe[25][6] = "s"
	
	prefixe[26][1] = "mathé"
	prefixe[26][2] = "c"
	prefixe[26][3] = "m"
	prefixe[26][4] = "p"
	prefixe[26][5] = "maths"
	prefixe[26][6] = "i"
	
	prefixe[27][1] = "spatio"
	prefixe[27][2] = "v"
	prefixe[27][3] = "m"
	prefixe[27][4] = "s"
	prefixe[27][5] = "espace"
	prefixe[27][6] = "s"
	
	prefixe[28][1] = "pesti"
	prefixe[28][2] = "c"
	prefixe[28][3] = "m"
	prefixe[28][4] = "p"
	prefixe[28][5] = "parasites"
	prefixe[28][6] = "s"

	prefixe[29][1] = "ostréi"
	prefixe[29][2] = "v"
	prefixe[29][3] = "f"
	prefixe[29][4] = "p"
	prefixe[29][5] = "huitres"
	prefixe[29][6] = "s"
	
	prefixe[30][1] = "herbori"
	prefixe[30][2] = "v"
	prefixe[30][3] = "f"
	prefixe[30][4] = "s"
	prefixe[30][5] = "herbe"
	prefixe[30][6] = "s"
	
	prefixe[31][1] = "profondi"
	prefixe[31][2] = "c"
	prefixe[31][3] = "f"
	prefixe[31][4] = "p"
	prefixe[31][5] = "profondeurs"
	prefixe[31][6] = "s"
	
	prefixe[32][1] = "strato"
	prefixe[32][2] = "c"
	prefixe[32][3] = "f"
	prefixe[32][4] = "s"
	prefixe[32][5] = "couche"
	prefixe[32][6] = "s"
	
	prefixe[33][1] = "pré"
	prefixe[33][2] = "c"
	prefixe[33][3] = "m"
	prefixe[33][4] = "s"
	prefixe[33][5] = "devant"
	prefixe[33][6] = "s"

	prefixe[34][1] = "alti"
	prefixe[34][2] = "v"
	prefixe[34][3] = "f"
	prefixe[34][4] = "s"
	prefixe[34][5] = "altitude"
	prefixe[34][6] = "s"
	
	prefixe[35][1] = "auto"
	prefixe[35][2] = "c"
	prefixe[35][3] = "m"
	prefixe[35][4] = "s"
	prefixe[35][5] = "lui-même"
	prefixe[35][6] = "i"
	
	prefixe[36][1] = "myco"
	prefixe[36][2] = "c"
	prefixe[36][3] = "m"
	prefixe[36][4] = "p"
	prefixe[36][5] = "champignons"
	prefixe[36][6] = "s"
	
	prefixe[37][1] = "philo"
	prefixe[37][2] = "c"
	prefixe[37][3] = "f"
	prefixe[37][4] = "s"
	prefixe[37][5] = "raison"
	prefixe[37][6] = "s"
	
	prefixe[38][1] = "peto"
	prefixe[38][2] = "c"
	prefixe[38][3] = "m"
	prefixe[38][4] = "p"
	prefixe[38][5] = "pets"
	prefixe[38][6] = "s"

	prefixe[39][1] = "icono"
	prefixe[39][2] = "v"
	prefixe[39][3] = "f"
	prefixe[39][4] = "p"
	prefixe[39][5] = "icônes"
	prefixe[39][6] = "s"
	
	prefixe[40][1] = "musico"
	prefixe[40][2] = "c"
	prefixe[40][3] = "f"
	prefixe[40][4] = "s"
	prefixe[40][5] = "musique"
	prefixe[40][6] = "s"
		
	prefixe[41][1] = "poly"
	prefixe[41][2] = "c"
	prefixe[41][3] = "m"
	prefixe[41][4] = "s"
	prefixe[41][5] = "nombre"
	prefixe[41][6] = "s"
	
	prefixe[42][1] = "vermi"
	prefixe[42][2] = "c"
	prefixe[42][3] = "m"
	prefixe[42][4] = "p"
	prefixe[42][5] = "vers"
	prefixe[42][6] = "s"
	
	prefixe[43][1] = "pedi"
	prefixe[43][2] = "c"
	prefixe[43][3] = "m"
	prefixe[43][4] = "p"
	prefixe[43][5] = "pieds"
	prefixe[43][6] = "s"

	prefixe[44][1] = "heleno"
	prefixe[44][2] = "c"
	prefixe[44][3] = "m"
	prefixe[44][4] = "p"
	prefixe[44][5] = "grecs"
	prefixe[44][6] = "s"
	
	prefixe[45][1] = "seleno"
	prefixe[45][2] = "c"
	prefixe[45][3] = "f"
	prefixe[45][4] = "s"
	prefixe[45][5] = "lune"
	prefixe[45][6] = "s"
	
	prefixe[46][1] = "hélio"
	prefixe[46][2] = "c"
	prefixe[46][3] = "m"
	prefixe[46][4] = "s"
	prefixe[46][5] = "soleil"
	prefixe[46][6] = "s"
	
	prefixe[47][1] = "manu"
	prefixe[47][2] = "c"
	prefixe[47][3] = "f"
	prefixe[47][4] = "s"
	prefixe[47][5] = "main"
	prefixe[47][6] = "s"
	
	prefixe[48][1] = "xéno"
	prefixe[48][2] = "v"
	prefixe[48][3] = "m"
	prefixe[48][4] = "p"
	prefixe[48][5] = "étrangers"
	prefixe[48][6] = "s"

	prefixe[49][1] = "thermo"
	prefixe[49][2] = "c"
	prefixe[49][3] = "f"
	prefixe[49][4] = "s"
	prefixe[49][5] = "chaleur"
	prefixe[49][6] = "s"
		
	prefixe[50][1] = "anémo"
	prefixe[50][2] = "c"
	prefixe[50][3] = "m"
	prefixe[50][4] = "s"
	prefixe[50][5] = "vent"
	prefixe[50][6] = "s"
	
	prefixe[51][1] = "vétusto"
	prefixe[51][2] = "c"
	prefixe[51][3] = "m"
	prefixe[51][4] = "p"
	prefixe[51][5] = "vieux"
	prefixe[51][6] = "i"
	
	prefixe[52][1] = "archéo"
	prefixe[52][2] = "v"
	prefixe[52][3] = "m"
	prefixe[52][4] = "s"
	prefixe[52][5] = "ancien"
	prefixe[52][6] = "s"
	
	prefixe[53][1] = "juvéni"
	prefixe[53][2] = "c"
	prefixe[53][3] = "m"
	prefixe[53][4] = "p"
	prefixe[53][5] = "jeunes"
	prefixe[53][6] = "s"

	prefixe[54][1] = "grapho"
	prefixe[54][2] = "v"
	prefixe[54][3] = "f"
	prefixe[54][4] = "s"
	prefixe[54][5] = "écriture"
	prefixe[54][6] = "s"
	
	prefixe[55][1] = "arbori"
	prefixe[55][2] = "v"
	prefixe[55][3] = "m"
	prefixe[55][4] = "s"
	prefixe[55][5] = "arbre"
	prefixe[55][6] = "s"
	
	prefixe[56][1] = "fémi"
	prefixe[56][2] = "c"
	prefixe[56][3] = "f"
	prefixe[56][4] = "p"
	prefixe[56][5] = "femmes"
	prefixe[56][6] = "s"
	
	prefixe[57][1] = "insecti"
	prefixe[57][2] = "v"
	prefixe[57][3] = "m"
	prefixe[57][4] = "s"
	prefixe[57][5] = "insecte"
	prefixe[57][6] = "s"
	
	prefixe[58][1] = "hétéro"
	prefixe[58][2] = "v"
	prefixe[58][3] = "m"
	prefixe[58][4] = "s"
	prefixe[58][5] = "autre"
	prefixe[58][6] = "s"

	prefixe[59][1] = "ethno"
	prefixe[59][2] = "c"
	prefixe[59][3] = "m"
	prefixe[59][4] = "s"
	prefixe[59][5] = "peuple"
	prefixe[59][6] = "s"
		
	prefixe[60][1] = "narco"
	prefixe[60][2] = "c"
	prefixe[60][3] = "m"
	prefixe[60][4] = "s"
	prefixe[60][5] = "sommeil"
	prefixe[60][6] = "s"
	
	prefixe[61][1] = "nécro"
	prefixe[61][2] = "c"
	prefixe[61][3] = "m"
	prefixe[61][4] = "p"
	prefixe[61][5] = "morts"
	prefixe[61][6] = "s"
	
	prefixe[62][1] = "néo"
	prefixe[62][2] = "c"
	prefixe[62][3] = "f"
	prefixe[62][4] = "s"
	prefixe[62][5] = "nouveauté"
	prefixe[62][6] = "s"
	
	prefixe[63][1] = "neuro"
	prefixe[63][2] = "c"
	prefixe[63][3] = "m"
	prefixe[63][4] = "p"
	prefixe[63][5] = "nerfs"
	prefixe[63][6] = "s"

	prefixe[64][1] = "nucléo"
	prefixe[64][2] = "c"
	prefixe[64][3] = "m"
	prefixe[64][4] = "p"
	prefixe[64][5] = "noyaux"
	prefixe[64][6] = "x"
	
	prefixe[65][1] = "oeno"
	prefixe[65][2] = "c"
	prefixe[65][3] = "m"
	prefixe[65][4] = "s"
	prefixe[65][5] = "vin"
	prefixe[65][6] = "s"
	
	prefixe[66][1] = "omni"
	prefixe[66][2] = "c"
	prefixe[66][3] = "m"
	prefixe[66][4] = "s"
	prefixe[66][5] = "tout"
	prefixe[66][6] = "i"
	
	prefixe[67][1] = "onto"
	prefixe[67][2] = "v"
	prefixe[67][3] = "m"
	prefixe[67][4] = "s"
	prefixe[67][5] = "être"
	prefixe[67][6] = "s"
	
	prefixe[68][1] = "paléo"
	prefixe[68][2] = "v"
	prefixe[68][3] = "m"
	prefixe[68][4] = "s"
	prefixe[68][5] = "ancien"
	prefixe[68][6] = "s"

	prefixe[69][1] = "patho"
	prefixe[69][2] = "c"
	prefixe[69][3] = "m"
	prefixe[69][4] = "p"
	prefixe[69][5] = "malades"
	prefixe[69][6] = "s"
		
	prefixe[70][1] = "palmi"
	prefixe[70][2] = "c"
	prefixe[70][3] = "f"
	prefixe[70][4] = "p"
	prefixe[70][5] = "palmes"
	prefixe[70][6] = "s"
	
	prefixe[71][1] = "phono"
	prefixe[71][2] = "c"
	prefixe[71][3] = "m"
	prefixe[71][4] = "s"
	prefixe[71][5] = "son"
	prefixe[71][6] = "s"
	
	prefixe[72][1] = "physio"
	prefixe[72][2] = "c"
	prefixe[72][3] = "f"
	prefixe[72][4] = "s"
	prefixe[72][5] = "nature"
	prefixe[72][6] = "s"
	
	prefixe[73][1] = "phyto"
	prefixe[73][2] = "c"
	prefixe[73][3] = "f"
	prefixe[73][4] = "p"
	prefixe[73][5] = "plantes"
	prefixe[73][6] = "s"

	prefixe[74][1] = "pré"
	prefixe[74][2] = "c"
	prefixe[74][3] = "m"
	prefixe[74][4] = "s"
	prefixe[74][5] = "devant"
	prefixe[74][6] = "i"
	
	prefixe[75][1] = "hypo"
	prefixe[75][2] = "c"
	prefixe[75][3] = "m"
	prefixe[75][4] = "p"
	prefixe[75][5] = "chevaux"
	prefixe[75][6] = "aux"
	
	prefixe[76][1] = "radio"
	prefixe[76][2] = "c"
	prefixe[76][3] = "f"
	prefixe[76][4] = "p"
	prefixe[76][5] = "radiations"
	prefixe[76][6] = "s"
	
	prefixe[77][1] = "simili"
	prefixe[77][2] = "c"
	prefixe[77][3] = "m"
	prefixe[77][4] = "p"
	prefixe[77][5] = "semblables"
	prefixe[77][6] = "s"
	
	prefixe[78][1] = "sino"
	prefixe[78][2] = "c"
	prefixe[78][3] = "m"
	prefixe[78][4] = "p"
	prefixe[78][5] = "chinois"
	prefixe[78][6] = "i"

	prefixe[79][1] = "socio"
	prefixe[79][2] = "c"
	prefixe[79][3] = "f"
	prefixe[79][4] = "s"
	prefixe[79][5] = "société"
	prefixe[79][6] = "s"
		
	prefixe[80][1] = "sylvi"
	prefixe[80][2] = "c"
	prefixe[80][3] = "f"
	prefixe[80][4] = "s"
	prefixe[80][5] = "forêt"
	prefixe[80][6] = "s"
	
	prefixe[81][1] = "thalasso"
	prefixe[81][2] = "c"
	prefixe[81][3] = "f"
	prefixe[81][4] = "s"
	prefixe[81][5] = "mer"
	prefixe[81][6] = "s"
	
	prefixe[82][1] = "toxico"
	prefixe[82][2] = "c"
	prefixe[82][3] = "m"
	prefixe[82][4] = "s"
	prefixe[82][5] = "poison"
	prefixe[82][6] = "s"
	
	prefixe[83][1] = "typo"
	prefixe[83][2] = "c"
	prefixe[83][3] = "m"
	prefixe[83][4] = "s"
	prefixe[83][5] = "caractère"
	prefixe[83][6] = "s"

	prefixe[84][1] = "uni"
	prefixe[84][2] = "c"
	prefixe[84][3] = "m"
	prefixe[84][4] = "s"
	prefixe[84][5] = "seul"
	prefixe[84][6] = "i"
	
	prefixe[85][1] = "hémi"
	prefixe[85][2] = "c"
	prefixe[85][3] = "f"
	prefixe[85][4] = "s"
	prefixe[85][5] = "moitié"
	prefixe[85][6] = "s"
	
	prefixe[86][1] = "viti"
	prefixe[86][2] = "c"
	prefixe[86][3] = "f"
	prefixe[86][4] = "s"
	prefixe[86][5] = "vigne"
	prefixe[86][6] = "s"
	
	prefixe[87][1] = "hémo"
	prefixe[87][2] = "c"
	prefixe[87][3] = "m"
	prefixe[87][4] = "s"
	prefixe[87][5] = "sang"
	prefixe[87][6] = "i"
	
	prefixe[88][1] = "gallina"
	prefixe[88][2] = "c"
	prefixe[88][3] = "f"
	prefixe[88][4] = "p"
	prefixe[88][5] = "poules"
	prefixe[88][6] = "s"

	prefixe[89][1] = "accro"
	prefixe[89][2] = "v"
	prefixe[89][3] = "f"
	prefixe[89][4] = "s"
	prefixe[89][5] = "extrémité"
	prefixe[89][6] = "s"
		
	prefixe[90][1] = "adéno"
	prefixe[90][2] = "c"
	prefixe[90][3] = "f"
	prefixe[90][4] = "p"
	prefixe[90][5] = "glandes"
	prefixe[90][6] = "s"
	
	prefixe[91][1] = "allo"
	prefixe[91][2] = "v"
	prefixe[91][3] = "m"
	prefixe[91][4] = "p"
	prefixe[91][5] = "autres"
	prefixe[91][6] = "s"
	
	prefixe[92][1] = "andro"
	prefixe[92][2] = "v"
	prefixe[92][3] = "m"
	prefixe[92][4] = "p"
	prefixe[92][5] = "hommes mâles"
	prefixe[92][6] = "i"
	
	prefixe[93][1] = "biblio"
	prefixe[93][2] = "c"
	prefixe[93][3] = "m"
	prefixe[93][4] = "p"
	prefixe[93][5] = "livres"
	prefixe[93][6] = "s"

	prefixe[94][1] = "bio"
	prefixe[94][2] = "c"
	prefixe[94][3] = "f"
	prefixe[94][4] = "s"
	prefixe[94][5] = "vie"
	prefixe[94][6] = "s"
	
	prefixe[95][1] = "blasto"
	prefixe[95][2] = "c"
	prefixe[95][3] = "m"
	prefixe[95][4] = "p"
	prefixe[95][5] = "germes"
	prefixe[95][6] = "s"
	
	prefixe[96][1] = "calli"
	prefixe[96][2] = "c"
	prefixe[96][3] = "f"
	prefixe[96][4] = "s"
	prefixe[96][5] = "beauté"
	prefixe[96][6] = "i"
	
	prefixe[97][1] = "calori"
	prefixe[97][2] = "c"
	prefixe[97][3] = "f"
	prefixe[97][4] = "s"
	prefixe[97][5] = "chaleur"
	prefixe[97][6] = "s"
	
	prefixe[98][1] = "cardio"
	prefixe[98][2] = "c"
	prefixe[98][3] = "m"
	prefixe[98][4] = "s"
	prefixe[98][5] = "coeur"
	prefixe[98][6] = "s"

	prefixe[99][1] = "cosmo"
	prefixe[99][2] = "c"
	prefixe[99][3] = "m"
	prefixe[99][4] = "s"
	prefixe[99][5] = "monde"
	prefixe[99][6] = "s"
		
	prefixe[100][1] = "cryo"
	prefixe[100][2] = "c"
	prefixe[100][3] = "m"
	prefixe[100][4] = "s"
	prefixe[100][5] = "froid"
	prefixe[100][6] = "i"
	
	prefixe[101][1] = "dermo"
	prefixe[101][2] = "c"
	prefixe[101][3] = "f"
	prefixe[101][4] = "s"
	prefixe[101][5] = "peau"
	prefixe[101][6] = "x"
	
	prefixe[102][1] = "géronto"
	prefixe[102][2] = "c"
	prefixe[102][3] = "m"
	prefixe[102][4] = "p"
	prefixe[102][5] = "vieillards"
	prefixe[102][6] = "s"
	
	prefixe[103][1] = "gyro"
	prefixe[103][2] = "c"
	prefixe[103][3] = "m"
	prefixe[103][4] = "p"
	prefixe[103][5] = "cercles"
	prefixe[103][6] = "s"
	
	prefixe[104][1] = "hydro"
	prefixe[104][2] = "v"
	prefixe[104][3] = "f"
	prefixe[104][4] = "s"
	prefixe[104][5] = "eau"
	prefixe[104][6] = "x"
	
	prefixe[105][1] = "igni"
	prefixe[105][2] = "c"
	prefixe[105][3] = "m"
	prefixe[105][4] = "s"
	prefixe[105][5] = "feu"
	prefixe[105][6] = "x"
	
	prefixe[106][1] = "kinési"
	prefixe[106][2] = "c"
	prefixe[106][3] = "m"
	prefixe[106][4] = "s"
	prefixe[106][5] = "mouvement"
	prefixe[106][6] = "i"
	
	prefixe[107][1] = "lacto"
	prefixe[107][2] = "c"
	prefixe[107][3] = "m"
	prefixe[107][4] = "s"
	prefixe[107][5] = "lait"
	prefixe[107][6] = "i"
	
	prefixe[108][1] = "lipo"
	prefixe[108][2] = "c"
	prefixe[108][3] = "f"
	prefixe[108][4] = "s"
	prefixe[108][5] = "graisse"
	prefixe[108][6] = "s"
	
	prefixe[109][1] = "maxi"
	prefixe[109][2] = "c"
	prefixe[109][3] = "m"
	prefixe[109][4] = "s"
	prefixe[109][5] = "plus grand"
	prefixe[109][6] = "i"
	
	prefixe[110][1] = "morpho"
	prefixe[110][2] = "c"
	prefixe[110][3] = "f"
	prefixe[110][4] = "p"
	prefixe[110][5] = "formes"
	prefixe[110][6] = "s"
	
	prefixe[111][1] = "égo"
	prefixe[111][2] = "v"
	prefixe[111][3] = "m"
	prefixe[111][4] = "s"
	prefixe[111][5] = "égo"
	prefixe[111][6] = "i"
	
	prefixe[112][1] = "claustro"
	prefixe[112][2] = "c"
	prefixe[112][3] = "f"
	prefixe[112][4] = "s"
	prefixe[112][5] = "prison"
	prefixe[112][6] = "s"
	
	prefixe[113][1] = "ladro"
	prefixe[113][2] = "v"
	prefixe[113][3] = "f"
	prefixe[113][4] = "s"
	prefixe[113][5] = "avarice"
	prefixe[113][6] = "i"
	
	prefixe[114][1] = "intra"
	prefixe[114][2] = "v"
	prefixe[114][3] = "m"
	prefixe[114][4] = "s"
	prefixe[114][5] = "intérieur"
	prefixe[114][6] = "s"
	
	prefixe[115][1] = "extra"
	prefixe[115][2] = "v"
	prefixe[115][3] = "m"
	prefixe[115][4] = "s"
	prefixe[115][5] = "extérieur"
	prefixe[115][6] = "s"
	
	prefixe[116][1] = "néo"
	prefixe[116][2] = "c"
	prefixe[116][3] = "f"
	prefixe[116][4] = "s"
	prefixe[116][5] = "nouveauté"
	prefixe[116][6] = "s"
	
	prefixe[117][1] = "anté"
	prefixe[117][2] = "v"
	prefixe[117][3] = "m"
	prefixe[117][4] = "s"
	prefixe[117][5] = "avant"
	prefixe[117][6] = "s"
	
	prefixe[118][1] = "intra"
	prefixe[118][2] = "v"
	prefixe[118][3] = "m"
	prefixe[118][4] = "s"
	prefixe[118][5] = "interne"
	prefixe[118][6] = "s"
	
	prefixe[119][1] = "extra"
	prefixe[119][2] = "v"
	prefixe[119][3] = "m"
	prefixe[119][4] = "s"
	prefixe[119][5] = "externe"
	prefixe[119][6] = "s"
	
	prefixe[120][1] = "céphalo"
	prefixe[120][2] = "c"
	prefixe[120][3] = "m"
	prefixe[120][4] = "s"
	prefixe[120][5] = "cerveau"
	prefixe[120][6] = "x"
	
	prefixe[121][1] = "micro"
	prefixe[121][2] = "v"
	prefixe[121][3] = "m"
	prefixe[121][4] = "s"
	prefixe[121][5] = "infiniment petit"
	prefixe[121][6] = "i"
	
	prefixe[122][1] = "macro"
	prefixe[122][2] = "v"
	prefixe[122][3] = "m"
	prefixe[122][4] = "s"
	prefixe[122][5] = "infiniment grand"
	prefixe[122][6] = "i"
	
	prefixe[123][1] = "stomato"
	prefixe[123][2] = "v"
	prefixe[123][3] = "m"
	prefixe[123][4] = "s"
	prefixe[123][5] = "estomac"
	prefixe[123][6] = "s"
	
	prefixe[124][1] = "météo"
	prefixe[124][2] = "c"
	prefixe[124][3] = "m"
	prefixe[124][4] = "s"
	prefixe[124][5] = "temps"
	prefixe[124][6] = "i"
	
	prefixe[125][1] = "carto"
	prefixe[125][2] = "c"
	prefixe[125][3] = "f"
	prefixe[125][4] = "p"
	prefixe[125][5] = "cartes"
	prefixe[125][6] = "s"
	
	prefixe[126][1] = "chiro"
	prefixe[126][2] = "c"
	prefixe[126][3] = "f"
	prefixe[126][4] = "p"
	prefixe[126][5] = "mains"
	prefixe[126][6] = "s"
	
	prefixe[127][1] = "fumi"
	prefixe[127][2] = "c"
	prefixe[127][3] = "f"
	prefixe[127][4] = "s"
	prefixe[127][5] = "fumée"
	prefixe[127][6] = "s"
	
	prefixe[128][1] = "hypno"
	prefixe[128][2] = "c"
	prefixe[128][3] = "m"
	prefixe[128][4] = "s"
	prefixe[128][5] = "sommeil"
	prefixe[128][6] = "i"
	
	prefixe[129][1] = "péri"
	prefixe[129][2] = "v"
	prefixe[129][3] = "m"
	prefixe[129][4] = "p"
	prefixe[129][5] = "alentours"
	prefixe[129][6] = "s"
	
	prefixe[130][1] = "matri"
	prefixe[130][2] = "c"
	prefixe[130][3] = "f"
	prefixe[130][4] = "s"
	prefixe[130][5] = "mère"
	prefixe[130][6] = "s"

	prefixe[131][1] = "patro"
	prefixe[131][2] = "c"
	prefixe[131][3] = "m"
	prefixe[131][4] = "s"
	prefixe[131][5] = "père"
	prefixe[131][6] = "s"

	prefixe[132][1] = "pétroli"
	prefixe[132][2] = "c"
	prefixe[132][3] = "m"
	prefixe[132][4] = "s"
	prefixe[132][5] = "pétrole"
	prefixe[132][6] = "i"

	prefixe[133][1] = "auri"
	prefixe[133][2] = "v"
	prefixe[133][3] = "m"
	prefixe[133][4] = "s"
	prefixe[133][5] = "or"
	prefixe[133][6] = "i"

	prefixe[134][1] = "luci"
	prefixe[134][2] = "c"
	prefixe[134][3] = "f"
	prefixe[134][4] = "s"
	prefixe[134][5] = "lumière"
	prefixe[134][6] = "s"

	prefixe[135][1] = "sado"
	prefixe[135][2] = "c"
	prefixe[135][3] = "m"
	prefixe[135][4] = "p"
	prefixe[135][5] = "sadiques"
	prefixe[135][6] = "s"

	prefixe[136][1] = "satyro"
	prefixe[136][2] = "c"
	prefixe[136][3] = "f"
	prefixe[136][4] = "s"
	prefixe[136][5] = "satyre"
	prefixe[136][6] = "s"

	prefixe[137][1] = "equi"
	prefixe[137][2] = "v"
	prefixe[137][3] = "f"
	prefixe[137][4] = "s"
	prefixe[137][5] = "égalité"
	prefixe[137][6] = "i"

	prefixe[138][1] = "agro"
	prefixe[138][2] = "c"
	prefixe[138][3] = "m"
	prefixe[138][4] = "p"
	prefixe[138][5] = "champs"
	prefixe[138][6] = "s"

	prefixe[139][1] = "vini"
	prefixe[139][2] = "c"
	prefixe[139][3] = "m"
	prefixe[139][4] = "s"
	prefixe[139][5] = "vin"
	prefixe[139][6] = "s"

	prefixe[140][1] = "spéléo"
	prefixe[140][2] = "c"
	prefixe[140][3] = "m"
	prefixe[140][4] = "p"
	prefixe[140][5] = "grottes"
	prefixe[140][6] = "s"
	
	prefixe[141][1] = "fili"
	prefixe[141][2] = "c"
	prefixe[141][3] = "m"
	prefixe[141][4] = "s"
	prefixe[141][5] = "fil"
	prefixe[141][6] = "s"
	
	prefixe[142][1] = "élasto"
	prefixe[142][2] = "v"
	prefixe[142][3] = "m"
	prefixe[142][4] = "s"
	prefixe[142][5] = "élastique"
	prefixe[142][6] = "s"
	
	prefixe[143][1] = "scléro"
	prefixe[143][2] = "c"
	prefixe[143][3] = "f"
	prefixe[143][4] = "s"
	prefixe[143][5] = "dureté"
	prefixe[143][6] = "s"
	
	prefixe[144][1] = "cani"
	prefixe[144][2] = "c"
	prefixe[144][3] = "m"
	prefixe[144][4] = "p"
	prefixe[144][5] = "chiens"
	prefixe[144][6] = "s"
	
	prefixe[145][1] = "belli"
	prefixe[145][2] = "c"
	prefixe[145][3] = "f"
	prefixe[145][4] = "s"
	prefixe[145][5] = "guerre"
	prefixe[145][6] = "s"
	
	prefixe[146][1] = "scato"
	prefixe[146][2] = "c"
	prefixe[146][3] = "f"
	prefixe[146][4] = "s"
	prefixe[146][5] = "merde"
	prefixe[146][6] = "s"
	
	prefixe[147][1] = "techno"
	prefixe[147][2] = "c"
	prefixe[147][3] = "f"
	prefixe[147][4] = "s"
	prefixe[147][5] = "technique"
	prefixe[147][6] = "s"
	
	prefixe[148][1] = "arachno"
	prefixe[148][2] = "v"
	prefixe[148][3] = "f"
	prefixe[148][4] = "s"
	prefixe[148][5] = "araignée"
	prefixe[148][6] = "s"
	
	prefixe[149][1] = "besti"
	prefixe[149][2] = "v"
	prefixe[149][3] = "m"
	prefixe[149][4] = "s"
	prefixe[149][5] = "animal"
	prefixe[149][6] = "aux"
	
	prefixe[150][1] = "ciné"
	prefixe[150][2] = "c"
	prefixe[150][3] = "m"
	prefixe[150][4] = "s"
	prefixe[150][5] = "mouvement"
	prefixe[150][6] = "s"
	
	prefixe[151][1] = "rati"
	prefixe[151][2] = "c"
	prefixe[151][3] = "m"
	prefixe[151][4] = "p"
	prefixe[151][5] = "rats"
	prefixe[151][6] = "s"
	
	prefixe[152][1] = "syn"
	prefixe[152][2] = "c"
	prefixe[152][3] = "f"
	prefixe[152][4] = "s"
	prefixe[152][5] = "communauté"
	prefixe[152][6] = "s"
	
	prefixe[153][1] = "chrono"
	prefixe[153][2] = "c"
	prefixe[153][3] = "m"
	prefixe[153][4] = "s"
	prefixe[153][5] = "temps"
	prefixe[153][6] = "i"
	
	prefixe[154][1] = "flori"
	prefixe[154][2] = "c"
	prefixe[154][3] = "f"
	prefixe[154][4] = "p"
	prefixe[154][5] = "fleurs"
	prefixe[154][6] = "s"
	
	prefixe[155][1] = "mamo"
	prefixe[155][2] = "c"
	prefixe[155][3] = "m"
	prefixe[155][4] = "p"
	prefixe[155][5] = "nichons"
	prefixe[155][6] = "s"
	
	prefixe[156][1] = "coni"
	prefixe[156][2] = "c"
	prefixe[156][3] = "m"
	prefixe[156][4] = "s"
	prefixe[156][5] = "cône"
	prefixe[156][6] = "s"
	
	prefixe[157][1] = "cruci"
	prefixe[157][2] = "c"
	prefixe[157][3] = "f"
	prefixe[157][4] = "s"
	prefixe[157][5] = "croix"
	prefixe[157][6] = "i"
	
	prefixe[158][1] = "miso"
	prefixe[158][2] = "c"
	prefixe[158][3] = "f"
	prefixe[158][4] = "s"
	prefixe[158][5] = "haine"
	prefixe[158][6] = "i"
	
	prefixe[159][1] = "hétéro"
	prefixe[159][2] = "v"
	prefixe[159][3] = "m"
	prefixe[159][4] = "s"
	prefixe[159][5] = "autre"
	prefixe[159][6] = "s"
	
	prefixe[160][1] = "pédé"
	prefixe[160][2] = "c"
	prefixe[160][3] = "f"
	prefixe[160][4] = "s"
	prefixe[160][5] = "pédale"
	prefixe[160][6] = "s"
	
	prefixe[161][1] = "idô"
	prefixe[161][2] = "v"
	prefixe[161][3] = "f"
	prefixe[161][4] = "s"
	prefixe[161][5] = "idôle"
	prefixe[161][6] = "s"
	
	prefixe[162][1] = "ov"
	prefixe[162][2] = "v"
	prefixe[162][3] = "m"
	prefixe[162][4] = "s"
	prefixe[162][5] = "oeuf"
	prefixe[162][6] = "s"
	
	prefixe[163][1] = "cyclo"
	prefixe[163][2] = "c"
	prefixe[163][3] = "m"
	prefixe[163][4] = "s"
	prefixe[163][5] = "vélo"
	prefixe[163][6] = "s"
	
	// Suffixes
	
	suffixe[1][1] = "logue" //suffixe
	suffixe[1][2] = "de l'" // raccord quand la chaine 2 commence par une voyelle
	suffixe[1][3] = "du" // raccord quand la chaine 2 commence par un mot masculin singulier
	suffixe[1][4] = "de la" // raccord quand la chaine 2 commence par un mot féminin singulier
	suffixe[1][5] = "des" // raccord quand la chaine 2 commence par un mot pluriel
	suffixe[1][6] = "spécialiste" // définition du suffixe pour la chaine 1
	suffixe[1][7] = "i" // préférence pour le genre et le nombre du préfixe m=masculin f=féminin s=singulier p=pluriel i=indifférent
			
	suffixe[2][1] = "pathe"
	suffixe[2][2] = "l'"
	suffixe[2][3] = "le"
	suffixe[2][4] = "la"
	suffixe[2][5] = "les"
	suffixe[2][6] = "qui pratique"
	suffixe[2][7] = "i"
	
	suffixe[3][1] = "mane"
	suffixe[3][2] = "l'"
	suffixe[3][3] = "le"
	suffixe[3][4] = "la"
	suffixe[3][5] = "les"
	suffixe[3][6] = "qui apprécie"
	suffixe[3][7] = "i"
	
	suffixe[4][1] = "page"
	suffixe[4][2] = "de l'"
	suffixe[4][3] = "du"
	suffixe[4][4] = "de la "
	suffixe[4][5] = "des"
	suffixe[4][6] = "ensemble"
	suffixe[4][7] = "i"
	
	suffixe[5][1] = "sphère"
	suffixe[5][2] = "de l'"
	suffixe[5][3] = "du"
	suffixe[5][4] = "de la"
	suffixe[5][5] = "des"
	suffixe[5][6] = "entourage"
	suffixe[5][7] = "i"
	
	suffixe[6][1] = "phone"
	suffixe[6][2] = "à l'"
	suffixe[6][3] = "au"
	suffixe[6][4] = "à la"
	suffixe[6][5] = "aux"
	suffixe[6][6] = "instrument pour parler"
	suffixe[6][7] = "i"
	
	suffixe[7][1] = "cution"
	suffixe[7][2] = "l'"
	suffixe[7][3] = "le"
	suffixe[7][4] = "la"
	suffixe[7][5] = "les"
	suffixe[7][6] = "accident provoqué par"
	suffixe[7][7] = "i"
	
	suffixe[8][1] = "nique"
	suffixe[8][2] = "de l'"
	suffixe[8][3] = "du"
	suffixe[8][4] = "de la"
	suffixe[8][5] = "des"
	suffixe[8][6] = "science"
	suffixe[8][7] = "i"

	suffixe[9][1] = "pède"
	suffixe[9][2] = "d'"
	suffixe[9][3] = "de"
	suffixe[9][4] = "de"
	suffixe[9][5] = "de"
	suffixe[9][6] = "qui a des pieds"
	suffixe[9][7] = "s"
	
	suffixe[10][1] = "fuge"
	suffixe[10][2] = "l'"
	suffixe[10][3] = "le"
	suffixe[10][4] = "la"
	suffixe[10][5] = "les"
	suffixe[10][6] = "qui fait fuir"
	suffixe[10][7] = "i"
	
	suffixe[11][1] = "porté"
	suffixe[11][2] = "l'"
	suffixe[11][3] = "le"
	suffixe[11][4] = "la"
	suffixe[11][5] = "les"
	suffixe[11][6] = "qui est transporté par"
	suffixe[11][7] = "i"
	
	suffixe[12][1] = "cien"
	suffixe[12][2] = "de l'"
	suffixe[12][3] = "du"
	suffixe[12][4] = "de la"
	suffixe[12][5] = "des"
	suffixe[12][6] = "spécialiste"
	suffixe[12][7] = "i"
	
	suffixe[13][1] = "matique"
	suffixe[13][2] = "de l'"
	suffixe[13][3] = "du"
	suffixe[13][4] = "de la"
	suffixe[13][5] = "des"
	suffixe[13][6] = "science"
	suffixe[13][7] = "i"

	suffixe[14][1] = "quète"
	suffixe[14][2] = "de l'"
	suffixe[14][3] = "du"
	suffixe[14][4] = "de la"
	suffixe[14][5] = "des"
	suffixe[14][6] = "recherche"
	suffixe[14][7] = "i"
	
	suffixe[15][1] = "tracté"
	suffixe[15][2] = "l'"
	suffixe[15][3] = "un"
	suffixe[15][4] = "une"
	suffixe[15][5] = "des"
	suffixe[15][6] = "tracté par"
	suffixe[15][7] = "i"
	
	suffixe[16][1] = "cide"
	suffixe[16][2] = "l'"
	suffixe[16][3] = "le"
	suffixe[16][4] = "la"
	suffixe[16][5] = "les"
	suffixe[16][6] = "qui tue"
	suffixe[16][7] = "i"
	
	suffixe[17][1] = "morphe"
	suffixe[17][2] = "d'"
	suffixe[17][3] = "de"
	suffixe[17][4] = "de"
	suffixe[17][5] = "de"
	suffixe[17][6] = "qui est en forme"
	suffixe[17][7] = "i"
	
	suffixe[18][1] = "niste"
	suffixe[18][2] = "de l'"
	suffixe[18][3] = "du"
	suffixe[18][4] = "de la"
	suffixe[18][5] = "des"
	suffixe[18][6] = "partisan"
	suffixe[18][7] = "i"

	suffixe[19][1] = "vore"
	suffixe[19][2] = "d'"
	suffixe[19][3] = "de"
	suffixe[19][4] = "de"
	suffixe[19][5] = "de"
	suffixe[19][6] = "qui se nourrit"
	suffixe[19][7] = "p"
	
	suffixe[20][1] = "culteur"
	suffixe[20][2] = "l'"
	suffixe[20][3] = "le"
	suffixe[20][4] = "la"
	suffixe[20][5] = "les"
	suffixe[20][6] = "qui cultive"
	suffixe[20][7] = "p"
	
	suffixe[21][1] = "drame"
	suffixe[21][2] = "l'"
	suffixe[21][3] = "le"
	suffixe[21][4] = "la"
	suffixe[21][5] = "les"
	suffixe[21][6] = "pièce où l'action concerne"
	suffixe[21][7] = "i"
	
	suffixe[22][1] = "cure"
	suffixe[22][2] = "l'"
	suffixe[22][3] = "le"
	suffixe[22][4] = "la"
	suffixe[22][5] = "les"
	suffixe[22][6] = "soins par"
	suffixe[22][7] = "i"
	
	suffixe[23][1] = "claste"
	suffixe[23][2] = "l'"
	suffixe[23][3] = "le"
	suffixe[23][4] = "la"
	suffixe[23][5] = "les"
	suffixe[23][6] = "qui détruit"
	suffixe[23][7] = "i"

	suffixe[24][1] = "mètre"
	suffixe[24][2] = "l'"
	suffixe[24][3] = "le"
	suffixe[24][4] = "la"
	suffixe[24][5] = "les"
	suffixe[24][6] = "instrument qui mesure"
	suffixe[24][7] = "i"
	
	suffixe[25][1] = "naute"
	suffixe[25][2] = "l'"
	suffixe[25][3] = "le"
	suffixe[25][4] = "la"
	suffixe[25][5] = "les"
	suffixe[25][6] = "qui voyage dans"
	suffixe[25][7] = "i"
	
	suffixe[26][1] = "clique"
	suffixe[26][2] = "d'"
	suffixe[26][3] = "de"
	suffixe[26][4] = "de"
	suffixe[26][5] = "de"
	suffixe[26][6] = "bande"
	suffixe[26][7] = "p"
	
	suffixe[27][1] = "graphe"
	suffixe[27][2] = "l'"
	suffixe[27][3] = "le"
	suffixe[27][4] = "la"
	suffixe[27][5] = "les"
	suffixe[27][6] = "qui écrit sur"
	suffixe[27][7] = "i"
	
	suffixe[28][1] = "raste"
	suffixe[28][2] = "l'"
	suffixe[28][3] = "le"
	suffixe[28][4] = "la"
	suffixe[28][5] = "les"
	suffixe[28][6] = "personne qui a des rapports avec"
	suffixe[28][7] = "i"

	suffixe[29][1] = "scope"
	suffixe[29][2] = "l'"
	suffixe[29][3] = "le"
	suffixe[29][4] = "la"
	suffixe[29][5] = "les"
	suffixe[29][6] = "appareil optique pour voir"
	suffixe[29][7] = "i"
	
	suffixe[30][1] = "pompe"
	suffixe[30][2] = "l'"
	suffixe[30][3] = "le"
	suffixe[30][4] = "la"
	suffixe[30][5] = "les"
	suffixe[30][6] = "engin qui pompe"
	suffixe[30][7] = "i"
	
	suffixe[31][1] = "rama"
	suffixe[31][2] = "l'"
	suffixe[31][3] = "le"
	suffixe[31][4] = "la"
	suffixe[31][5] = "les"
	suffixe[31][6] = "vue imprenable sur"
	suffixe[31][7] = "i"
	
	suffixe[32][1] = "some"
	suffixe[32][2] = "d'"
	suffixe[32][3] = "de"
	suffixe[32][4] = "de"
	suffixe[32][5] = "de"
	suffixe[32][6] = "qui a un corps en forme"
	suffixe[32][7] = "s"
	
	suffixe[33][1] = "thée"
	suffixe[33][2] = "de l'"
	suffixe[33][3] = "du"
	suffixe[33][4] = "de la"
	suffixe[33][5] = "des"
	suffixe[33][6] = "qui croit au dieu"
	suffixe[33][7] = "i"

	suffixe[34][1] = "thèque"
	suffixe[34][2] = "de l'"
	suffixe[34][3] = "du"
	suffixe[34][4] = "de la"
	suffixe[34][5] = "des"
	suffixe[34][6] = "armoire contenant"
	suffixe[34][7] = "i"
	
	suffixe[35][1] = "thérapie"
	suffixe[35][2] = "l'"
	suffixe[35][3] = "le"
	suffixe[35][4] = "la"
	suffixe[35][5] = "les"
	suffixe[35][6] = "soins par"
	suffixe[35][7] = "i"
	
	suffixe[36][1] = "throphe"
	suffixe[36][2] = "d'"
	suffixe[36][3] = "de"
	suffixe[36][4] = "de"
	suffixe[36][5] = "de"
	suffixe[36][6] = "qui se nourrit"
	suffixe[36][7] = "i"
	
	suffixe[37][1] = "crane"
	suffixe[37][2] = "d'"
	suffixe[37][3] = "de"
	suffixe[37][4] = "de"
	suffixe[37][5] = "de"
	suffixe[37][6] = "qui a une tête"
	suffixe[37][7] = "s"
	
	suffixe[38][1] = "cole"
	suffixe[38][2] = "l'"
	suffixe[38][3] = "le"
	suffixe[38][4] = "la"
	suffixe[38][5] = "les"
	suffixe[38][6] = "qui cultive"
	suffixe[38][7] = "i"

	suffixe[39][1] = "fer"
	suffixe[39][2] = "l'"
	suffixe[39][3] = "le"
	suffixe[39][4] = "la"
	suffixe[39][5] = "les"
	suffixe[39][6] = "qui porte"
	suffixe[39][7] = "i"
	
	suffixe[40][1] = "drome"
	suffixe[40][2] = "d'"
	suffixe[40][3] = "de"
	suffixe[40][4] = "de"
	suffixe[40][5] = "de"
	suffixe[40][6] = "où on voit des courses"
	suffixe[40][7] = "p"
		
	suffixe[41][1] = "forme"
	suffixe[41][2] = "d'"
	suffixe[41][3] = "de"
	suffixe[41][4] = "de"
	suffixe[41][5] = "de"
	suffixe[41][6] = "en forme"
	suffixe[41][7] = "s"
	
	suffixe[42][1] = "fuge"
	suffixe[42][2] = "à l'"
	suffixe[42][3] = "au"
	suffixe[42][4] = "à la"
	suffixe[42][5] = "aux"
	suffixe[42][6] = "imperméable"
	suffixe[42][7] = "i"
	
	suffixe[43][1] = "génèse"
	suffixe[43][2] = "de l'"
	suffixe[43][3] = "du"
	suffixe[43][4] = "de la"
	suffixe[43][5] = "des"
	suffixe[43][6] = "création"
	suffixe[43][7] = "i"

	suffixe[44][1] = "mnésie"
	suffixe[44][2] = "de l'"
	suffixe[44][3] = "du"
	suffixe[44][4] = "de la"
	suffixe[44][5] = "des"
	suffixe[44][6] = "action de se souvenir"
	suffixe[44][7] = "i"
	
	suffixe[45][1] = "port"
	suffixe[45][2] = "l'"
	suffixe[45][3] = "le"
	suffixe[45][4] = "la"
	suffixe[45][5] = "les"
	suffixe[45][6] = "piste d'aterrissage pour"
	suffixe[45][7] = "i"
	
	suffixe[46][1] = "phagie"
	suffixe[46][2] = "d'"
	suffixe[46][3] = "de"
	suffixe[46][4] = "de"
	suffixe[46][5] = "de"
	suffixe[46][6] = "l'estomac plein"
	suffixe[46][7] = "p"
	
	suffixe[47][1] = "grimpeur"
	suffixe[47][2] = "l'"
	suffixe[47][3] = "le"
	suffixe[47][4] = "la"
	suffixe[47][5] = "les"
	suffixe[47][6] = "qui escalade"
	suffixe[47][7] = "i"
	
	suffixe[48][1] = "marcheur"
	suffixe[48][2] = "l'"
	suffixe[48][3] = "le"
	suffixe[48][4] = "la"
	suffixe[48][5] = "les"
	suffixe[48][6] = "qui marche sur"
	suffixe[48][7] = "i"

	suffixe[49][1] = "sauteur"
	suffixe[49][2] = "l'"
	suffixe[49][3] = "le"
	suffixe[49][4] = "la"
	suffixe[49][5] = "les"
	suffixe[49][6] = "qui saute sur"
	suffixe[49][7] = "i"
		
	suffixe[50][1] = "cracheur"
	suffixe[50][2] = "l'"
	suffixe[50][3] = "le"
	suffixe[50][4] = "la"
	suffixe[50][5] = "les"
	suffixe[50][6] = "qui crache sur"
	suffixe[50][7] = "i"
	
	suffixe[51][1] = "souffleur"
	suffixe[51][2] = "l'"
	suffixe[51][3] = "le"
	suffixe[51][4] = "la"
	suffixe[51][5] = "les"
	suffixe[51][6] = "qui souffle sur"
	suffixe[51][7] = "i"
	
	suffixe[52][1] = "glisseur"
	suffixe[52][2] = "l'"
	suffixe[52][3] = "le"
	suffixe[52][4] = "la"
	suffixe[52][5] = "les"
	suffixe[52][6] = "qui glisse sur"
	suffixe[52][7] = "i"
	
	suffixe[53][1] = "planeur"
	suffixe[53][2] = "l'"
	suffixe[53][3] = "le"
	suffixe[53][4] = "la"
	suffixe[53][5] = "les"
	suffixe[53][6] = "qui plane sur"
	suffixe[53][7] = "i"

	suffixe[54][1] = "porteur"
	suffixe[54][2] = "l'"
	suffixe[54][3] = "le"
	suffixe[54][4] = "la"
	suffixe[54][5] = "les"
	suffixe[54][6] = "qui porte"
	suffixe[54][7] = "i"
	
	suffixe[55][1] = "vendeur"
	suffixe[55][2] = "de l'"
	suffixe[55][3] = "du"
	suffixe[55][4] = "de la"
	suffixe[55][5] = "des"
	suffixe[55][6] = "qui vend"
	suffixe[55][7] = "i"

	suffixe[56][1] = "phare"
	suffixe[56][2] = "l'"
	suffixe[56][3] = "le"
	suffixe[56][4] = "la"
	suffixe[56][5] = "les"
	suffixe[56][6] = "appareil pour éclairer"
	suffixe[56][7] = "i"
	
	suffixe[57][1] = "fard"
	suffixe[57][2] = "l'"
	suffixe[57][3] = "le"
	suffixe[57][4] = "la"
	suffixe[57][5] = "les"
	suffixe[57][6] = "produit pour maquiller"
	suffixe[57][7] = "i"
	
	suffixe[58][1] = "four"
	suffixe[58][2] = "l'"
	suffixe[58][3] = "le"
	suffixe[58][4] = "la"
	suffixe[58][5] = "les"
	suffixe[58][6] = "appareil pour cuire"
	suffixe[58][7] = "i"

	suffixe[59][1] = "gonfleur"
	suffixe[59][2] = "l'"
	suffixe[59][3] = "le"
	suffixe[59][4] = "la"
	suffixe[59][5] = "les"
	suffixe[59][6] = "qui gonfle"
	suffixe[59][7] = "i"
		
	suffixe[60][1] = "siffleur"
	suffixe[60][2] = "l'"
	suffixe[60][3] = "le"
	suffixe[60][4] = "la"
	suffixe[60][5] = "les"
	suffixe[60][6] = "qui siffle sur"
	suffixe[60][7] = "i"
	
	suffixe[61][1] = "céphale"
	suffixe[61][2] = "d'"
	suffixe[61][3] = "de"
	suffixe[61][4] = "de"
	suffixe[61][5] = "de"
	suffixe[61][6] = "qui a un cerveau"
	suffixe[61][7] = "s"
	
	suffixe[62][1] = "mancie"
	suffixe[62][2] = "l'"
	suffixe[62][3] = "le"
	suffixe[62][4] = "la"
	suffixe[62][5] = "les"
	suffixe[62][6] = "divination par"
	suffixe[62][7] = "i"
	
	suffixe[63][1] = "pige"
	suffixe[63][2] = "d'"
	suffixe[63][3] = "de"
	suffixe[63][4] = "de"
	suffixe[63][5] = "de"
	suffixe[63][6] = "qui a des fesses"
	suffixe[63][7] = "s"

	suffixe[64][1] = "gyre"
	suffixe[64][2] = "de l'"
	suffixe[64][3] = "du"
	suffixe[64][4] = "de la"
	suffixe[64][5] = "des"
	suffixe[64][6] = "qui tourne autour"
	suffixe[64][7] = "i"
	
	suffixe[65][1] = "nyme"
	suffixe[65][2] = "d'"
	suffixe[65][3] = "de"
	suffixe[65][4] = "de"
	suffixe[65][5] = "de"
	suffixe[65][6] = "qui a un nom"
	suffixe[65][7] = "s"
	
	suffixe[66][1] = "fère"
	suffixe[66][2] = "de l'"
	suffixe[66][3] = "du"
	suffixe[66][4] = "de la"
	suffixe[66][5] = "des"
	suffixe[66][6] = "qui contient"
	suffixe[66][7] = "i"
	
	suffixe[67][1] = "lâtre"
	suffixe[67][2] = "l'"
	suffixe[67][3] = "le"
	suffixe[67][4] = "la"
	suffixe[67][5] = "les"
	suffixe[67][6] = "qui adore"
	suffixe[67][7] = "i"
	
	suffixe[68][1] = "viseur"
	suffixe[68][2] = "l'"
	suffixe[68][3] = "le"
	suffixe[68][4] = "la"
	suffixe[68][5] = "les"
	suffixe[68][6] = "accessoire pour viser"
	suffixe[68][7] = "i"

	suffixe[69][1] = "vision"
	suffixe[69][2] = "l'"
	suffixe[69][3] = "le"
	suffixe[69][4] = "la"
	suffixe[69][5] = "les"
	suffixe[69][6] = "action de voir"
	suffixe[69][7] = "i"
		
	suffixe[70][1] = "thérapeute"
	suffixe[70][2] = "l'"
	suffixe[70][3] = "le"
	suffixe[70][4] = "la"
	suffixe[70][5] = "les"
	suffixe[70][6] = "personne qui soigne par"
	suffixe[70][7] = "i"
	
	suffixe[71][1] = "sculpteur"
	suffixe[71][2] = "l'"
	suffixe[71][3] = "le"
	suffixe[71][4] = "la"
	suffixe[71][5] = "les"
	suffixe[71][6] = "qui sculpte"
	suffixe[71][7] = "i"
	
	suffixe[72][1] = "peintre"
	suffixe[72][2] = "l'"
	suffixe[72][3] = "le"
	suffixe[72][4] = "la"
	suffixe[72][5] = "les"
	suffixe[72][6] = "qui peint"
	suffixe[72][7] = "i"
	
	suffixe[73][1] = "rampeur"
	suffixe[73][2] = "l'"
	suffixe[73][3] = "le"
	suffixe[73][4] = "la"
	suffixe[73][5] = "les"
	suffixe[73][6] = "qui rampe dans"
	suffixe[73][7] = "i"

	suffixe[74][1] = "nageur"
	suffixe[74][2] = "l'"
	suffixe[74][3] = "le"
	suffixe[74][4] = "la"
	suffixe[74][5] = "les"
	suffixe[74][6] = "qui nage dans"
	suffixe[74][7] = "i"
	
	suffixe[75][1] = "suceur"
	suffixe[75][2] = "l'"
	suffixe[75][3] = "le"
	suffixe[75][4] = "la"
	suffixe[75][5] = "les"
	suffixe[75][6] = "qui aspire"
	suffixe[75][7] = "i"
	
	suffixe[76][1] = "colle"
	suffixe[76][2] = "l'"
	suffixe[76][3] = "le"
	suffixe[76][4] = "la"
	suffixe[76][5] = "les"
	suffixe[76][6] = "produit pour fixer"
	suffixe[76][7] = "i"
	
	suffixe[77][1] = "gérant"
	suffixe[77][2] = "l'"
	suffixe[77][3] = "le"
	suffixe[77][4] = "la"
	suffixe[77][5] = "les"
	suffixe[77][6] = "qui gère"
	suffixe[77][7] = "i"
	
	suffixe[78][1] = "ciste"
	suffixe[78][2] = "de l'"
	suffixe[78][3] = "du"
	suffixe[78][4] = "de la"
	suffixe[78][5] = "des"
	suffixe[78][6] = "qui est partisan"
	suffixe[78][7] = "i"

	suffixe[79][1] = "phage"
	suffixe[79][2] = "l'"
	suffixe[79][3] = "le"
	suffixe[79][4] = "la"
	suffixe[79][5] = "les"
	suffixe[79][6] = "qui mange"
	suffixe[79][7] = "i"
		
	suffixe[80][1] = "mobile"
	suffixe[80][2] = "à l'"
	suffixe[80][3] = "au"
	suffixe[80][4] = "à la"
	suffixe[80][5] = "aux"
	suffixe[80][6] = "qui avance grace"
	suffixe[80][7] = "i"
	
	suffixe[81][1] = "crate"
	suffixe[81][2] = "l'"
	suffixe[81][3] = "le"
	suffixe[81][4] = "la"
	suffixe[81][5] = "les"
	suffixe[81][6] = "qui a le pouvoir sur"
	suffixe[81][7] = "i"
	
	suffixe[82][1] = "gratteur"
	suffixe[82][2] = "l'"
	suffixe[82][3] = "le"
	suffixe[82][4] = "la"
	suffixe[82][5] = "les"
	suffixe[82][6] = "qui gratte"
	suffixe[82][7] = "i"
	
	suffixe[83][1] = "phobe"
	suffixe[83][2] = "de l'"
	suffixe[83][3] = "du"
	suffixe[83][4] = "de la"
	suffixe[83][5] = "des"
	suffixe[83][6] = "qui a horreur"
	suffixe[83][7] = "i"

	suffixe[84][1] = "gène"
	suffixe[84][2] = "de l'"
	suffixe[84][3] = "du"
	suffixe[84][4] = "de la"
	suffixe[84][5] = "des"
	suffixe[84][6] = "qui produit"
	suffixe[84][7] = "i"
	
	suffixe[85][1] = "raptor"
	suffixe[85][2] = "l'"
	suffixe[85][3] = "le"
	suffixe[85][4] = "la"
	suffixe[85][5] = "les"
	suffixe[85][6] = "prédateur qui chasse"
	suffixe[85][7] = "p"
	
	suffixe[86][1] = "bole"
	suffixe[86][2] = "l'"
	suffixe[86][3] = "le"
	suffixe[86][4] = "la"
	suffixe[86][5] = "les"
	suffixe[86][6] = "qui lance"
	suffixe[86][7] = "i"
	
	suffixe[87][1] = "oïde"
	suffixe[87][2] = "de l'"
	suffixe[87][3] = "du"
	suffixe[87][4] = "de la"
	suffixe[87][5] = "des"
	suffixe[87][6] = "qui a la forme"
	suffixe[87][7] = "i"
	
	suffixe[88][1] = "mines"
	suffixe[88][2] = "l'"
	suffixe[88][3] = "le"
	suffixe[88][4] = "la"
	suffixe[88][5] = "les"
	suffixe[88][6] = "engins qui font exploser"
	suffixe[88][7] = "i"

	suffixe[89][1] = "chtone"
	suffixe[89][2] = "de l'"
	suffixe[89][3] = "du"
	suffixe[89][4] = "de la"
	suffixe[89][5] = "des"
	suffixe[89][6] = "qui est originaire"
	suffixe[89][7] = "i"
		
	suffixe[90][1] = "thèse"
	suffixe[90][2] = "l'"
	suffixe[90][3] = "le"
	suffixe[90][4] = "la"
	suffixe[90][5] = "les"
	suffixe[90][6] = "théorie concernant"
	suffixe[90][7] = "i"
	
	suffixe[91][1] = "donte"
	suffixe[91][2] = "d'"
	suffixe[91][3] = "de"
	suffixe[91][4] = "de"
	suffixe[91][5] = "de"
	suffixe[91][6] = "qui a des dents"
	suffixe[91][7] = "i"
	
	suffixe[92][1] = "practie"
	suffixe[92][2] = "l'"
	suffixe[92][3] = "le"
	suffixe[92][4] = "la"
	suffixe[92][5] = "les"
	suffixe[92][6] = "traitement par"
	suffixe[92][7] = "i"
	
	suffixe[93][1] = "sexuel"
	suffixe[93][2] = "l'"
	suffixe[93][3] = "le"
	suffixe[93][4] = "la"
	suffixe[93][5] = "les"
	suffixe[93][6] = "qui pratique le sexe avec"
	suffixe[93][7] = "i"

	suffixe[94][1] = "historique"
	suffixe[94][2] = "de l'"
	suffixe[94][3] = "du"
	suffixe[94][4] = "de la"
	suffixe[94][5] = "des"
	suffixe[94][6] = "qui concerne l'histoire"
	suffixe[94][7] = "i"
	
	suffixe[95][1] = "chipoteur"
	suffixe[95][2] = "l'"
	suffixe[95][3] = "le"
	suffixe[95][4] = "la"
	suffixe[95][5] = "les"
	suffixe[95][6] = "qui chipote"
	suffixe[95][7] = "i"
	
	suffixe[96][1] = "palpeur"
	suffixe[96][2] = "l'"
	suffixe[96][3] = "le"
	suffixe[96][4] = "la"
	suffixe[96][5] = "les"
	suffixe[96][6] = "qui palpe"
	suffixe[96][7] = "i"
	
	suffixe[97][1] = "lècheur"
	suffixe[97][2] = "l'"
	suffixe[97][3] = "le"
	suffixe[97][4] = "la"
	suffixe[97][5] = "les"
	suffixe[97][6] = "qui lèche"
	suffixe[97][7] = "i"
	
	suffixe[98][1] = "valseur"
	suffixe[98][2] = "l'"
	suffixe[98][3] = "le"
	suffixe[98][4] = "la"
	suffixe[98][5] = "les"
	suffixe[98][6] = "qui danse avec"
	suffixe[98][7] = "i"

	suffixe[99][1] = "arque"
	suffixe[99][2] = "l'"
	suffixe[99][3] = "le"
	suffixe[99][4] = "la"
	suffixe[99][5] = "les"
	suffixe[99][6] = "qui commande"
	suffixe[99][7] = "i"
		
	suffixe[100][1] = "philie"
	suffixe[100][2] = "l'"
	suffixe[100][3] = "le"
	suffixe[100][4] = "la"
	suffixe[100][5] = "les"
	suffixe[100][6] = "avoir de l'amitié pour"
	suffixe[100][7] = "i"
	
	suffixe[101][1] = "riste"
	suffixe[101][2] = "l'"
	suffixe[101][3] = "le"
	suffixe[101][4] = "la"
	suffixe[101][5] = "les"
	suffixe[101][6] = "qui pratique"
	suffixe[101][7] = "i"
	
	suffixe[102][1] = "phile"
	suffixe[102][2] = "d'"
	suffixe[102][3] = "de"
	suffixe[102][4] = "de"
	suffixe[102][5] = "des"
	suffixe[102][6] = "qui est amateur "
	suffixe[102][7] = "i"
	
	function fermer()
	{
		opener=self;
		self.close();
	}
	
	function metsing(motplur)
	{
		strprov = motplur;
		switch (prefixe[numpref][6])
		{
			case "i":
				strprov1 = strprov;
				break;
			case "s":
				var a = strprov.length;
				var b = a - 1;
				strprov1 = strprov.substring(0,b);
				break;
			case "x":
				var a = strprov.length;
				var b = a - 1;
				strprov1 = strprov.substring(0,b);
				break;
			case "aux":
				var a = strprov.length;
				var b = a - 3;
				strprov2 = strprov.substring(0,b);
				strprov1 = strprov2 + "al";
				break;
		}
		return strprov1;
	}
	
	function metplur(motsing)
	{
		strprov = motsing;
		switch (prefixe[numpref][6])
		{
			case "i":
				strprov1 = strprov;
				break;
			case "s":
				strprov1 = strprov + "s";
				break;
			case "x":
				strprov1 = strprov + "x";
				break;
			case "aux":
				var a = strprov.length;
				var b = a - 2;
				strprov2 = strprov.substring(0,b);
				strprov1 = strprov2 + "aux";
				break;	
		}
		return strprov1;
	}
	
	function changeCadre()
	{
		clearInterval(pauseCadre);
		var tra = document.getElementById("cp")
		tra.src = "cadretr.gif"
		var trb = document.getElementById("cs")
		trb.src = "cadretr.gif"
		if (! bolauto)
		{
			var trm = document.getElementById("btm")
			trm.disabled = 0;
			var trbut = document.getElementById("ast")
			trbut.disabled = 0;
		}
		var i = (Math.floor(Math.random()*161));// tirage du préfixe du mot. A modifier si on ajoute des préfixes
		++i;// n° tiré + 1 ( entre 1 et 162)
		numpref = i;
		var ch1 = prefixe[i][1];
		trm = document.getElementById("nompref");
		trm.value = ch1;// affichage préfixe
		
		var j = (Math.floor(Math.random()*100));// tirage du suffixe du mot. A modifier si on ajoute des suffixes
		++j;// n° tiré + 1 ( entre 1 et 100)
		numsuf = j;
		var ch2 = suffixe[j][1];
		var trd = document.getElementById("nomsuf");
		trd.value = ch2;// affichage suffixe
		
		var mot = ch1 + ch2;
		var tre = document.getElementById("affnom");
		tre.value = mot;// affichage  du mot tiré
		
		// détermination de la définition
		chaine1 = suffixe[numsuf][6];// première partie de la définition du mot
		chaine2 = prefixe[numpref][5];// deuxième partie de la définition du mot
										
		var trc;
		 // mise au pluriel ou au singulier du préfixe suivant préférence
		if (prefixe[numsuf][6] != "i")
		{
			switch (suffixe[numsuf][7])
			{
				case "s":
					if (prefixe[numpref][4] != "s")
					{
					motsing = metsing(chaine2);
					chaine2 = motsing;
					prefixe[numpref][4] = "s";
					}
					break;
				case "p":
					if (prefixe[numpref][4] != "p")
					{
					motplur = metplur(chaine2);
					chaine2 = motplur;
					prefixe[numpref][4] = "p";
					}
					break;
			}
		}
			
		// détermination de la chaine de raccord
		if (prefixe[numpref][3] == "m" && prefixe[numpref][4] == "s" && prefixe[numpref][2] != "v")
		{
			chainemil = suffixe[numsuf][3];
		}
		
		if (prefixe[numpref][3] == "f" && prefixe[numpref][4] == "s" && prefixe[numpref][2] != "v")
		{
			chainemil = suffixe[numsuf][4];
		}
		
		if (prefixe[numpref][4] == "p")
		{
			chainemil = suffixe[numsuf][5];
		}
								
		if (prefixe[numpref][4] == "s" && prefixe[numpref][2] == "v")
		{	
			chainemil = suffixe[numsuf][2];
		}
		
						
		// gags
		if (numpref == 18 && numsuf == 9)
		{
			affichdef = "Pour tous renseignements - Eddy Merckx - Frans Schachstraat 29 -B 1731 Zellik";
		}
		else if (numpref == 2 && numsuf == 82)
		{
			affichdef = "Qui ne se gratte que d'un seul côté";
		}
		else if (numpref == 87 && numsuf == 75)
		{
			affichdef = "Draculaaaaaaaa";
		}
		else if (numpref == 25 && numsuf == 37)
		{
			affichdef = "Qui a une multitude de têtes ! Ouille ouille ouille";
		}
		else if (numpref == 156 && numsuf == 37)
		{
			affichdef = "Qui a une tête de con - oh! pardon en forme de cône";
		}
		else if (numpref == 2 && numsuf == 18)
		{
			affichdef = "partisan de la moitié - si on ajoute le r: ministre partisan du moindre effort";
		}
		else if (numpref == 163 && numsuf == 79)
		{
			affichdef = "Eddy Merckx - eh oui encore lui !";
		}
		
		
		if (chainemil == "de" && prefixe[numpref][4] == "p" && prefixe[numpref][2] == "v")
		{
			chainemil = suffixe[numsuf][2];
		}
			
		affichdef = chaine1 + " " + chainemil + " " + chaine2;// concaténation de la définition
		trc = document.getElementById("defin");// affichage
		trc.value = affichdef;
		
		if (totnbrmot == 25)
		{
			if (confirm("Avez-vous déja rigolé ?  ok pour oui - annuler pour non"))
			{	
				var trf = document.getElementById("araign");
				trf.src = "araignee.gif";
			}
			else {
				alert("C'est sans espoir !");
				fermer();
				}
		}
		
		if (totnbrmot == 100)
		{
			alert("Je commence le décompte pour me suicider - Y en a marre de raconter des conneries ! 30 29 28...");
		}
		
		if (totnbrmot == 300)
		{
			alert("Pas encore fatigué ?");
		}
		if (totnbrmot == 600)
		{
			alert("600 fois ! Je le crois pas. Moi je vais dormir, éteignez en partant.");
		}
	}
	
	function changeMot()// fin du tirage ( bandit manchot) 
	{
		clearInterval(pauseMot);
		if (! autfal) {
		var nomf = document.getElementById("fordic");
		demmot(nomf);
		}
	}
	
	// boutons désactivés pour empêcher les clics trop rapides (blocages)
	function motauto(form)
	{	
		form.afno.value = "";
		bolauto = 1;
		autfal = 0;
		form.led.src = "blink.gif";// led signalant le fonctionnement en automatique
		form.manu.disabled = 1;
		form.autostart.disabled = 1;
		form.autostop.disabled = 0;
	}
	
	function initmanu(form)
	{	
		form.afno.value = "";
		form.manu.disabled = 1;
		form.autostart.disabled = 1;
		bolauto = 0;
	}
	
	function stopauto(form)
	{
		bolauto = 0;
		autfal = 1;
		form.led.src = "off.gif";
		form.manu.disabled = 0;
		form.autostart.disabled = 0;
		form.autostop.disabled = 1;
	}
	
	// début de l'affichage
	function demmot(form)
	{	
		form.afno.value = "";
		form.definition.value = "";
		var nomform = form;
		form.cadrepref.src = "cadremot.gif";
		form.cadresuf.src = "cadremot.gif";
		pauseCadre = setInterval("changeCadre()",3000);
		if (totnbrmot <610 )
		{
			totnbrmot = totnbrmot + 1;
		}
		
		if (bolauto)
		{
			pauseMot = setInterval("changeMot()",12000);
		}
	}
	
	
	
	
	