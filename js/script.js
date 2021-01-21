const passCounter = document.querySelector(".container__dataContainer__pass");
let passCounterValue = 2;
passCounter.innerHTML = `Passz: ${passCounterValue}`;

const pointCounter = document.querySelector(".container__dataContainer__point");
let pointCounterValue = 0;
pointCounter.innerHTML = `Pontszám: ${pointCounterValue}`;

let words = [
  {
    id: 1,
    guessWord: "MATEMATIKA",
    tabooWords: ["számol", "tantárgy", "nehéz", "számológép", ""],
  },
  {
    id: 2,
    guessWord: "MAGYAR",
    tabooWords: ["Magyarország", "tantárgy", "beszél", "nyelv", ""],
  },
  {
    id: 3,
    guessWord: "ANGOL",
    tabooWords: ["nyelv", "tantárgy", "Egyesült Királyság", "Amerika", ""],
  },
  {
    id: 4,
    guessWord: "TESTNEVELÉS",
    tabooWords: ["sport", "tornázik", "tornaterem", "játék", ""],
  },
  {
    id: 5,
    guessWord: "ÉNEK",
    tabooWords: ["tantárgy", "zene", "dal", "énekel", ""],
  },
  {
    id: 6,
    guessWord: "TORNATEREM",
    tabooWords: ["testnevelés", "sport", "játék", "iskola", ""],
  },
  {
    id: 7,
    guessWord: "EBÉDLŐ",
    tabooWords: ["eszik", "dél", "menza", "iskola", ""],
  },
  {
    id: 8,
    guessWord: "HEGYEZŐ",
    tabooWords: ["iskola", "kuka", "ceruza", "tolltartó", ""],
  },
  {
    id: 9,
    guessWord: "RADÍR",
    tabooWords: ["ceruza", "füzet", "fehér", "hiba", ""],
  },
  {
    id: 10,
    guessWord: "FÜZET",
    tabooWords: ["könyv", "ír", "ceruza", "tantárgy", ""],
  },
  {
    id: 11,
    guessWord: "ZOKNI",
    tabooWords: ["láb", "hideg", "kicsi", "felvesz", ""],
  },
  {
    id: 12,
    guessWord: "ÖLTÖNY",
    tabooWords: ["felvesz", "elegáns", "ünnep", "fekete", ""],
  },
  {
    id: 13,
    guessWord: "KESZTYŰ",
    tabooWords: ["felvesz", "tél", "kéz", "hó", ""],
  },
  {
    id: 14,
    guessWord: "HALLOWEEN",
    tabooWords: ["tök", "boszorkány", "október", "megtréfál", ""],
  },
  {
    id: 15,
    guessWord: "MIKULÁS",
    tabooWords: ["sapka", "puttony", "csoki", "piros", ""],
  },
  {
    id: 16,
    guessWord: "KRUMPLI",
    tabooWords: ["burgonya", "barna", "zöldség", "süt", ""],
  },
  {
    id: 17,
    guessWord: "PAPRIKA",
    tabooWords: ["zöldség", "erős", "piros", "chili", ""],
  },
  {
    id: 18,
    guessWord: "ALMA",
    tabooWords: ["gyümölcs", "piros", "zöld", "egészséges", ""],
  },
  {
    id: 19,
    guessWord: "NARANCS",
    tabooWords: ["sárga", "kerek", "dzsúz", "gyümölcs", ""],
  },
  {
    id: 20,
    guessWord: "SAJT",
    tabooWords: ["tejtermék", "sárga", "lyukas", "egér", ""],
  },
  {
    id: 21,
    guessWord: "VIRSLI",
    tabooWords: ["hús", "kolbász", "hosszú", "Füstli", ""],
  },
  {
    id: 22,
    guessWord: "SÜTI",
    tabooWords: ["torta", "édes", "desszert", "cukrászda", ""],
  },
  {
    id: 23,
    guessWord: "ZÖLDSÉG",
    tabooWords: ["egészséges", "eszik", "sárgarépa", "piac", ""],
  },
  {
    id: 24,
    guessWord: "SZÜLŐK",
    tabooWords: ["anya", "apa", "nagyszülők", "gyerekek", ""],
  },
  {
    id: 25,
    guessWord: "ÚSZÁS",
    tabooWords: ["víz", "szemüveg", "fürdőruha", "medence", ""],
  },
  {
    id: 26,
    guessWord: "BICIKLIZÉS",
    tabooWords: ["bicikli", "kerékpár", "verseny", "utca", ""],
  },
  {
    id: 27,
    guessWord: "TORNA",
    tabooWords: ["testnevelés", "tornaterem", "udvar", "jóga", ""],
  },
  {
    id: 28,
    guessWord: "FOGAT MOS",
    tabooWords: ["reggel", "fürdőszoba", "fogkefe", "fogkrém", ""],
  },
  {
    id: 29,
    guessWord: "ALSZIK",
    tabooWords: ["este", "ágy", "fáradt", "otthon", ""],
  },
  {
    id: 30,
    guessWord: "MELEG RUHA",
    tabooWords: ["sál", "sapka", "kesztyű", "kabát", ""],
  },
  {
    id: 31,
    guessWord: "SZÁNKÓZIK",
    tabooWords: ["hideg", "hó", "sport", "ül", ""],
  },
  {
    id: 32,
    guessWord: "SZÜRETEL",
    tabooWords: ["szőlő", "szed", "szeptember", "eszik", ""],
  },
  {
    id: 33,
    guessWord: "POCSOLYA",
    tabooWords: ["eső", "víz", "sár", "csizma", ""],
  },
  {
    id: 34,
    guessWord: "NAPSZEMÜVEG",
    tabooWords: ["nyár", "nap", "szem", "napos", ""],
  },
  {
    id: 35,
    guessWord: "SZALMAKALAP",
    tabooWords: ["fej", "napos", "nap", "nyár", ""],
  },
  {
    id: 36,
    guessWord: "SZEM",
    tabooWords: ["néz", "testrész", "fej", "barna", ""],
  },
  {
    id: 37,
    guessWord: "LÁB",
    tabooWords: ["kar", "testrész", "nadrág", "megy", ""],
  },
  {
    id: 38,
    guessWord: "KÉZ",
    tabooWords: ["kar", "láb", "testrész", "kesztyű", ""],
  },
  {
    id: 39,
    guessWord: "FOG",
    tabooWords: ["testrész", "száj", "nyelv", "mosolyog", ""],
  },
  {
    id: 40,
    guessWord: "TÖRÖTT UJJ",
    tabooWords: ["ujj", "eltörik", "orvos", "gipsz", ""],
  },
  {
    id: 41,
    guessWord: "MEGFÁZÁS",
    tabooWords: ["testrész", "száj", "nyelv", "mosolyog", ""],
  },
  {
    id: 42,
    guessWord: "LÁNCHÍD",
    tabooWords: ["híd", "Budapest", "Duna", "oroszlán", ""],
  },
  {
    id: 43,
    guessWord: "HALÁSZBÁSTYA",
    tabooWords: ["turista", "Budapest", "vár", "Buda", ""],
  },
  {
    id: 44,
    guessWord: "AUTÓ",
    tabooWords: ["jármű", "kerék", "út", "utca", ""],
  },
  {
    id: 45,
    guessWord: "BICIKLI",
    tabooWords: ["kerék", "utca", "bicikliút", "jármű", ""],
  },
  {
    id: 46,
    guessWord: "VILLAMOS",
    tabooWords: ["BKK", "sárga", "Budapest", "utas", ""],
  },
  {
    id: 47,
    guessWord: "BOLT",
    tabooWords: ["vásárol", "shopping", "étel", "ital", ""],
  },
  {
    id: 48,
    guessWord: "REPÜLŐTÉR",
    tabooWords: ["repülő", "leszáll", "felszáll", "utas", ""],
  },
  {
    id: 49,
    guessWord: "VASÚTÁLLOMÁS",
    tabooWords: ["vonat", "MÁV", "sín", "pályaudvar", ""],
  },
  {
    id: 50,
    guessWord: "ÁPOLÓNŐ",
    tabooWords: ["kórház", "orvos", "beteg", "egyenruha", ""],
  },
  {
    id: 51,
    guessWord: "KATONA",
    tabooWords: ["fegyver", "háború", "ország", "foglalkozás", ""],
  },
  {
    id: 52,
    guessWord: "PINCÉR",
    tabooWords: ["étterem", "étel", "foglalkozás", "vendég", ""],
  },
  {
    id: 53,
    guessWord: "ÉNEKES",
    tabooWords: ["énekel", "színpad", "ruha", "közönség", ""],
  },
  {
    id: 54,
    guessWord: "SZÍNÉSZ",
    tabooWords: ["színpad", "közönség", "színház", "dráma", ""],
  },
  {
    id: 55,
    guessWord: "PÉK",
    tabooWords: ["süt", "kenyér", "pékség", "vásárol", ""],
  },
  {
    id: 56,
    guessWord: "IRODALOM",
    tabooWords: ["olvas", "író", "tantárgy", "könyv", ""],
  },
  {
    id: 57,
    guessWord: "BIOLÓGIA",
    tabooWords: ["tantárgy", "állat", "növény", "labor", ""],
  },
  {
    id: 58,
    guessWord: "FIZIKA",
    tabooWords: ["labor", "tantárgy", "számol", "számológép", ""],
  },
  {
    id: 59,
    guessWord: "INFORMATIKA",
    tabooWords: ["számítógép", "informatika terem", "program", "játék", ""],
  },
  {
    id: 60,
    guessWord: "OSZTÁLYTEREM",
    tabooWords: ["tábla", "tanul", "óra", "pad", ""],
  },
  {
    id: 61,
    guessWord: "KÖNYVTÁR",
    tabooWords: ["könyv", "polc", "iskola", "olvas", ""],
  },
  {
    id: 62,
    guessWord: "VONALZÓ",
    tabooWords: ["matematika", "iskola", "szám", "egyenes", ""],
  },
  {
    id: 63,
    guessWord: "TOLLTARTÓ",
    tabooWords: ["ceruza", "toll", "iskola", "asztal", ""],
  },
  {
    id: 64,
    guessWord: "TÁSKA",
    tabooWords: ["könyv", "füzet", "tolltartó", "iskola", ""],
  },
  {
    id: 65,
    guessWord: "TANTÁRGY",
    tabooWords: ["iskola", "óra", "órarend", "tanul", ""],
  },
  {
    id: 66,
    guessWord: "SÁL",
    tabooWords: ["nyak", "tél", "felvesz", "hosszú", ""],
  },
  {
    id: 67,
    guessWord: "SZOKNYA",
    tabooWords: ["láb", "felvesz", "nyár", "lány", ""],
  },
  {
    id: 68,
    guessWord: "NADRÁG",
    tabooWords: ["láb", "farmer", "felvesz", "hosszú", ""],
  },
  {
    id: 69,
    guessWord: "LUCA-NAP",
    tabooWords: ["december", "szék", "töklámpás", "boszorkány", ""],
  },
  {
    id: 70,
    guessWord: "HÚSVÉT",
    tabooWords: ["nyúl", "tavasz", "csoki", "tojás", ""],
  },
  {
    id: 71,
    guessWord: "UBORKA",
    tabooWords: ["zöldség", "saláta", "zöld", "hosszú", ""],
  },
  {
    id: 72,
    guessWord: "GYÜMÖLCS",
    tabooWords: ["egészséges", "vitamin", "alma", "piac", ""],
  },
  {
    id: 73,
    guessWord: "DINNYE",
    tabooWords: ["görög", "sárga", "gyümölcs", "nagy", ""],
  },
  {
    id: 74,
    guessWord: "KALÁCS",
    tabooWords: ["pékség", "pékáru", "kenyér", "kakaó", ""],
  },
  {
    id: 75,
    guessWord: "TEJFÖL",
    tabooWords: ["tejtermék", "tej", "fehér", "savanyú", ""],
  },
  {
    id: 76,
    guessWord: "KÓLA",
    tabooWords: ["iszik", "üdítő", "Pepsi", "Coca", ""],
  },
  {
    id: 77,
    guessWord: "KAKAÓ",
    tabooWords: ["csoki", "forró", "édes", "tejszínhab", ""],
  },
  {
    id: 78,
    guessWord: "JEGESMEDVE",
    tabooWords: ["hal", "fóka", "Északi-sark", "ragadozó", ""],
  },
  {
    id: 79,
    guessWord: "TESTVÉR",
    tabooWords: ["húg", "nővér", "öcs", "báty", ""],
  },
  {
    id: 80,
    guessWord: "FOCI",
    tabooWords: ["labdarúgás", "labda", "láb", "stadion", ""],
  },
  {
    id: 81,
    guessWord: "TOLLASLABDA",
    tabooWords: ["labda", "ütő", "háló", "pálya", ""],
  },
  {
    id: 82,
    guessWord: "KOSÁRLABDA",
    tabooWords: ["labda", "tornaterem", "kéz", "pálya", ""],
  },
  {
    id: 83,
    guessWord: "EBÉDEL",
    tabooWords: ["eszik", "dél", "ebédlő", "menza", ""],
  },
  {
    id: 84,
    guessWord: "TANUL",
    tabooWords: ["házi feladat", "iskola", "tantárgy", "olvas", ""],
  },
  {
    id: 85,
    guessWord: "KORCSOLYÁZIK",
    tabooWords: ["hideg", "cipő", "jég", "sport", ""],
  },
  {
    id: 86,
    guessWord: "HÓGOLYÓZIK",
    tabooWords: ["hó", "dob", "kesztyű", "csata", ""],
  },
  {
    id: 87,
    guessWord: "GEREBLYÉZ",
    tabooWords: ["szeptember", "levél", "fa", "színes", ""],
  },
  {
    id: 88,
    guessWord: "ESERNYŐ",
    tabooWords: ["eső", "csizma", "kabát", "rossz idő", ""],
  },
  {
    id: 89,
    guessWord: "HORGÁSZIK",
    tabooWords: ["hal", "víz", "nyár", "folyó", ""],
  },
  {
    id: 90,
    guessWord: "BÚVÁRSZEMÜVEG",
    tabooWords: ["szem", "víz", "úszik", "tenger", ""],
  },
  {
    id: 91,
    guessWord: "ORR",
    tabooWords: ["szag", "fej", "arc", "testrész", ""],
  },
  {
    id: 92,
    guessWord: "KAR",
    tabooWords: ["testrész", "láb", "jobb", "pullóver", ""],
  },
  {
    id: 93,
    guessWord: "HAJ",
    tabooWords: ["szőke", "fej", "testrész", "rövid", ""],
  },
  {
    id: 94,
    guessWord: "NYELV",
    tabooWords: ["száj", "testrész", "fog", "beszél", ""],
  },
  {
    id: 95,
    guessWord: "FOGFÁJÁS",
    tabooWords: ["fog", "fogorvos", "száj", "fáj", ""],
  },
  {
    id: 96,
    guessWord: "KARTÖRÉS",
    tabooWords: ["száj", "testrész", "fog", "beszél", ""],
  },
  {
    id: 97,
    guessWord: "NEMZETI MÚZEUM",
    tabooWords: ["múzeum", "épület", "szobor", "Budapest", ""],
  },
  {
    id: 98,
    guessWord: "SIKLÓ",
    tabooWords: ["jármű", "vonat", "Buda", "vár", ""],
  },
  {
    id: 99,
    guessWord: "BUSZ",
    tabooWords: ["kék", "BKK", "jármű", "utas", ""],
  },
  {
    id: 100,
    guessWord: "REPÜLŐ",
    tabooWords: ["pilóta", "repül", "turista", "jármű", ""],
  },
  {
    id: 101,
    guessWord: "TROLIBUSZ",
    tabooWords: ["busz", "BKK", "jármű", "Budapest", ""],
  },
  {
    id: 102,
    guessWord: "PÉKSÉG",
    tabooWords: ["pék", "vásárol", "kenyér", "kifli", ""],
  },
  {
    id: 103,
    guessWord: "RENDŐRSÉG",
    tabooWords: ["rendőr", "bűnöző", "kihallgat", "város", ""],
  },
  {
    id: 104,
    guessWord: "SZÁLLODA",
    tabooWords: ["hotel", "taxi", "turista", "üzletember", ""],
  },
  {
    id: 105,
    guessWord: "ELADÓ",
    tabooWords: ["elad", "vásárol", "számol", "bolt", ""],
  },
  {
    id: 106,
    guessWord: "MÉRNÖK",
    tabooWords: ["épület", "épít", "számol", "város", ""],
  },
  {
    id: 107,
    guessWord: "TŰZOLTÓ",
    tabooWords: ["tűz", "tűzoltóság", "elolt", "víz", ""],
  },
  {
    id: 108,
    guessWord: "FODRÁSZ",
    tabooWords: ["haj", "fodrászat", "foglalkozás", "levág", ""],
  },
  {
    id: 109,
    guessWord: "CUKRÁSZ",
    tabooWords: ["süt", "süti", "cukrászda", "foglalkozás", ""],
  },
  {
    id: 110,
    guessWord: "TÁNCOS",
    tabooWords: ["táncol", "színpad", "verseny", "ruha", ""],
  },
  {
    id: 111,
    guessWord: "TÖRTÉNELEM",
    tabooWords: ["tantárgy", "múlt", "régi", "térkép", ""],
  },
  {
    id: 112,
    guessWord: "FÖLDRAJZ",
    tabooWords: ["ország", "térkép", "tantárgy", "kontinens", ""],
  },
  {
    id: 113,
    guessWord: "KÉMIA",
    tabooWords: ["tantárgy", "labor", "kísérlet", "számol", ""],
  },
  {
    id: 114,
    guessWord: "RAJZ ÉS TECHNIKA",
    tabooWords: ["papír", "olló", "ragasztó", "fest", ""],
  },
  {
    id: 115,
    guessWord: "FOLYOSÓ",
    tabooWords: ["osztályterem", "iskola", "szekrény", "szünet", ""],
  },
  {
    id: 116,
    guessWord: "UDVAR",
    tabooWords: ["szünet", "iskola", "játszótér", "játszik", ""],
  },
  {
    id: 117,
    guessWord: "OLLÓ",
    tabooWords: ["rajz", "technika", "vág", "iskola", ""],
  },
  {
    id: 118,
    guessWord: "KÖRZŐ",
    tabooWords: ["matematika", "iskola", "rajzol", "füzet", ""],
  },
  {
    id: 119,
    guessWord: "KÖNYV",
    tabooWords: ["tantárgy", "olvas", "táska", "asztal", ""],
  },
  {
    id: 120,
    guessWord: "ÓRAREND",
    tabooWords: ["tantárgy", "óra", "iskola", "fal", ""],
  },
  {
    id: 121,
    guessWord: "PÓLÓ",
    tabooWords: ["nyár", "felső", "rövid", "felvesz", ""],
  },
  {
    id: 122,
    guessWord: "CSIZMA",
    tabooWords: ["tél", "felvesz", "láb", "meleg", ""],
  },
  {
    id: 123,
    guessWord: "BLÚZ",
    tabooWords: ["ing", "felvesz", "lány", "ünnep", ""],
  },
  {
    id: 124,
    guessWord: "KARÁCSONY",
    tabooWords: ["december", "karácsony", "ajándék", "halászlé", ""],
  },
  {
    id: 125,
    guessWord: "FARSANG",
    tabooWords: ["maszk", "jelmez", "arcfestés", "Halloween", ""],
  },
  {
    id: 126,
    guessWord: "HAGYMA",
    tabooWords: ["barna", "fok", "zöldség", "sír", ""],
  },
  {
    id: 127,
    guessWord: "CITROM",
    tabooWords: ["sárga", "gyümölcs", "savanyú", "kerek", ""],
  },
  {
    id: 128,
    guessWord: "BANÁN",
    tabooWords: ["sárga", "hosszú", "gyümölcs", "édes", ""],
  },
  {
    id: 129,
    guessWord: "KIFLI",
    tabooWords: ["reggeli", "pékség", "pékáru", "kenyér", ""],
  },
  {
    id: 130,
    guessWord: "SZALÁMI",
    tabooWords: ["hús", "reggeli", "szendvics", "téli", ""],
  },
  {
    id: 131,
    guessWord: "TEA",
    tabooWords: ["iszik", "meleg", "angolok", "méz", ""],
  },
  {
    id: 132,
    guessWord: "CSOKI",
    tabooWords: ["barna", "kakaó", "édes", "nassol", ""],
  },
  {
    id: 133,
    guessWord: "PINGVIN",
    tabooWords: ["hal", "úszik", "hideg", "madár", ""],
  },
  {
    id: 134,
    guessWord: "UNOKA",
    tabooWords: ["nagyszülő", "szülő", "rokon", "családtag", ""],
  },
  {
    id: 135,
    guessWord: "PINGPONG",
    tabooWords: ["asztalitenisz", "labda", "ütő", "háló", ""],
  },
  {
    id: 136,
    guessWord: "FUTÁS",
    tabooWords: ["gyors", "verseny", "testnevelés", "láb", ""],
  },
  {
    id: 137,
    guessWord: "RÖPLABDA",
    tabooWords: ["ugrik", "tornaterem", "testnevelés", "kéz", ""],
  },
  {
    id: 138,
    guessWord: "TÉVÉT NÉZ",
    tabooWords: ["film", "este", "nappali", "kanapé", ""],
  },
  {
    id: 139,
    guessWord: "FELÖLTÖZIK",
    tabooWords: ["ruha", "pizsama", "reggel", "szoba", ""],
  },
  {
    id: 140,
    guessWord: "HÓEMBER",
    tabooWords: ["hideg", "hó", "épít", "kalap", ""],
  },
  {
    id: 141,
    guessWord: "SNOWBOARD",
    tabooWords: ["hó", "hegy", "sí", "hideg", ""],
  },
  {
    id: 142,
    guessWord: "KIRÁNDUL",
    tabooWords: ["erdő", "sétál", "hátizsák", "osztály", ""],
  },
  {
    id: 143,
    guessWord: "AVAR",
    tabooWords: ["levél", "erdő", "föld", "színes", ""],
  },
  {
    id: 144,
    guessWord: "BŐRÖND",
    tabooWords: ["táska", "utazás", "pakol", "ruha", ""],
  },
  {
    id: 145,
    guessWord: "SZÖRFDESZKA",
    tabooWords: ["szörfözik", "víz", "tenger", "nyár", ""],
  },
  {
    id: 146,
    guessWord: "FÜL",
    tabooWords: ["testrész", "hall", "zene", "hallgat", ""],
  },
  {
    id: 147,
    guessWord: "SZÁJ",
    tabooWords: ["nyelv", "fog", "arc", "testrész", ""],
  },
  {
    id: 148,
    guessWord: "FEJ",
    tabooWords: ["arc", "szem", "orr", "testrész", ""],
  },
  {
    id: 149,
    guessWord: "LÁBFEJ",
    tabooWords: ["testrész", "láb", "kar", "cipő", ""],
  },
  {
    id: 150,
    guessWord: "TOROKGYULLADÁS",
    tabooWords: ["nyak", "torok", "fáj", "orvos", ""],
  },
  {
    id: 151,
    guessWord: "BOKAFICAM",
    tabooWords: ["testrész", "láb", "kar", "cipő", ""],
  },
  {
    id: 152,
    guessWord: "HŐSÖK TERE",
    tabooWords: ["szobor", "tér", "Budapest", "turista", ""],
  },
  {
    id: 153,
    guessWord: "MARGIT-SZIGET",
    tabooWords: ["sziget", "Duna", "Budapest", "híd", ""],
  },
  {
    id: 154,
    guessWord: "MOTOR",
    tabooWords: ["motoros", "út", "jármű", "utca", ""],
  },
  {
    id: 155,
    guessWord: "VONAT",
    tabooWords: ["MÁV", "sín", "vasútállomás", "jármű", ""],
  },
  {
    id: 156,
    guessWord: "HŐLÉGBALLON",
    tabooWords: ["repül", "levegő", "lufi", "színes", ""],
  },
  {
    id: 157,
    guessWord: "ERDŐ",
    tabooWords: ["állat", "fa", "zöld", "kirándul", ""],
  },
  {
    id: 158,
    guessWord: "TŰZOLTÓSÁG",
    tabooWords: ["tűz", "tűzoltó", "katasztrófa", "város", ""],
  },
  {
    id: 159,
    guessWord: "FAGYIZÓ",
    tabooWords: ["fagyi", "gyerek", "nyár", "város", ""],
  },
  {
    id: 160,
    guessWord: "FOGORVOS",
    tabooWords: ["orvos", "fáj", "kórház", "beteg", ""],
  },
  {
    id: 161,
    guessWord: "RENDŐR",
    tabooWords: ["bűnöző", "rendőrség", "letartóztat", "kihallgat", ""],
  },
  {
    id: 162,
    guessWord: "ÜZLETEMBER/ ÜZLETASSZONY",
    tabooWords: ["pénz", "gazdag", "dolgozik", "foglalkozás", ""],
  },
  {
    id: 163,
    guessWord: "INFORMATIKUS",
    tabooWords: ["programozik", "számítógép", "laptop", "foglalkozás", ""],
  },
  {
    id: 164,
    guessWord: "MODELL",
    tabooWords: ["színpad", "ruha", "divat", "foglalkozás", ""],
  },
  {
    id: 165,
    guessWord: "ZENÉSZ",
    tabooWords: ["hangszer", "zenél", "koncert", "színpad", ""],
  },
  {
    id: 166,
    guessWord: "KEMENCE",
    tabooWords: ["süt", "tűz", "kenyér", "friss", "paraszt"],
  },
  {
    id: 167,
    guessWord: "szieszta",
    tabooWords: ["mediterrán", "szokás", "munka", "koradélután", "pihenés"],
  },
  {
    id: 168,
    guessWord: "szaloncukor",
    tabooWords: ["karácsony", "díszít", "zselés", "marcipán", "fenyőfa"],
  },
  {
    id: 169,
    guessWord: "nyaklánc",
    tabooWords: ["ékszer", "gyöngy", "arany", "medál", "ezüst"],
  },
  {
    id: 170,
    guessWord: "kádár",
    tabooWords: ["mesterember", "fa", "hordó", "kézműves", "bodnár"],
  },
  {
    id: 171,
    guessWord: "udvarol",
    tabooWords: ["virág", "kedveskedik", "csábít", "randi", "fűz"],
  },
  {
    id: 172,
    guessWord: "segélyhívószám",
    tabooWords: ["telefon", "mentő", "rendőrség", "tárcsáz", "országos"],
  },
  {
    id: 173,
    guessWord: "karaoke",
    tabooWords: ["mikrofon", "közönség", "énekel", "bár", "japán"],
  },
  {
    id: 174,
    guessWord: "teker",
    tabooWords: ["hajt", "pedál", "becsomagol", "göngyöl", "bicikli"],
  },
  {
    id: 175,
    guessWord: "sima",
    tabooWords: ["redős", "felület", "sík", "lapos", "rücskös"],
  },
  {
    id: 176,
    guessWord: "szerencse",
    tabooWords: ["lottó", "játék", "malac", "mázli", "kerék"],
  },
  {
    id: 177,
    guessWord: "gyömbér",
    tabooWords: ["üdítő", "fűszer", "sütemény", "csíp", "édeskés"],
  },
  {
    id: 178,
    guessWord: "betonoz",
    tabooWords: ["víz", "sóder", "cement", "épít", "út"],
  },
  {
    id: 179,
    guessWord: "csodaszarvas",
    tabooWords: ["monda", "Arany János", "monda", "mítikus", "magyar"],
  },
  {
    id: 180,
    guessWord: "szarvasbőgés",
    tabooWords: ["bika", "agancs", "ősz", "párzás", "küzdelem"],
  },
  {
    id: 181,
    guessWord: "gyerekülés",
    tabooWords: ["biztonság", "utazás", "autó", "135 cm", "kresz"],
  },
  {
    id: 182,
    guessWord: "cunami",
    tabooWords: ["szökőár", "óceán", "hullám", "katasztrófa", "pusztít"],
  },
  {
    id: 183,
    guessWord: "savanyúkáposzta",
    tabooWords: ["kúra", "C-vitamin", "töltött", "hordó", "egészséges"],
  },
  {
    id: 184,
    guessWord: "bilincs",
    tabooWords: ["rendőr", "letartóztat", "csukló", "kulcs", "kerék"],
  },
  {
    id: 185,
    guessWord: "szilvalekvár",
    tabooWords: ["befőz", "üveg", "kenyér", "cukor", "gyümölcs"],
  },
  {
    id: 186,
    guessWord: "Eiffel-torony",
    tabooWords: ["franciaország", "párizs", "turista", "magas", "fotó"],
  },
  {
    id: 187,
    guessWord: "uszoda",
    tabooWords: ["víz", "medence", "edz", "rajtkő", "verseny"],
  },
  {
    id: 188,
    guessWord: "tangó",
    tabooWords: ["tánc", "argentin", "szenvedély", "pár", "hirtelen"],
  },
  {
    id: 189,
    guessWord: "szobabicikli",
    tabooWords: ["edz", "teker", "kerék", "fogyaszt", "lakás"],
  },
  {
    id: 190,
    guessWord: "vásár",
    tabooWords: ["vevő", "eladó", "tömeg", "áru", "kereskedő"],
  },
  {
    id: 191,
    guessWord: "pulóver",
    tabooWords: ["gyapjú", "felső", "meleg", "garbó", "kötött"],
  },
  {
    id: 192,
    guessWord: "szemüvegkeret",
    tabooWords: ["lencse", "látás", "fül", "éles", "olvasó"],
  },
  {
    id: 193,
    guessWord: "doppingvizsgálat",
    tabooWords: ["sportoló ", "ellenőrzés", "szer", "serkentő", "kizár"],
  },
  {
    id: 194,
    guessWord: "jótékonysági bál",
    tabooWords: ["estély", "adomány", "jómódú", "gyűjt", "felajánlás"],
  },
  {
    id: 195,
    guessWord: "film",
    tabooWords: ["mozi", "sztár", "TV", "néz ", "jegy"],
  },
  {
    id: 196,
    guessWord: "maraton",
    tabooWords: ["Görögország", "futás", "42 km", "olimpia", "Paula Refcliff"],
  },
  {
    id: 197,
    guessWord: "kisgömböc",
    tabooWords: ["padlás", "mese", "bekap", "bicska", "kidurran"],
  },
  {
    id: 198,
    guessWord: "harmadfokú",
    tabooWords: ["készültség", "egy", "negyed", "eljárás", "függvény"],
  },
  {
    id: 199,
    guessWord: "csörgődob",
    tabooWords: ["tamburin", "zene", "arab", "ráz", "táncos"],
  },
  {
    id: 200,
    guessWord: "fizetésnap",
    tabooWords: ["dátum", "számla", "bér", "munkáltató", "átutalás"],
  },
  {
    id: 201,
    guessWord: "tüntetés",
    tabooWords: ["tiltakozás", "politika", "gyülekezés", "transzparens", "ügy"],
  },
  {
    id: 202,
    guessWord: "gyógyszermérgezés",
    tabooWords: ["pirula", "tabletta", "túlzott", "bevesz", "adagol"],
  },
  {
    id: 203,
    guessWord: "asszonykórus",
    tabooWords: ["veresegyházi", "nő", "idős", "népviselet", "énekel"],
  },
  {
    id: 204,
    guessWord: "víz",
    tabooWords: ["áttetsző", "tiszta", "szénsavas", "csap", "ásvány"],
  },
  {
    id: 205,
    guessWord: "bizalom",
    tabooWords: ["barátság", "titok", "csalódás", "visszaélés", "biztonság"],
  },
  {
    id: 206,
    guessWord: "zsűritag",
    tabooWords: ["tehetségkutató", "dönt", "bírál", "személy", "kritizál"],
  },
  {
    id: 207,
    guessWord: "adomány",
    tabooWords: ["ingyen", "juttat", "segítség", "pénz", "rászoruló"],
  },
  {
    id: 208,
    guessWord: "álom",
    tabooWords: ["alszik", "agy", "fejtés", "téli", "kép"],
  },
  {
    id: 209,
    guessWord: "összkomfortos",
    tabooWords: ["lakás", "fűtés", "mellékhelyiség", "bevezet", "víz"],
  },
  {
    id: 210,
    guessWord: "diploma",
    tabooWords: ["főiskola", "egyetem", "elvégez", "szakma", "megvéd"],
  },
  {
    id: 211,
    guessWord: "fénymásol",
    tabooWords: ["sokszorosít", "papír", "dokumentum", "színes", "nagyít"],
  },
];

