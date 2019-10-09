exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);
  // Deletes ALL existing entries
  return knex("vessels")
    .del()
    .then(function() {
      return knex.raw("ALTER TABLE " + "vessels" + " AUTO_INCREMENT = 1");
    })
    .then(function() {
      // Inserts seed entries
      return knex("vessels").insert([
        {
          organization_id: 1,
          mmsi: "477913600",
          name: "SS Martha"
        },
        {
          organization_id: 2,
          mmsi: "477913500",
          name: "Boaty Mcboatface"
        },
        {
          organization_id: 3,
          mmsi: "351691000",
          name: "Seven Seas"
        },
        {
          organization_id: 4,
          mmsi: "235094793",
          name: "MS Marie"
        },
        {
          organization_id: 5,
          mmsi: "353530000",
          name: "Opal Fortune"
        },
        {
          organization_id: 6,
          mmsi: 338162000,
          name: "Excellence"
        },
        {
          organization_id: 7,
          mmsi: "477232800",
          name: "Cosco Pisces"
        },
        {
          organization_id: 8,
          mmsi: "369463000",
          name: "John Glenn"
        },
        {
          organization_id: 9,
          mmsi: "205753000",
          name: "Oceania"
        },
        {
          organization_id: 10,
          mmsi: "538004553",
          name: "Sea Qingdao"
        },
        {
          organization_id: 11,
          mmsi: "538005109",
          name: "Sea Maranhao"
        },
        {
          organization_id: 12,
          mmsi: "477118900",
          name: "Shandong Da De"
        },
        {
          organization_id: 13,
          mmsi: "538004900",
          name: "Saham Max"
        },
        {
          organization_id: 14,
          mmsi: "477148200",
          name: "Shandong Da Zhi"
        },
        {
          organization_id: 9,
          mmsi: "432735673",
          name: "HMS Saltash"
        },
        {
          organization_id: 11,
          mmsi: "239781413",
          name: "Sable Lorcha"
        },
        {
          organization_id: 7,
          mmsi: "375909848",
          name: "Academic Vladislav Volkov"
        },
        {
          organization_id: 12,
          mmsi: "508299108",
          name: "Acheron"
        },
        {
          organization_id: 14,
          mmsi: "461524964",
          name: "Aeolus"
        },
        {
          organization_id: 10,
          mmsi: "274607318",
          name: "African Queen"
        },
        {
          organization_id: 4,
          mmsi: "671523331",
          name: "Albatross"
        },
        {
          organization_id: 4,
          mmsi: "203331661",
          name: "Alice May"
        },
        {
          organization_id: 11,
          mmsi: "508907309",
          name: "Altair"
        },
        {
          organization_id: 8,
          mmsi: "314873623",
          name: "Amindra"
        },
        {
          organization_id: 16,
          mmsi: "665807321",
          name: "Anchises"
        },
        {
          organization_id: 13,
          mmsi: "267587800",
          name: "Angelina"
        },
        {
          organization_id: 20,
          mmsi: "258912621",
          name: "Aquanaut 3"
        },
        {
          organization_id: 9,
          mmsi: "261289512",
          name: "Arabella"
        },
        {
          organization_id: 5,
          mmsi: "649954739",
          name: "Araby"
        },
        {
          organization_id: 12,
          mmsi: "615586165",
          name: "Arcadia"
        },
        {
          organization_id: 3,
          mmsi: "206709625",
          name: "Argo"
        },
        {
          organization_id: 3,
          mmsi: "607271919",
          name: "Argonautica"
        },
        {
          organization_id: 7,
          mmsi: "264362307",
          name: "Artemis"
        },
        {
          organization_id: 18,
          mmsi: "603540653",
          name: "Astrea"
        },
        {
          organization_id: 12,
          mmsi: "647174110",
          name: "Atlantic"
        },
        {
          organization_id: 9,
          mmsi: "533695842",
          name: "Aurora"
        },
        {
          organization_id: 1,
          mmsi: "273179581",
          name: "Baalbek"
        },
        {
          organization_id: 8,
          mmsi: "279312148",
          name: "Barracuda"
        },
        {
          organization_id: 3,
          mmsi: "770545195",
          name: "Batavia Queen"
        },
        {
          organization_id: 2,
          mmsi: "378259904",
          name: "Belafonte"
        },
        {
          organization_id: 8,
          mmsi: "329804371",
          name: "Benthic Explorer"
        },
        {
          organization_id: 1,
          mmsi: "546753004",
          name: "Black Hawk"
        },
        {
          organization_id: 9,
          mmsi: "561595225",
          name: "Black Pearl"
        },
        {
          organization_id: 9,
          mmsi: "650860167",
          name: "Black Swan"
        },
        {
          organization_id: 3,
          mmsi: "377441680",
          name: "Borneo Prince"
        },
        {
          organization_id: 13,
          mmsi: "211944303",
          name: "Brandenburg"
        },
        {
          organization_id: 20,
          mmsi: "249193835",
          name: "Britannia"
        },
        {
          organization_id: 1,
          mmsi: "257191419",
          name: "BRP Cagayan de Oro"
        },
        {
          organization_id: 18,
          mmsi: "610183446",
          name: "Caledonia II"
        },
        {
          organization_id: 18,
          mmsi: "669795865",
          name: "Cassidy"
        },
        {
          organization_id: 4,
          mmsi: "529467842",
          name: "Charlotte"
        },
        {
          organization_id: 6,
          mmsi: "301946630",
          name: "Chelsea"
        },
        {
          organization_id: 3,
          mmsi: "413200074",
          name: "China"
        },
        {
          organization_id: 1,
          mmsi: "466616096",
          name: "Cithara"
        },
        {
          organization_id: 13,
          mmsi: "644221988",
          name: "Corsair"
        },
        {
          organization_id: 9,
          mmsi: "262937031",
          name: "Covenant"
        },
        {
          organization_id: 10,
          mmsi: "735292830",
          name: "CPMS Leegood"
        },
        {
          organization_id: 14,
          mmsi: "443325067",
          name: "Daniel Webster"
        },
        {
          organization_id: 17,
          mmsi: "230724415",
          name: "Dazzler"
        },
        {
          organization_id: 17,
          mmsi: "401839013",
          name: "Deep Quest"
        },
        {
          organization_id: 8,
          mmsi: "278597348",
          name: "Demeter"
        },
        {
          organization_id: 5,
          mmsi: "775146398",
          name: "Disco Volante"
        },
        {
          organization_id: 19,
          mmsi: "330829168",
          name: "Dot Calm"
        },
        {
          organization_id: 6,
          mmsi: "516306500",
          name: "Dulcibella"
        },
        {
          organization_id: 14,
          mmsi: "432733509",
          name: "Duncan"
        },
        {
          organization_id: 16,
          mmsi: "557557203",
          name: "Eagle's Shadow"
        },
        {
          organization_id: 20,
          mmsi: "239207288",
          name: "Edinburgh Trader"
        },
        {
          organization_id: 10,
          mmsi: "423490113",
          name: "Eindhoven Lion"
        },
        {
          organization_id: 7,
          mmsi: "512308463",
          name: "Elizabeth Dane"
        },
        {
          organization_id: 1,
          mmsi: "459943110",
          name: "Empress"
        },
        {
          organization_id: 15,
          mmsi: "270234358",
          name: "Erebus"
        },
        {
          organization_id: 2,
          mmsi: "466748825",
          name: "Fenton"
        },
        {
          organization_id: 14,
          mmsi: "351813822",
          name: "Fin of God"
        },
        {
          organization_id: 8,
          mmsi: "634427365",
          name: "General Grant"
        },
        {
          organization_id: 18,
          mmsi: "211294161",
          name: "Genesis"
        },
        {
          organization_id: 10,
          mmsi: "227226778",
          name: "Genoa Maru"
        },
        {
          organization_id: 9,
          mmsi: "565651832",
          name: "Geronimo"
        },
        {
          organization_id: 17,
          mmsi: "735765099",
          name: "Gerrymander"
        },
        {
          organization_id: 17,
          mmsi: "570930709",
          name: "Ghost"
        },
        {
          organization_id: 20,
          mmsi: "364614765",
          name: "Glencairn"
        },
        {
          organization_id: 4,
          mmsi: "306999239",
          name: "Gloria N"
        },
        {
          organization_id: 16,
          mmsi: "201782367",
          name: "Gotha"
        },
        {
          organization_id: 6,
          mmsi: "475629181",
          name: "Grayfish"
        },
        {
          organization_id: 7,
          mmsi: "329805046",
          name: "Grenouille Frénétique"
        },
        {
          organization_id: 6,
          mmsi: "370348702",
          name: "Grossadler"
        },
        {
          organization_id: 18,
          mmsi: "259157312",
          name: "Großadmiral Dönitz"
        },
        {
          organization_id: 3,
          mmsi: "348933918",
          name: "Großadmiral Raeder"
        },
        {
          organization_id: 20,
          mmsi: "410569261",
          name: "Hahnchen Maru"
        },
        {
          organization_id: 20,
          mmsi: "239748998",
          name: "Hai Peng"
        },
        {
          organization_id: 18,
          mmsi: "372244105",
          name: "Hav Vind"
        },
        {
          organization_id: 1,
          mmsi: "358896004",
          name: "Hawksub"
        },
        {
          organization_id: 19,
          mmsi: "671484913",
          name: "Henrietta"
        },
        {
          organization_id: 7,
          mmsi: "321897680",
          name: "HISPANIOLA"
        },
        {
          organization_id: 17,
          mmsi: "572655814",
          name: "HMS Antigone"
        },
        {
          organization_id: 14,
          mmsi: "423748236",
          name: "HMS Artemis"
        },
        {
          organization_id: 4,
          mmsi: "369447972",
          name: "HMS Avenger"
        },
        {
          organization_id: 7,
          mmsi: "701372817",
          name: "HMS Ballantrae"
        },
        {
          organization_id: 9,
          mmsi: "378175470",
          name: "HMS Bedford"
        },
        {
          organization_id: 3,
          mmsi: "345876782",
          name: "HMS Bellipotent"
        },
        {
          organization_id: 15,
          mmsi: "306872033",
          name: "HMS Berkeley"
        },
        {
          organization_id: 5,
          mmsi: "254859421",
          name: "HMS Broadsword"
        },
        {
          organization_id: 5,
          mmsi: "564626232",
          name: "HMS Calypso"
        },
        {
          organization_id: 16,
          mmsi: "208396778",
          name: "HMS Chester"
        },
        {
          organization_id: 18,
          mmsi: "276917334",
          name: "HMS Compass Rose"
        },
        {
          organization_id: 15,
          mmsi: "434532218",
          name: "HMS Cutlass"
        },
        {
          organization_id: 20,
          mmsi: "345967044",
          name: "HMS Defiant"
        },
        {
          organization_id: 12,
          mmsi: "246260409",
          name: "HMS Devonshire"
        },
        {
          organization_id: 16,
          mmsi: "216675669",
          name: "HMS Endeavour"
        },
        {
          organization_id: 9,
          mmsi: "256841454",
          name: "HMS Indomitable"
        },
        {
          organization_id: 15,
          mmsi: "511147961",
          name: "HMS Interceptor"
        },
        {
          organization_id: 6,
          mmsi: "216637910",
          name: "HMS Iphigenia"
        },
        {
          organization_id: 15,
          mmsi: "710370502",
          name: "HMS Nemesis"
        },
        {
          organization_id: 11,
          mmsi: "755801388",
          name: "HMS Nereid"
        },
        {
          organization_id: 6,
          mmsi: "662976894",
          name: "HMS Orcus"
        },
        {
          organization_id: 6,
          mmsi: "510756481",
          name: "HMS Pandora"
        },
        {
          organization_id: 5,
          mmsi: "338546664",
          name: "HMS Saltash Castle"
        },
        {
          organization_id: 18,
          mmsi: "234154142",
          name: "HMS Saturn"
        },
        {
          organization_id: 4,
          mmsi: "207271877",
          name: "HMS Sea Tiger"
        },
        {
          organization_id: 11,
          mmsi: "432443331",
          name: "HMS Shag at Sea"
        },
        {
          organization_id: 10,
          mmsi: "451594230",
          name: "HMS Sherwood"
        },
        {
          organization_id: 17,
          mmsi: "230946298",
          name: "HMS Solent"
        },
        {
          organization_id: 15,
          mmsi: "644178379",
          name: "HMS Surprise"
        },
        {
          organization_id: 17,
          mmsi: "210106182",
          name: "HMS Sutherland"
        },
        {
          organization_id: 1,
          mmsi: "279840320",
          name: "HMS Torrin"
        },
        {
          organization_id: 12,
          mmsi: "668907482",
          name: "HMS Trumpton"
        },
        {
          organization_id: 5,
          mmsi: "666118472",
          name: "HMS Téméraire"
        },
        {
          organization_id: 4,
          mmsi: "236148007",
          name: "HMS Ulysses"
        },
        {
          organization_id: 10,
          mmsi: "636877246",
          name: "HMS Vengeance"
        },
        {
          organization_id: 7,
          mmsi: "440479097",
          name: "HMS Venus"
        },
        {
          organization_id: 13,
          mmsi: "622116405",
          name: "HMS Victoria"
        },
        {
          organization_id: 9,
          mmsi: "230770819",
          name: "HMS Viper"
        },
        {
          organization_id: 6,
          mmsi: "330407529",
          name: "HMS Viperess"
        },
        {
          organization_id: 11,
          mmsi: "671300012",
          name: "IJN Shinaru"
        },
        {
          organization_id: 14,
          mmsi: "632203842",
          name: "Ilya Podogin"
        },
        {
          organization_id: 10,
          mmsi: "665406543",
          name: "Immer Essen"
        },
        {
          organization_id: 1,
          mmsi: "565490516",
          name: "Janet Coombe"
        },
        {
          organization_id: 18,
          mmsi: "274168848",
          name: "Jeroboam"
        },
        {
          organization_id: 15,
          mmsi: "207358812",
          name: "Jolly Roger"
        },
        {
          organization_id: 11,
          mmsi: "440291509",
          name: "Karaboudjan"
        },
        {
          organization_id: 10,
          mmsi: "336163467",
          name: "Kin Lung"
        },
        {
          organization_id: 20,
          mmsi: "578178381",
          name: "Korund"
        },
        {
          organization_id: 10,
          mmsi: "353694112",
          name: "Laughing Sandbag"
        },
        {
          organization_id: 11,
          mmsi: "765412865",
          name: "Leif Ericson"
        },
        {
          organization_id: 15,
          mmsi: "538997469",
          name: "Liberian Star"
        },
        {
          organization_id: 12,
          mmsi: "305241711",
          name: "Liparus"
        },
        {
          organization_id: 4,
          mmsi: "347883830",
          name: "Love Nest"
        },
        {
          organization_id: 18,
          mmsi: "677743018",
          name: "Marie Celeste"
        },
        {
          organization_id: 13,
          mmsi: "655772410",
          name: "Mary Deare"
        },
        {
          organization_id: 10,
          mmsi: "323188157",
          name: "Milka"
        },
        {
          organization_id: 9,
          mmsi: "235305330",
          name: "Misery"
        },
        {
          organization_id: 3,
          mmsi: "608706504",
          name: "Mongolia"
        },
        {
          organization_id: 20,
          mmsi: "625397339",
          name: "Morning Star"
        },
        {
          organization_id: 2,
          mmsi: "515602076",
          name: "Mortzestus"
        },
        {
          organization_id: 3,
          mmsi: "666330324",
          name: "MS Antonia Graza"
        },
        {
          organization_id: 10,
          mmsi: "603495886",
          name: "MS Ergenstrasse"
        },
        {
          organization_id: 16,
          mmsi: "271920032",
          name: "MS Forest Swan"
        },
        {
          organization_id: 20,
          mmsi: "254248860",
          name: "Nathan Ross"
        },
        {
          organization_id: 8,
          mmsi: "645284063",
          name: "Nautilus"
        },
        {
          organization_id: 7,
          mmsi: "451456278",
          name: "Nellie"
        },
        {
          organization_id: 6,
          mmsi: "436790474",
          name: "Neptune"
        },
        {
          organization_id: 2,
          mmsi: "455978199",
          name: "Nerka"
        },
        {
          organization_id: 1,
          mmsi: "663481015",
          name: "Ning-Po"
        },
        {
          organization_id: 14,
          mmsi: "510983982",
          name: "Not for Hire"
        },
        {
          organization_id: 14,
          mmsi: "529157633",
          name: "Numestra del Oro"
        },
        {
          organization_id: 12,
          mmsi: "203245042",
          name: "Odessa"
        },
        {
          organization_id: 9,
          mmsi: "339870082",
          name: "Orca"
        },
        {
          organization_id: 1,
          mmsi: "520130039",
          name: "Patna"
        },
        {
          organization_id: 14,
          mmsi: "243490195",
          name: "Penguin"
        },
        {
          organization_id: 4,
          mmsi: "358363611",
          name: "Pequod"
        },
        {
          organization_id: 11,
          mmsi: "408733839",
          name: "Pharaoh"
        },
        {
          organization_id: 15,
          mmsi: "417350460",
          name: "Plymouth Corporation's Revenge"
        },
        {
          organization_id: 19,
          mmsi: "242785800",
          name: "Pocahontas"
        },
        {
          organization_id: 6,
          mmsi: "570741753",
          name: "Poseidon"
        },
        {
          organization_id: 5,
          mmsi: "307339763",
          name: "Proteus"
        },
        {
          organization_id: 11,
          mmsi: "207740828",
          name: "Pushkin"
        },
        {
          organization_id: 15,
          mmsi: "405130252",
          name: "Q Boat"
        },
        {
          organization_id: 11,
          mmsi: "376354177",
          name: "Queequeg"
        },
        {
          organization_id: 9,
          mmsi: "501986427",
          name: "Rachel"
        },
        {
          organization_id: 11,
          mmsi: "202182767",
          name: "Rangoon"
        },
        {
          organization_id: 11,
          mmsi: "425145773",
          name: "Reaper"
        },
        {
          organization_id: 9,
          mmsi: "720812581",
          name: "Red Dragon"
        },
        {
          organization_id: 7,
          mmsi: "601794019",
          name: "Red October"
        },
        {
          organization_id: 7,
          mmsi: "650691392",
          name: "Red Witch"
        },
        {
          organization_id: 8,
          mmsi: "332716767",
          name: "Rights-of-Man"
        },
        {
          organization_id: 9,
          mmsi: "264310092",
          name: "RMS Augusta"
        },
        {
          organization_id: 7,
          mmsi: "205300753",
          name: "Rob Roy"
        },
        {
          organization_id: 16,
          mmsi: "434928150",
          name: "Rocketing Spitfire"
        },
        {
          organization_id: 12,
          mmsi: "372248146",
          name: "Salty Sea Mare"
        },
        {
          organization_id: 19,
          mmsi: "359670410",
          name: "Santa Cascara"
        },
        {
          organization_id: 2,
          mmsi: "232131322",
          name: "Santa Umbriago"
        },
        {
          organization_id: 18,
          mmsi: "760688336",
          name: "Santana"
        },
        {
          organization_id: 11,
          mmsi: "635127694",
          name: "Saracen"
        },
        {
          organization_id: 11,
          mmsi: "503904209",
          name: "Sea Cliff"
        },
        {
          organization_id: 2,
          mmsi: "309557499",
          name: "Sea Queen"
        },
        {
          organization_id: 7,
          mmsi: "357607859",
          name: "Sea Star"
        },
        {
          organization_id: 12,
          mmsi: "271929749",
          name: "Shark"
        },
        {
          organization_id: 16,
          mmsi: "664466204",
          name: "Siren"
        },
        {
          organization_id: 14,
          mmsi: "531728772",
          name: "Sirius"
        },
        {
          organization_id: 12,
          mmsi: "710876827",
          name: "Skyline"
        },
        {
          organization_id: 17,
          mmsi: "770471766",
          name: "Speranza"
        },
        {
          organization_id: 2,
          mmsi: "259983063",
          name: "SS Andes"
        },
        {
          organization_id: 17,
          mmsi: "255564088",
          name: "SS Anne B"
        },
        {
          organization_id: 19,
          mmsi: "627295381",
          name: "SS Arcadia"
        },
        {
          organization_id: 13,
          mmsi: "368463397",
          name: "SS Britannic"
        },
        {
          organization_id: 3,
          mmsi: "209293883",
          name: "SS Carnatic"
        },
        {
          organization_id: 17,
          mmsi: "621860560",
          name: "SS Chiku Shan"
        },
        {
          organization_id: 2,
          mmsi: "656384644",
          name: "SS Claridon"
        },
        {
          organization_id: 17,
          mmsi: "574849517",
          name: "SS Colossal"
        },
        {
          organization_id: 10,
          mmsi: "540335392",
          name: "SS Crescent Star"
        },
        {
          organization_id: 6,
          mmsi: "256260193",
          name: "SS Essess"
        },
        {
          organization_id: 19,
          mmsi: "312827917",
          name: "SS Gigantic"
        },
        {
          organization_id: 16,
          mmsi: "341134590",
          name: "SS Goliath"
        },
        {
          organization_id: 10,
          mmsi: "329559218",
          name: "SS Happy Wanderer"
        },
        {
          organization_id: 3,
          mmsi: "253528698",
          name: "SS Minnow Johnson"
        },
        {
          organization_id: 15,
          mmsi: "443107765",
          name: "SS Princess Irene"
        },
        {
          organization_id: 1,
          mmsi: "553582069",
          name: "SS Ramona"
        },
        {
          organization_id: 7,
          mmsi: "612944134",
          name: "SS Roland"
        },
        {
          organization_id: 6,
          mmsi: "378710517",
          name: "SS Sea Witch"
        },
        {
          organization_id: 15,
          mmsi: "341914196",
          name: "SS Southern Queen"
        },
        {
          organization_id: 2,
          mmsi: "511267699",
          name: "SS Titan"
        },
        {
          organization_id: 19,
          mmsi: "423976506",
          name: "SS Titanic II"
        },
        {
          organization_id: 5,
          mmsi: "334570063",
          name: "SS Valparaiso"
        },
        {
          organization_id: 20,
          mmsi: "453460376",
          name: "SS Venture"
        },
        {
          organization_id: 17,
          mmsi: "468418765",
          name: "SSNR Seaview"
        },
        {
          organization_id: 16,
          mmsi: "667457541",
          name: "St. Georges"
        },
        {
          organization_id: 10,
          mmsi: "208304229",
          name: "Starfish"
        },
        {
          organization_id: 14,
          mmsi: "201858790",
          name: "Tankadère"
        },
        {
          organization_id: 8,
          mmsi: "617231727",
          name: "Tasha"
        },
        {
          organization_id: 5,
          mmsi: "624571448",
          name: "The Black Freighter"
        },
        {
          organization_id: 13,
          mmsi: "379448165",
          name: "The Flying Dutchman"
        },
        {
          organization_id: 2,
          mmsi: "679554412",
          name: "The Flying Wasp"
        },
        {
          organization_id: 2,
          mmsi: "625736343",
          name: "The Fuwalda"
        },
        {
          organization_id: 7,
          mmsi: "511436023",
          name: "The Gertrude"
        },
        {
          organization_id: 13,
          mmsi: "361594440",
          name: "The Glen Carrig"
        },
        {
          organization_id: 5,
          mmsi: "629956599",
          name: "The Henrietta"
        },
        {
          organization_id: 15,
          mmsi: "730237067",
          name: "The Hesperus"
        },
        {
          organization_id: 11,
          mmsi: "755151583",
          name: "The Inferno"
        },
        {
          organization_id: 11,
          mmsi: "676849009",
          name: "The Iron Pirate"
        },
        {
          organization_id: 1,
          mmsi: "274635311",
          name: "The Precious Gem"
        },
        {
          organization_id: 16,
          mmsi: "276375401",
          name: "The Ramchunder"
        },
        {
          organization_id: 15,
          mmsi: "338431170",
          name: "The Sea Witch"
        },
        {
          organization_id: 18,
          mmsi: "710129301",
          name: "The Walrus"
        },
        {
          organization_id: 17,
          mmsi: "664745075",
          name: "The Wanderer"
        },
        {
          organization_id: 9,
          mmsi: "425105220",
          name: "Tsimtsum"
        },
        {
          organization_id: 4,
          mmsi: "567473074",
          name: "Tugboat Annie"
        },
        {
          organization_id: 17,
          mmsi: "765287901",
          name: "Turtle"
        },
        {
          organization_id: 12,
          mmsi: "338991842",
          name: "Twelve Apostles"
        },
        {
          organization_id: 10,
          mmsi: "359678735",
          name: "U-174"
        },
        {
          organization_id: 17,
          mmsi: "279785128",
          name: "U-571"
        },
        {
          organization_id: 7,
          mmsi: "201477252",
          name: "Ulysses"
        },
        {
          organization_id: 6,
          mmsi: "425448571",
          name: "USOS Seaview"
        },
        {
          organization_id: 16,
          mmsi: "679481706",
          name: "USS Abraham Lincoln"
        },
        {
          organization_id: 16,
          mmsi: "343571571",
          name: "USS Barracuda"
        },
        {
          organization_id: 19,
          mmsi: "341888652",
          name: "USS Belinda"
        },
        {
          organization_id: 3,
          mmsi: "468253073",
          name: "USS Caine"
        },
        {
          organization_id: 20,
          mmsi: "359695976",
          name: "USS Cantwell"
        },
        {
          organization_id: 14,
          mmsi: "356924486",
          name: "USS Carl Jackson"
        },
        {
          organization_id: 12,
          mmsi: "477931693",
          name: "USS Charleston"
        },
        {
          organization_id: 9,
          mmsi: "443117149",
          name: "USS Copperfin"
        },
        {
          organization_id: 19,
          mmsi: "367218419",
          name: "USS Davies"
        },
        {
          organization_id: 12,
          mmsi: "207625171",
          name: "USS Delaware"
        },
        {
          organization_id: 1,
          mmsi: "259145158",
          name: "USS Dolphin"
        },
        {
          organization_id: 10,
          mmsi: "244822790",
          name: "USS Dragonfish"
        },
        {
          organization_id: 5,
          mmsi: "413322415",
          name: "USS Echo"
        },
        {
          organization_id: 14,
          mmsi: "624435457",
          name: "USS Eel"
        },
        {
          organization_id: 4,
          mmsi: "331737117",
          name: "USS Fletcher"
        },
        {
          organization_id: 13,
          mmsi: "227958347",
          name: "USS Haynes"
        },
        {
          organization_id: 1,
          mmsi: "523444035",
          name: "USS Independence"
        },
        {
          organization_id: 12,
          mmsi: "440361530",
          name: "USS Intrepid"
        },
        {
          organization_id: 18,
          mmsi: "416156707",
          name: "USS James T Doig"
        },
        {
          organization_id: 14,
          mmsi: "208737884",
          name: "USS Keeling"
        },
        {
          organization_id: 9,
          mmsi: "775232325",
          name: "USS Kornblatt"
        },
        {
          organization_id: 11,
          mmsi: "207218228",
          name: "USS Langley"
        },
        {
          organization_id: 19,
          mmsi: "362234336",
          name: "USS Lansing"
        },
        {
          organization_id: 11,
          mmsi: "358150405",
          name: "USS Lawton"
        },
        {
          organization_id: 12,
          mmsi: "361338145",
          name: "USS Mako"
        },
        {
          organization_id: 16,
          mmsi: "219870267",
          name: "USS Montana"
        },
        {
          organization_id: 7,
          mmsi: "667248328",
          name: "USS Oakland"
        },
        {
          organization_id: 6,
          mmsi: "371220714",
          name: "USS Okinawa"
        },
        {
          organization_id: 2,
          mmsi: "343991041",
          name: "USS Pequod"
        },
        {
          organization_id: 17,
          mmsi: "214301537",
          name: "USS Pyramus"
        },
        {
          organization_id: 19,
          mmsi: "252865986",
          name: "USS Reluctant"
        },
        {
          organization_id: 18,
          mmsi: "304306095",
          name: "USS San Pablo"
        },
        {
          organization_id: 20,
          mmsi: "516966957",
          name: "USS Sawfish"
        },
        {
          organization_id: 12,
          mmsi: "266261139",
          name: "USS Scorpion"
        },
        {
          organization_id: 4,
          mmsi: "272480451",
          name: "USS Scotia"
        },
        {
          organization_id: 20,
          mmsi: "323679765",
          name: "USS Sea Tiger"
        },
        {
          organization_id: 20,
          mmsi: "243336759",
          name: "USS Sea Trench"
        },
        {
          organization_id: 5,
          mmsi: "239672837",
          name: "USS Starbuck"
        },
        {
          organization_id: 18,
          mmsi: "475409987",
          name: "USS Starfish"
        },
        {
          organization_id: 2,
          mmsi: "425734021",
          name: "USS Stingray"
        },
        {
          organization_id: 14,
          mmsi: "616655944",
          name: "USS Stormy Beach"
        },
        {
          organization_id: 18,
          mmsi: "618662601",
          name: "USS Swordfish"
        },
        {
          organization_id: 8,
          mmsi: "209590292",
          name: "USS Tallahatchie County"
        },
        {
          organization_id: 20,
          mmsi: "262525749",
          name: "USS Thomas Jefferson"
        },
        {
          organization_id: 10,
          mmsi: "419187287",
          name: "USS Thunderfish"
        },
        {
          organization_id: 18,
          mmsi: "209327569",
          name: "USS Tiger Shark"
        },
        {
          organization_id: 9,
          mmsi: "664868451",
          name: "USS Tigerfish"
        },
        {
          organization_id: 6,
          mmsi: "755540661",
          name: "USS Ulysses"
        },
        {
          organization_id: 10,
          mmsi: "720954676",
          name: "USS Utah"
        },
        {
          organization_id: 18,
          mmsi: "621866719",
          name: "USS Valhalla"
        },
        {
          organization_id: 6,
          mmsi: "242917698",
          name: "USS Vindicator"
        },
        {
          organization_id: 14,
          mmsi: "760480777",
          name: "USS Walrus"
        },
        {
          organization_id: 8,
          mmsi: "416363943",
          name: "USS Wayne"
        },
        {
          organization_id: 10,
          mmsi: "635726283",
          name: "Vingilot"
        },
        {
          organization_id: 5,
          mmsi: "670853727",
          name: "Vulkan"
        },
        {
          organization_id: 16,
          mmsi: "405737212",
          name: "Wolfgang"
        },
        {
          organization_id: 20,
          mmsi: "232819168",
          name: "Wonkatania"
        }
      ]);
    });
};