// DISPLAY POINTS
let teamOnePointContainer = document.querySelector(
  ".container__teamNameContainer_team1Container"
);
let teamTwoPointContainer = document.querySelector(
  ".container__teamNameContainer_team2Container"
);

// CARD ELEMENTS
const word = document.querySelector(".card__title");
const tabooWordsBlock = document.querySelector(".card__tabooWordContainer");
const passBtn = document.querySelector(".pass");
const okBtn = document.querySelector(".ok");
const tabooBtn = document.querySelector(".taboo");
let randomNmr;

// GET RANDOM WORD INSIDE THE CARD FUNCTION- MAIN FUNCTION
const getWord = () => {
  randomNmr = Math.floor(Math.random() * words.length);
  tabooWordsBlock.innerHTML = "";
  word.textContent = words[randomNmr].guessWord;

  words[randomNmr].tabooWords.forEach((tabooWord) => {
    let tabooWordContainer = document.createElement("h1");
    tabooWordContainer.textContent = tabooWord;
    tabooWordsBlock.appendChild(tabooWordContainer);
    currentPoints();
  });

  // REMOVE THE WORD FROM THE ARRAY
};

// OK BUTTON FUNCTION
const okBtnFunction = () => {
  getWord();
  pointCounterValue++;
  pointCounter.innerHTML = `Pontszám: ${pointCounterValue}`;
};

// PASS BUTTON FUNCTION
const passBtnFunction = () => {
  passCounterValue === 0
    ? alert("Nincs több passz lehetőséged!")
    : passCounterValue--;
  passCounter.innerHTML = `Passz: ${passCounterValue}`;
  if (passCounterValue > 0) {
    getWord();
  }
};

// TABOO BUTTON FUNCTION
const tabooBtnFunction = () => {
  pointCounterValue--;
  pointCounter.innerHTML = `Pontszám: ${pointCounterValue}`;
  getWord();
};

// TIMER FUNCTION
let timerBlock = document.querySelector(".container__timer");
let roundTime = 59;
function startTimer(duration, timerBlock) {
  let timer = duration,
    minutes,
    seconds;
  let timerFunction = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerBlock.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
    if (seconds < 11) {
      timerBlock.style.color = "red";
    } else {
      timerBlock.style.color = "inherit";
    }
    function myStopFunction() {
      clearInterval(timerFunction);
    }

    if (timerBlock.textContent == "00") {
      myStopFunction();
      endRoundPopup();
      checkIfPopupVisible();
      pointCalculation();
    }
  }, 1000);
}

// POPUP WINDOW ELEMENTS
let container = document.querySelector(".container");
let popupWindow = document.querySelector(".container__popup");
let teamOneInput = document.querySelector(".team1");
let teamTwoInput = document.querySelector(".team2");
let goBtn = document.querySelector(".go");

let teams = [
  { teamName: "", points: 0, active: true },
  { teamName: "", points: 0, active: false },
];

// FUNCTION TO RUN ON THE "GAME ON!" BUTTON
const gameStart = () => {
  teams[0].teamName = teamOneInput.value;
  teams[1].teamName = teamTwoInput.value;
  if (teams[0].teamName === teams[1].teamName) {
    alert("A két csapat neve nem lehet ugyanaz!");
    return;
  } else if (teams[0].teamName === "" || teams[1].teamName === "") {
    alert("A csapatnév nem lehet üres!");
    return;
  }
  popupWindow.style.opacity = "0";

  checkIfPopupVisible();
  pointCounterValue = 0;
  timerBlock.textContent = "";
  startTimer(roundTime, timerBlock);
  getWord();
  goBtn.disabled = true;
};

// GIVE ACTIVE STATUS TO THE CURRENT TEAM
function giveActiveStatus() {
  if (teamOnePointContainer.classList.contains("active")) {
    teamOnePointContainer.classList.remove("active");
    teams[0].active = false;
    teamTwoPointContainer.classList.add("active");
    teams[1].active = true;
  } else if (teamTwoPointContainer.classList.contains("active")) {
    teamTwoPointContainer.classList.remove("active");
    teams[1].active = false;
    teamOnePointContainer.classList.add("active");
    teams[0].active = true;
  }
}

// COUNT THE POINTS OF THE ACTIVE TEAM
function pointCalculation() {
  if (teams[0].active === true) {
    teams[0].points += pointCounterValue;
    console.log(teams[0].points);
  } else if (teams[1].active === true) {
    teams[1].points += pointCounterValue;
    console.log(teams[1].points);
  }
}

// CHECK IF THE POPUP IS VISIBLE FUNCTION
const checkIfPopupVisible = () => {
  if (popupWindow.style.opacity === "1") {
    container.style.filter = "blur(10px)";
    passBtn.disabled = true;
    okBtn.disabled = true;
    tabooBtn.disabled = true;
  } else {
    container.style.filter = "blur(0px)";
    passBtn.disabled = false;
    okBtn.disabled = false;
    tabooBtn.disabled = false;
  }
};

const currentPoints = () => {
  teamOnePointContainer.textContent = `${(teams[0].teamName =
    teamOneInput.value)} : ${teams[0].points} pont`;
  teamTwoPointContainer.textContent = `${(teams[1].teamName =
    teamTwoInput.value)} : ${teams[1].points} pont`;
};

// EVENT LISTENERS
passBtn.addEventListener("click", passBtnFunction);
okBtn.addEventListener("click", okBtnFunction);
tabooBtn.addEventListener("click", tabooBtnFunction);
goBtn.addEventListener("click", gameStart);

//END OF THE ROUND POPUP WINDOW
const endRoundPopup = () => {
  popupWindow.style.opacity = "1";
  popupWindow.innerHTML = `
  <img src="./img/logo.png"
      alt="Logo"
      class="animate__animated animate__backInLeft"
      />
      <h3 style="text-align: center; line-height: 1.5;" class="container__popupyourPointsInThisRound">Ebben a körben ${pointCounterValue} pontot szerzett a csapatod.</h3>
      <div class="container__popup_buttonContainer">        
      <button
      class="button blue actualPoints animate__animated animate__fadeIn animate"
      >Jelenlegi Pontállás!</button>
      <button
      class="button green nextTeam animate__animated animate__fadeIn animate"
      >Következő csapat!</button>
      </div>
  `;

  let actualPointsBtn = document.querySelector(".actualPoints");
  actualPointsBtn.addEventListener("click", showActualPoints);

  let nextTeamBtn = document.querySelector(".nextTeam");
  nextTeamBtn.addEventListener("click", () => {
    gameStart();
    giveActiveStatus();
    pointCounterValue = 0;
    pointCounter.innerHTML = `Pontszám: ${pointCounterValue}`;
    if (popupWindow.style.opacity === "0") {
      actualPointsBtn.disabled = true;
      nextTeamBtn.disabled = true;
    } else {
      actualPointsBtn.style.userSelect = "auto";
      nextTeamBtn.style.userSelect = "auto";
    }
    passCounterValue = 2;
    passCounter.innerHTML = `Passz: ${passCounterValue}`;
  });

  console.log(teams[0].active);
  console.log(teams[1].active);
  console.log(teams[0].points);
  console.log(teams[1].points);
};

// ENDROUND FUNCTIONS

// SHOW ACTUAL POINTS PAGE
const showActualPoints = () => {
  popupWindow.innerHTML = `
  <img
  src="./img/logo.png"
  alt="Logo"
  class="animate__animated animate__backInLeft"
  />
  <div class="actualPointPage">
  <h3 class="actualPointPageText" style="text-align: center;" >
  A(z) ${teams[0].teamName} csapat jelenlegi pontszáma: ${teams[0].points} pont
  <br>
  <br>
  A(z) ${teams[1].teamName} csapat jelenlegi pontszáma: ${teams[1].points} pont
  </h1>
  <button
      class="button blue actualPointsBackBtn animate__animated animate__fadeIn animate__delay-1s effect-2" style="margin-top: 1.5em; width: 50%;"
      >Vissza az előző oldalra!</button>
  </div>
  `;

  let actualPointsBackBtn = document.querySelector(".actualPointsBackBtn");
  actualPointsBackBtn.addEventListener("click", endRoundPopup);
};

// WHAT TO DO WHEN THE PAGE LOADS
window.onload = (event) => {
  popupWindow.style.opacity = "1"; // VISSZA KELL ÍRNI MAJD AZ ONLOAD OPACITY-T 1-re
  checkIfPopupVisible();
};
