import { Wrestler, LocalizedContent } from '../types/wrestler'
import { LanguageCode } from '../types/language'

export const wrestlers: Wrestler[] = [
  {
    id: 'roman-reigns',
    name: 'Roman Reigns',
    alternateNames: ['Leakee', 'Roman Leakee', "The Big Dog", "The Tribal Chief"],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2010
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 4,
        yearFirst: 2015,
        yearLast: 2023
      },
      {
        name: 'WWE Universal Championship',
        times: 2,
        yearFirst: 2020,
        yearLast: 2024
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2020,
        yearLast: 2024
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 1,
        yearFirst: 2017,
        yearLast: 2017
      },
      {
        name: 'WWE United States Championship',
        times: 1,
        yearFirst: 2016,
        yearLast: 2017
      },
      {
        name: 'WWE Tag Team Championships',
        times: 1,
        yearFirst: 2013,
        yearLast: 2013
      }
    ],
    finishers: ['Spear', 'Superman Punch'],
    signature_moves: ['Drive By', 'Moment of Silence'],
    height: '6\'3"',
    weight: '265 lbs',
    birthDate: '1985-05-25',
    birthplace: {
      pl: 'Pensacola, Floryda',
      en: 'Pensacola, Florida',
      de: 'Pensacola, Florida',
      es: 'Pensacola, Florida'
    },
    characteristic: {
      pl: 'Długie czarne włosy, tradycyjne tatuaże samoańskie',
      en: 'Long black hair, traditional Samoan tattoos',
      de: 'Lange schwarze Haare, traditionelle samoanische Tattoos',
      es: 'Cabello negro largo, tatuajes samoanos tradicionales'
    },
    funFacts: [
      {
        pl: 'Jest członkiem słynnej rodziny wrestlerskiej Anoa\'i i kuzynem The Rocka',
        en: 'He is a member of the famous Anoa\'i wrestling family and a cousin of The Rock',
        de: 'Er ist Mitglied der berühmten Anoa\'i Wrestling-Familie und ein Cousin von The Rock',
        es: 'Es miembro de la famosa familia de lucha libre Anoa\'i y primo de The Rock'
      },
      {
        pl: 'Przed wrestlingiem był profesjonalnym graczem futbolu amerykańskiego',
        en: 'Before wrestling, he was a professional American football player',
        de: 'Vor dem Wrestling war er professioneller American-Football-Spieler',
        es: 'Antes de la lucha libre, fue jugador profesional de fútbol americano'
      },
      {
        pl: 'Pokonał białaczkę dwukrotnie - w 2007 i 2018 roku',
        en: 'He defeated leukemia twice - in 2007 and 2018',
        de: 'Er besiegte Leukämie zweimal - 2007 und 2018',
        es: 'Venció a la leucemia dos veces - en 2007 y 2018'
      }
    ],
    image: '/images/wrestlers/roman-reigns.jpg'
  },
  {
    id: 'kenny-omega',
    name: 'Kenny Omega',
    alternateNames: ['Tyson Smith'],
    currentEmployer: 'AEW',
    currentRoster: 'Dynamite',
    yearsActive: {
      from: 2001
    },
    championships: [
      {
        name: 'AEW World Championship',
        times: 1,
        yearFirst: 2020,
        yearLast: 2021
      },
      {
        name: 'AEW International Championship',
        times: 1,
        yearFirst: 2025,
        yearLast: 2025
      },
      {
        name: 'AEW World Trios Championship',
        times: 2,
        yearFirst: 2023,
        yearLast: 2023
      },
      {
        name: "AEW World Tag Team Championships",
        times: 1,
        yearFirst: 2023,
        yearLast: 2023
      }
    ],
    finishers: ['One-Winged Angel', 'V-Trigger'],
    signature_moves: ['You Can\'t Escape', 'Dr. Wily\'s Bomb'],
    height: '6\'0"',
    weight: '227 lbs',
    birthDate: '1983-10-16',
    birthplace: {
      pl: 'Winnipeg, Manitoba, Kanada',
      en: 'Winnipeg, Manitoba, Canada',
      de: 'Winnipeg, Manitoba, Kanada',
      es: 'Winnipeg, Manitoba, Canadá'
    },
    characteristic: {
      pl: 'Blond włosy z przedziałkiem, charakterystyczne mimiki twarzy',
      en: 'Blonde hair with a part, distinctive facial expressions',
      de: 'Blondes Haar mit Scheitel, charakteristische Gesichtsausdrücke',
      es: 'Cabello rubio con raya al lado, expresiones faciales distintivas'
    },
    funFacts: [
      {
        pl: 'Jest zapalonym graczem i często inspiruje swoje ruchy grami video',
        en: 'He is an avid gamer and often draws inspiration for his moves from video games',
        de: 'Er ist ein begeisterter Gamer und lässt sich oft von Videospielen für seine Moves inspirieren',
        es: 'Es un ávido jugador y a menudo se inspira en videojuegos para sus movimientos'
      },
      {
        pl: 'Występował w japońskiej federacji DDT Pro-Wrestling jako maskotka Kota Ibushiego',
        en: 'He performed in the Japanese promotion DDT Pro-Wrestling as Kota Ibushi\'s mascot',
        de: 'Er trat in der japanischen Promotion DDT Pro-Wrestling als Maskottchen von Kota Ibushi auf',
        es: 'Actuó en la promoción japonesa DDT Pro-Wrestling como la mascota de Kota Ibushi'
      },
      {
        pl: 'Otrzymał 7 gwiazdek od Dave\'a Meltzera za walkę z Kazuchika Okadą w 2018',
        en: 'He received 7 stars from Dave Meltzer for his match with Kazuchika Okada in 2018',
        de: 'Er erhielt 7 Sterne von Dave Meltzer für seinen Kampf mit Kazuchika Okada im Jahr 2018',
        es: 'Recibió 7 estrellas de Dave Meltzer por su combate con Kazuchika Okada en 2018'
      }
    ],
    image: '/images/wrestlers/kenny-omega.jpg'
  },
  {
    id: 'the-miz',
    name: 'The Miz',
    alternateNames: ['Mike Mizanin', 'Michael Mizanin', "Miz", "Mike The Miz"],
    currentEmployer: 'WWE',
    currentRoster: 'Smackdown',
    yearsActive: {
      from: 2003
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 2,
        yearFirst: 2010,
        yearLast: 2021
      },
      {
        name: 'WWE Money in the Bank',
        times: 2,
        yearFirst: 2016,
        yearLast: 2017
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 8,
        yearFirst: 2012,
        yearLast: 2018
      },
      {
        name: 'WWE United States Championship',
        times: 2,
        yearFirst: 2016,
        yearLast: 2017
      },
      {
        name: 'WWE Tag Team Championships',
        times: 2,
        yearFirst: 2013,
        yearLast: 2013
      },
      {
        name: 'WWE World Tag Team Championships',
        times: 5,
        yearFirst: 2013,
        yearLast: 2013
      },
    ],
    finishers: ['Skull Crushing Finale', 'Figure-Four Leglock'],
    signature_moves: ['Reality Check', 'Yes Kicks'],
    height: '6\'2"',
    weight: '221 lbs',
    birthDate: '1980-10-08',
    birthplace: {
      pl: 'Parma, Ohio',
      en: 'Parma, Ohio',
      de: 'Parma, Ohio',
      es: 'Parma, Ohio'
    },
    characteristic: {
      pl: 'Krótkie brązowe włosy, zawsze w garniturze, aroganckie usposobienie',
      en: 'Short brown hair, always in a suit, arrogant demeanor',
      de: 'Kurze braune Haare, immer im Anzug, arrogantes Auftreten',
      es: 'Cabello castaño corto, siempre con traje, comportamiento arrogante'
    },
    funFacts: [
      {
        pl: 'Rozpoczął karierę występując w reality show MTV ',
        en: 'He started his career by appearing on MTV\'s reality show',
        de: 'Er begann seine Karriere mit einem Auftritt in MTVs Reality-Show',
        es: 'Comenzó su carrera apareciendo en el reality show de MTV'
      },
      {
        pl: 'Zagrał główną rolę w serii filmów akcji "The Marine" (części 3, 4, 5 i 6)',
        en: 'He starred in "The Marine" action film series (parts 3, 4, 5, and 6)',
        de: 'Er spielte die Hauptrolle in der Actionfilm-Reihe "The Marine" (Teile 3, 4, 5 und 6)',
        es: 'Protagonizó la serie de películas de acción "The Marine" (partes 3, 4, 5 y 6)'
      },
      {
        pl: 'Ma własne reality show z żoną',
        en: 'He has his own reality show with his wife',
        de: 'Er hat seine eigene Reality-Show mit seiner Frau"',
        es: 'Tiene su propio reality show con su esposa '
      }
    ],
    image: '/images/wrestlers/the-miz.jpg'
  },
  {
    id: 'john-cena',
    name: 'John Cena',
    alternateNames: ['The Prototype', 'Doctor of Thuganomics',],
    currentEmployer: 'WWE',
    currentRoster: 'Part-time',
    yearsActive: {
      from: 1999
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 14,
        yearFirst: 2005,
        yearLast: 2025
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 3,
        yearFirst: 2009,
        yearLast: 2013
      },
      {
        name: 'WWE Royal Rumble',
        times: 2,
        yearFirst: 2016,
        yearLast: 2017
      },
      {
        name: 'WWE Money in the Bank',
        times: 1,
        yearFirst: 2016,
        yearLast: 2017
      },
      {
        name: 'WWE United States Championship',
        times: 5,
        yearFirst: 2004,
        yearLast: 2015
      },
      {
        name: 'WWE Tag Team Championships',
        times: 2,
        yearFirst: 2013,
        yearLast: 2013
      },
      {
        name: 'WWE World Tag Team Championships',
        times: 2,
        yearFirst: 2013,
        yearLast: 2013
      }
    ],
    finishers: ['Attitude Adjustment', 'STF'],
    signature_moves: ['Five Knuckle Shuffle', 'Shoulder Tackles'],
    height: '6\'1"',
    weight: '251 lbs',
    birthDate: '1977-04-23',
    birthplace: {
      pl: 'West Newbury, Massachusetts',
      en: 'West Newbury, Massachusetts',
      de: 'West Newbury, Massachusetts',
      es: 'West Newbury, Massachusetts'
    },
    characteristic: {
      pl: 'Krótkie włosy, kolorowe koszulki i czapki',
      en: 'Short hair, colorful shirts and caps',
      de: 'Kurze Haare, bunte T-Shirts und Kappen',
      es: 'Pelo corto, camisetas y gorras coloridas'
    },
    funFacts: [
      {
        pl: 'Pobił rekord fundacji Make-A-Wish, spełniając ponad 650 życzeń chorych dzieci',
        en: 'He broke the Make-A-Wish record by granting over 650 wishes for sick children',
        de: 'Er brach den Make-A-Wish-Rekord, indem er über 650 Wünsche für kranke Kinder erfüllte',
        es: 'Rompió el récord de Make-A-Wish al conceder más de 650 deseos a niños enfermos'
      },
      {
        pl: 'Jest aktorem o rosnącej karierze w Hollywood, wystąpił m.in. w filmach "Szybcy i wściekli" i "Suicide Squad"',
        en: 'He is an actor with a growing career in Hollywood, appearing in movies like "Fast & Furious" and "Suicide Squad"',
        de: 'Er ist ein Schauspieler mit wachsender Karriere in Hollywood und spielte in Filmen wie "Fast & Furious" und "Suicide Squad" mit',
        es: 'Es un actor con una carrera en crecimiento en Hollywood, apareciendo en películas como "Fast & Furious" y "Suicide Squad"'
      },
      {
        pl: 'Nagrał album hip-hopowy, który dotarł do 15. miejsca na liście Billboard 200',
        en: 'He recorded a hip-hop album that reached #15 on the Billboard 200 chart',
        de: 'Er nahm ein Hip-Hop-Album auf, das Platz 15 der Billboard 200-Charts erreichte',
        es: 'Grabó un álbum de hip-hop que alcanzó el puesto 15 en la lista Billboard 200'
      }
    ],
    image: '/images/wrestlers/john-cena.jpg'
  },
  {
    id: 'kofi-kingston',
    name: 'Kofi Kingston',
    alternateNames: ['Kofi Nahaje Sarkodie-Mensah', "Kofi"],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
    yearsActive: {
      from: 2006
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 1,
        yearFirst: 2019,
        yearLast: 2019
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 4,
        yearFirst: 2008,
        yearLast: 2012
      },
      {
        name: 'WWE United States Championship',
        times: 3,
        yearFirst: 2008,
        yearLast: 2023
      },
      {
        name: 'WWE World Tag Team Championships',
        times: 7,
        yearFirst: 2013,
        yearLast: 2013
      },
      {
        name: 'WWE Tag Team Championships',
        times: 7,
        yearFirst: 2013,
        yearLast: 2013
      }
    ],
    finishers: ['Trouble in Paradise', 'S.O.S.'],
    signature_moves: ['Boom Drop', 'Double Foot Stomp', "Kofi"],
    height: '6\'0"',
    weight: '212 lbs',
    birthDate: '1981-08-14',
    birthplace: {
      pl: 'Kumasi, Ghana',
      en: 'Kumasi, Ghana',
      de: 'Kumasi, Ghana',
      es: 'Kumasi, Ghana'
    },
    characteristic: {
      pl: 'Dredy, kolorowe stroje, niesamowita atletyczność i Royal Rumble escapes',
      en: 'Dreadlocks, colorful attire, incredible athleticism and Royal Rumble escapes',
      de: 'Dreadlocks, bunte Kleidung, unglaubliche Athletik und Royal Rumble Escapes',
      es: 'Rastas, atuendos coloridos, atletismo increíble y escapes del Royal Rumble'
    },
    funFacts: [
      {
        pl: 'Jest członkiem popularnej grupy The New Day wraz z Big E i Xavierem Woodsem',
        en: 'He is a member of the popular group The New Day along with Big E and Xavier Woods',
        de: 'Er ist Mitglied der beliebten Gruppe The New Day zusammen mit Big E und Xavier Woods',
        es: 'Es miembro del popular grupo The New Day junto con Big E y Xavier Woods'
      },
      {
        pl: 'Był pierwszym wrestlerem urodzonym w Afryce, który zdobył WWE Championship',
        en: 'He was the first African-born wrestler to win the WWE Championship',
        de: 'Er war der erste in Afrika geborene Wrestler, der die WWE Championship gewann',
        es: 'Fue el primer luchador nacido en África en ganar el Campeonato de la WWE'
      },
      {
        pl: 'Znany z niesamowitych uników w Royal Rumble matchach, które stały się jego znakiem rozpoznawczym',
        en: 'Known for his amazing Royal Rumble saves that have become his trademark',
        de: 'Bekannt für seine erstaunlichen Royal Rumble Rettungen, die zu seinem Markenzeichen geworden sind',
        es: 'Conocido por sus increíbles salvamentos en Royal Rumble que se han convertido en su marca registrada'
      }
    ]
  },
  {
    id: 'aj-styles',
    name: 'AJ Styles',
    alternateNames: ['Allen Neal Jones', 'The Phenomenal One', 'AJStyles', 'AJ',],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
    yearsActive: {
      from: 1998
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 2,
        yearFirst: 2016,
        yearLast: 2018
      },
      {
        name: 'TNA World Heavyweight Championship',
        times: 2,
        yearFirst: 2009,
        yearLast: 2013
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 1,
        yearFirst: 2016,
        yearLast: 2016
      },
      {
        name: 'WWE United States Championship',
        times: 3,
        yearFirst: 2016,
        yearLast: 2016
      },
      {
        name: 'WWE Raw Tag Team Championships',
        times: 1,
        yearFirst: 2013,
        yearLast: 2013
      },

      {
        name: 'TNA X Division Championship',
        times: 6,
        yearFirst: 2014,
        yearLast: 2015
      },
      {
        name: 'TNA World Tag Team Championships',
        times: 2,
        yearFirst: 2013,
        yearLast: 2013
      }
    ],
    finishers: ['Styles Clash', 'Phenomenal Forearm', 'Calf Crusher'],
    signature_moves: ['Pele Kick', 'Ushigoroshi', 'Rack Bomb'],
    height: '5\'11"',
    weight: '218 lbs',
    birthDate: '1977-06-02',
    birthplace: {
      pl: 'Gainesville, Georgia',
      en: 'Gainesville, Georgia',
      de: 'Gainesville, Georgia',
      es: 'Gainesville, Georgia'
    },
    characteristic: {
      pl: 'Długie włosy, rękawiczki, charakterystyczny styl ringowy z elementami lucha libre',
      en: 'Long hair, gloves, distinctive ring style with lucha libre elements',
      de: 'Lange Haare, Handschuhe, unverwechselbarer Ringkampfstil mit Lucha Libre-Elementen',
      es: 'Pelo largo, guantes, estilo de lucha distintivo con elementos de lucha libre mexicana'
    },
    funFacts: [
      {
        pl: 'Przed dołączeniem do WWE był gwiazdą TNA i New Japan Pro Wrestling, co jest nietypową ścieżką kariery',
        en: 'Before joining WWE, he was a star in TNA and New Japan Pro Wrestling, which is an unusual career path',
        de: 'Bevor er zur WWE kam, war er ein Star in TNA und New Japan Pro Wrestling, was ein ungewöhnlicher Karriereweg ist',
        es: 'Antes de unirse a WWE, fue una estrella en TNA y New Japan Pro Wrestling, lo que es una trayectoria profesional inusual'
      },
      {
        pl: 'Przez lata był uważany za najlepszego wrestlera na świecie, który nigdy nie pracował dla WWE',
        en: 'For years, he was considered the best wrestler in the world who never worked for WWE',
        de: 'Jahrelang galt er als der beste Wrestler der Welt, der nie für die WWE gearbeitet hat',
        es: 'Durante años, fue considerado el mejor luchador del mundo que nunca trabajó para WWE'
      },
      {
        pl: 'Jest bardzo religijny i często nosi na swoich strojach napisy "P1" (Phenomenal One) i "AJ"',
        en: 'He is very religious and often wears gear with "P1" (Phenomenal One) and "AJ" written on it',
        de: 'Er ist sehr religiös und trägt oft Ausrüstung mit "P1" (Phenomenal One) und "AJ" Aufschriften',
        es: 'Es muy religioso y a menudo usa atuendos con "P1" (Phenomenal One) y "AJ" escritos en ellos'
      }
    ]
  },
  {
    id: 'brock-lesnar',
    name: 'Brock Lesnar',
    alternateNames: ['The Beast Incarnate', 'The Next Big Thing'],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
    yearsActive: {
      from: 2000
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 7,
        yearFirst: 2002,
        yearLast: 2019
      },
      {
        name: 'WWE Universal Championship',
        times: 3,
        yearFirst: 2017,
        yearLast: 2022
      },
      {
        name: 'WWE Royal Rumble',
        times: 2,
        yearFirst: 2013,
        yearLast: 2013
      },
      {
        name: 'WWE Money in the Bank',
        times: 1,
        yearFirst: 2008,
        yearLast: 2010
      },
      {
        name: 'WWE King of the Ring',
        times: 1,
        yearFirst: 2013,
        yearLast: 2013
      },
      {
        name: 'UFC Heavyweight Championship',
        times: 1,
        yearFirst: 2013,
        yearLast: 2013
      }

    ],
    finishers: ['F-5', 'Kimura Lock', 'German Suplex'],
    signature_moves: ['Suplex City', 'Fallaway Slam', 'Corner Shoulder Blocks'],
    height: '6\'3"',
    weight: '286 lbs',
    birthDate: '1977-07-12',
    birthplace: {
      pl: 'Webster, Dakota Południowa',
      en: 'Webster, South Dakota',
      de: 'Webster, South Dakota',
      es: 'Webster, Dakota del Sur'
    },
    characteristic: {
      pl: 'Muskularny, blond włosy w stylu crew cut, duży tatuaż miecza na klatce piersiowej',
      en: 'Muscular build, blonde crew cut hair, large sword tattoo on chest',
      de: 'Muskulöser Körperbau, blonder Bürstenschnitt, großes Schwert-Tattoo auf der Brust',
      es: 'Complexión musculosa, pelo rubio corto, gran tatuaje de espada en el pecho'
    },
    funFacts: [
      {
        pl: 'Przed karierą w WWE był mistrzem NCAA w zapasach i zawodnikiem NFL (Minnesota Vikings)',
        en: 'Before WWE, he was an NCAA wrestling champion and NFL player (Minnesota Vikings)',
        de: 'Vor der WWE war er NCAA-Wrestling-Champion und NFL-Spieler (Minnesota Vikings)',
        es: 'Antes de la WWE, fue campeón de lucha libre de la NCAA y jugador de la NFL (Minnesota Vikings)'
      },
      {
        pl: 'Przeszedł do MMA i został mistrzem wagi ciężkiej UFC, pokonując Randy\'ego Couture\'a',
        en: 'Transitioned to MMA and became UFC Heavyweight Champion by defeating Randy Couture',
        de: 'Wechselte zum MMA und wurde UFC Schwergewichts-Champion durch einen Sieg gegen Randy Couture',
        es: 'Pasó a MMA y se convirtió en Campeón de Peso Pesado de UFC al derrotar a Randy Couture'
      },
      {
        pl: 'Przerwał legendarną serię 21-0 The Undertakera na WrestleManii 30',
        en: 'Ended The Undertaker\'s legendary 21-0 WrestleMania streak at WrestleMania 30',
        de: 'Beendete The Undertakers legendäre 21:0-WrestleMania-Serie bei WrestleMania 30',
        es: 'Terminó la legendaria racha de 21-0 de The Undertaker en WrestleMania 30'
      }
    ],
    image: '/images/wrestlers/brock-lesnar.jpg'
  },
  {
    id: 'rey-mysterio',
    name: 'Rey Mysterio',
    alternateNames: ['Oscar Gutierrez', 'Rey Mysterio Jr.', 'The Master of the 619'],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
    yearsActive: {
      from: 1989
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 1,
        yearFirst: 2011,
        yearLast: 2011
      },
      {
        name: 'World Heavyweight Championship',
        times: 2,
        yearFirst: 2006,
        yearLast: 2010
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2002,
        yearLast: 2007
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 2002,
        yearLast: 2007
      },
      {
        name: 'WWE United States Championship',
        times: 3,
        yearFirst: 2019,
        yearLast: 2021
      },
      {
        name: 'WWE Tag Team Championship',
        times: 4,
        yearFirst: 2002,
        yearLast: 2019
      },
      {
        name: 'WWE Smackdown Tag Team Championship',
        times: 1,
        yearFirst: 2019,
        yearLast: 2021
      },
      {
        name: 'WWE Cruiserweight Championship',
        times: 3,
        yearFirst: 2019,
        yearLast: 2021
      }
    ],
    finishers: ['619', 'West Coast Pop', 'Frog Splash'],
    signature_moves: ['Hurricanrana', 'Dropkick', 'Satellite DDT'],
    height: '5\'6"',
    weight: '175 lbs',
    birthDate: '1974-12-11',
    birthplace: {
      pl: 'San Diego, Kalifornia',
      en: 'San Diego, California',
      de: 'San Diego, Kalifornien',
      es: 'San Diego, California'
    },
    characteristic: {
      pl: 'Niewysoki wrestler w masce, charakterystyczne stroje inspirowane popkulturą, technika lucha libre',
      en: 'Short masked wrestler, signature pop culture-inspired attires, lucha libre style',
      de: 'Kleiner maskierter Wrestler, charakteristische von der Popkultur inspirierte Kostüme, Lucha-Libre-Stil',
      es: 'Luchador enmascarado de baja estatura, atuendos característicos inspirados en la cultura pop, estilo lucha libre'
    },
    funFacts: [
      {
        pl: 'Jest uznawany za jednego z największych luchadores w historii wrestlingu',
        en: 'He is considered one of the greatest luchadores in wrestling history',
        de: 'Er gilt als einer der größten Luchadores in der Geschichte des Wrestlings',
        es: 'Es considerado uno de los más grandes luchadores en la historia de la lucha libre profesional'
      },
      {
        pl: 'Należy do grona Hall of Famer',
        en: 'He is a member of the Hall of Fame',
        de: 'Er ist Mitglied des Hall of Fame',
        es: 'Es miembro del Salón de la Fama'
      },
      {
        pl: 'Jego syn również jest wrestlerem w WWE',
        en: 'His son is also a wrestler in WWE',
        de: 'Sein Sohn ist ebenfalls Wrestler in der WWE',
        es: 'Su hijo también es luchador en WWE'
      }
    ],
    image: '/images/wrestlers/rey-mysterio.jpg'
  },
  {
    id: 'edge',
    name: 'Edge',
    alternateNames: ['Adam Copeland', 'The Rated-R Superstar', 'The Ultimate Opportunist'],
    currentEmployer: 'AEW',
    currentRoster: 'Dynamite',
    yearsActive: {
      from: 1992
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 4,
        yearFirst: 2006,
        yearLast: 2010
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 7,
        yearFirst: 2007,
        yearLast: 2011
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 5,
        yearFirst: 1999,
        yearLast: 2004
      },
      {
        name: 'WWE United States Championship',
        times: 1,
        yearFirst: 2001,
        yearLast: 2001
      },
      {
        name: 'WWE World Tag Team Championship',
        times: 12,
        yearFirst: 2000,
        yearLast: 2009
      },
      {
        name: 'WWE Tag Team Championship',
        times: 2,
        yearFirst: 2000,
        yearLast: 2009
      },
      {
        name: 'WWE King of the Ring',
        times: 1,
        yearFirst: 2001,
        yearLast: 2001
      },
      {
        name: 'WWE Royal Rumble',
        times: 2,
        yearFirst: 2010,
        yearLast: 2010
      },
      {
        name: 'WWE Money in the Bank',
        times: 1,
        yearFirst: 2005,
        yearLast: 2005
      }
    ],
    finishers: ['Spear', 'Edge-O-Matic', 'Killswitch'],
    signature_moves: ['Edge-O-Cution', 'Edge-ucator', 'Downward Spiral'],
    height: '6\'5"',
    weight: '241 lbs',
    birthDate: '1973-10-30',
    birthplace: {
      pl: 'Orangeville, Ontario, Kanada',
      en: 'Orangeville, Ontario, Canada',
      de: 'Orangeville, Ontario, Kanada',
      es: 'Orangeville, Ontario, Canadá'
    },
    characteristic: {
      pl: 'Długie blond włosy, czarny płaszcz, intensywne spojrzenie, liczne tatuaże',
      en: 'Long blonde hair, black coat, intense stare, numerous tattoos',
      de: 'Lange blonde Haare, schwarzer Mantel, intensiver Blick, zahlreiche Tattoos',
      es: 'Cabello largo rubio, abrigo negro, mirada intensa, numerosos tatuajes'
    },
    funFacts: [
      {
        pl: 'Musiał przerwać karierę w 2011 roku z powodu kontuzji szyi, ale powrócił do ringu po 9 latach na Royal Rumble 2020',
        en: 'Had to retire in 2011 due to neck injury but returned to the ring after 9 years at Royal Rumble 2020',
        de: 'Musste 2011 wegen einer Nackenverletzung seine Karriere beenden, kehrte aber nach 9 Jahren beim Royal Rumble 2020 in den Ring zurück',
        es: 'Tuvo que retirarse en 2011 debido a una lesión en el cuello, pero regresó al ring después de 9 años en Royal Rumble 2020'
      },
      {
        pl: 'Był częścią legendarnego tag teamu wraz ze swoim najlepszym przyjacielem z dzieciństwa',
        en: 'Was part of a legendary tag team with his real-life childhood best friend',
        de: 'War Teil eines legendären Tag Teams mit seinem besten Freund aus Kindheitstagen',
        es: 'Formó parte de un legendario equipo en parejas su mejor amigo de la infancia en la vida real'
      },
      {
        pl: 'Po zakończeniu kariery w WWE przeszedł do AEW w 2023 roku',
        en: 'After ending his WWE career, moved to AEW in 2023 ',
        de: 'Nach dem Ende seiner WWE-Karriere wechselte er 2023 zu AEW',
        es: 'Después de terminar su carrera en WWE, se mudó a AEW en 2023'
      }
    ],
    image: '/images/wrestlers/edge.jpg'
  },
  {
    id: 'seth-rollins',
    name: 'Seth Rollins',
    alternateNames: ['Tyler Black', 'The Architect', 'The Visionary', 'The Revolutionary'],
    currentEmployer: 'WWE',
    currentRoster: 'Raw',
    yearsActive: {
      from: 2005
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 2,
        yearFirst: 2015,
        yearLast: 2019
      },
      {
        name: 'WWE Universal Championship',
        times: 2,
        yearFirst: 2019,
        yearLast: 2019
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 1,
        yearFirst: 2023,
        yearLast: 2024
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2023,
        yearLast: 2024
      },
      {
        name: 'WWE Money In The Bank',
        times: 1,
        yearFirst: 2023,
        yearLast: 2024
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 2018,
        yearLast: 2018
      },
      {
        name: 'WWE United States Championship',
        times: 2,
        yearFirst: 2015,
        yearLast: 2022
      },
      {
        name: 'WWE Tag Team Championships',
        times: 6,
        yearFirst: 2013,
        yearLast: 2023
      },
      {
        name: 'NXT Championship',
        times: 1,
        yearFirst: 2013,
        yearLast: 2023
      }
    ],
    finishers: ['Curb Stomp', 'Pedigree'],
    signature_moves: ['Falcon Arrow', 'Ripcord Knee'],
    height: '6\'1"',
    weight: '217 lbs',
    birthDate: '1986-05-28',
    birthplace: {
      pl: 'Davenport, Iowa',
      en: 'Davenport, Iowa',
      de: 'Davenport, Iowa',
      es: 'Davenport, Iowa'
    },
    characteristic: {
      pl: 'Długie ciemnobrązowe włosy, ekstrawaganckie stroje sceniczne',
      en: 'Long dark brown hair, extravagant ring gear',
      de: 'Lange dunkelbraune Haare, extravagante Ringkleidung',
      es: 'Cabello largo castaño oscuro, atuendos de lucha extravagantes'
    },
    funFacts: [
      {
        pl: 'Był pierwszym zdobywcą nowego pasa World Heavyweight Championship w 2023 roku',
        en: 'He was the inaugural World Heavyweight Champion in 2023',
        de: 'Er war der erste World Heavyweight Champion im Jahr 2023',
        es: 'Fue el campeón inaugural del World Heavyweight Championship en 2023'
      },
      {
        pl: 'Założył własną szkołę wrestlingu o nazwie Black and Brave Wrestling Academy',
        en: 'He founded his own wrestling school called Black and Brave Wrestling Academy',
        de: 'Er gründete seine eigene Wrestling-Schule namens Black and Brave Wrestling Academy',
        es: 'Fundó su propia escuela de lucha libre llamada Black and Brave Wrestling Academy'
      },
      {
        pl: 'Jest fanem komiksów i metalu, szczególnie zespołu Metallica',
        en: 'He is a fan of comic books and metal music, especially the band Metallica',
        de: 'Er ist ein Fan von Comics und Metal-Musik, insbesondere der Band Metallica',
        es: 'Es fanático de los cómics y la música metal, especialmente de la banda Metallica'
      }
    ]
  },
  {
    id: 'undertaker',
    name: 'The Undertaker',
    alternateNames: ['The Deadman', 'The Phenom', 'Mean Mark Callous'],
    currentEmployer: 'WWE (Legend)',
    currentRoster: 'Retired',
    yearsActive: {
      from: 1984,
      to: 2020
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 4,
        yearFirst: 1991,
        yearLast: 2002
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 3,
        yearFirst: 2007,
        yearLast: 2010
      },
      {
        name: 'WWE Tag Team Championships',
        times: 6,
        yearFirst: 1999,
        yearLast: 2007
      },
      {
        name: 'WWE Hardcore Championship',
        times: 1,
        yearFirst: 2001,
        yearLast: 2001
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2007,
        yearLast: 2007
      }
    ],
    finishers: ['Tombstone Piledriver', 'Hell\'s Gate'],
    signature_moves: ['Chokeslam', 'Old School'],
    height: '6\'10"',
    weight: '309 lbs',
    birthDate: '1965-03-24',
    birthplace: {
      pl: 'Houston, Teksas',
      en: 'Houston, Texas',
      de: 'Houston, Texas',
      es: 'Houston, Texas'
    },
    characteristic: {
      pl: 'Długi płaszcz, czarny kapelusz, gotycki styl, mroczna aura',
      en: 'Long coat, black hat, gothic style, dark presence',
      de: 'Langer Mantel, schwarzer Hut, gotischer Stil, düstere Ausstrahlung',
      es: 'Abrigo largo, sombrero negro, estilo gótico, presencia oscura'
    },
    funFacts: [
      {
        pl: 'Posiada rekord 21 zwycięstw z rzędu na WrestleManii',
        en: 'Holds a record of 21 consecutive wins at WrestleMania',
        de: 'Hat einen Rekord von 21 Siegen in Folge bei WrestleMania',
        es: 'Tiene un récord de 21 victorias consecutivas en WrestleMania'
      },
      {
        pl: 'Jest jednym z najbardziej rozpoznawalnych gimmicków w historii wrestlingu',
        en: 'One of the most iconic gimmicks in wrestling history',
        de: 'Eines der bekanntesten Gimmicks in der Wrestling-Geschichte',
        es: 'Uno de los personajes más icónicos en la historia del wrestling'
      },
      {
        pl: 'W 2022 roku został wprowadzony do WWE Hall of Fame',
        en: 'Inducted into the WWE Hall of Fame in 2022',
        de: '2022 in die WWE Hall of Fame aufgenommen',
        es: 'Incluido en el WWE Hall of Fame en 2022'
      }
    ],
    image: '/images/wrestlers/undertaker.jpg'
  },
  {
    id: 'stone-cold-steve-austin',
    name: 'Stone Cold Steve Austin',
    alternateNames: ['The Texas Rattlesnake', 'Steve Williams', "Stone Cold", "Steve Austin"],
    currentEmployer: 'WWE (Legend)',
    currentRoster: 'Retired',
    yearsActive: {
      from: 1989,
      to: 2003
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 6,
        yearFirst: 1998,
        yearLast: 2001
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 1997,
        yearLast: 1997
      },
      {
        name: 'WWE Tag Team Championships',
        times: 4,
        yearFirst: 1997,
        yearLast: 2001
      },
      {
        name: 'WWE Royal Rumble',
        times: 3,
        yearFirst: 1997,
        yearLast: 2001
      },
      {
        name: 'WWE King of the Ring',
        times: 1,
        yearFirst: 2005,
        yearLast: 2005
      },
      {
        name: 'WWE Million Dollar Championship',
        times: 1,
        yearFirst: 2005,
        yearLast: 2005
      }
    ],
    finishers: ['Stone Cold Stunner'],
    signature_moves: ['Lou Thesz Press', 'Mudhole Stomping'],
    height: '6\'2"',
    weight: '252 lbs',
    birthDate: '1964-12-18',
    birthplace: {
      pl: 'Austin, Teksas',
      en: 'Austin, Texas',
      de: 'Austin, Texas',
      es: 'Austin, Texas'
    },
    characteristic: {
      pl: 'Łysa głowa, kozia bródka, jeansowe szorty, piwo w ringu',
      en: 'Bald head, goatee, jean shorts, beer in the ring',
      de: 'Glatze, Ziegenbart, Jeansshorts, Bier im Ring',
      es: 'Cabeza calva, perilla, pantalones vaqueros cortos, cerveza en el ring'
    },
    funFacts: [
      {
        pl: 'Wygrał Royal Rumble trzy razy – najwięcej w historii WWE',
        en: 'Won the Royal Rumble three times – the most in WWE history',
        de: 'Dreimaliger Royal Rumble-Sieger – am meisten in der WWE-Geschichte',
        es: 'Ganó el Royal Rumble tres veces – el máximo en la historia de WWE'
      },
      {
        pl: 'Jego feud z Vince\'em McMahonem to jeden z najbardziej kultowych w historii WWE',
        en: 'His feud with Vince McMahon is one of the most iconic in WWE history',
        de: 'Seine Fehde mit Vince McMahon ist eine der bekanntesten in der WWE-Geschichte',
        es: 'Su rivalidad con Vince McMahon es una de las más icónicas en la historia de WWE'
      },
      {
        pl: 'Po zakończeniu kariery zajął się podcastem i występami w telewizji',
        en: 'After retiring, he became a podcaster and TV personality',
        de: 'Nach dem Rücktritt wurde er Podcaster und Fernsehpersönlichkeit',
        es: 'Tras retirarse, se convirtió en podcaster y personalidad televisiva'
      }
    ]
  },
  {
    id: 'randy-orton',
    name: 'Randy Orton',
    alternateNames: ['The Viper', 'The Legend Killer'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2000
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 10,
        yearFirst: 2007,
        yearLast: 2020
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 4,
        yearFirst: 2004,
        yearLast: 2013
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 1,
        yearFirst: 2003,
        yearLast: 2004
      },
      {
        name: 'WWE United States Championship',
        times: 1,
        yearFirst: 2003,
        yearLast: 2004
      },
      {
        name: 'WWE Tag Team Championships',
        times: 4,
        yearFirst: 2016,
        yearLast: 2022
      },
      {
        name: 'WWE Royal Rumble',
        times: 2,
        yearFirst: 2009,
        yearLast: 2017
      },
      {
        name: 'WWE Money In The Bank',
        times: 1,
        yearFirst: 2005,
        yearLast: 2005
      }
    ],
    finishers: ['RKO', 'Punt Kick'],
    signature_moves: ['Elevated DDT', 'Snap Powerslam'],
    height: '6\'5"',
    weight: '250 lbs',
    birthDate: '1980-04-01',
    birthplace: {
      pl: 'Knoxville, Tennessee',
      en: 'Knoxville, Tennessee',
      de: 'Knoxville, Tennessee',
      es: 'Knoxville, Tennessee'
    },
    characteristic: {
      pl: 'Tatuaże na ramionach i plecach, lodowaty wzrok, wybuchowy temperament',
      en: 'Tattoos on arms and back, icy stare, explosive temper',
      de: 'Tattoos an Armen und Rücken, eisiger Blick, explosives Temperament',
      es: 'Tatuajes en brazos y espalda, mirada helada, temperamento explosivo'
    },
    funFacts: [
      {
        pl: 'Jest najmłodszym mistrzem świata w historii WWE – miał 24 lata',
        en: 'Youngest World Champion in WWE history – 24 years old',
        de: 'Jüngster Weltmeister in der WWE-Geschichte – 24 Jahre alt',
        es: 'Campeón mundial más joven en la historia de WWE – 24 años'
      },
      {
        pl: 'Jego RKO to jeden z najbardziej viralowych finisherów',
        en: 'His RKO is one of the most viral finishers ever',
        de: 'Sein RKO ist einer der viralsten Finisher überhaupt',
        es: 'Su RKO es uno de los remates más virales de todos los tiempos'
      },
      {
        pl: 'Pochodzi z rodziny wrestlerów – jego ojciec Bob Orton Jr. też był zawodnikiem WWE',
        en: 'Comes from a wrestling family – his father Bob Orton Jr. was also a WWE wrestler',
        de: 'Kommt aus einer Wrestling-Familie – sein Vater Bob Orton Jr. war ebenfalls WWE-Wrestler',
        es: 'Proviene de una familia de lucha libre – su padre Bob Orton Jr. también fue luchador de WWE'
      }
    ]
  },
  {
    id: 'shinsuke-nakamura',
    name: 'Shinsuke Nakamura',
    alternateNames: ['The King of Strong Style', "Shinsuke", "Nakamura"],
    currentEmployer: 'WWE',
    currentRoster: 'Smackdown',
    yearsActive: {
      from: 2002
    },
    championships: [
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 2019,
        yearLast: 2021
      },
      {
        name: 'WWE United States Championship',
        times: 2,
        yearFirst: 2018,
        yearLast: 2019
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2018,
        yearLast: 2018
      },
      {
        name: 'WWE SmackDown Tag Team Championships',
        times: 1,
        yearFirst: 2021,
        yearLast: 2021
      },
      {
        name: 'NXT Championship',
        times: 2,
        yearFirst: 2018,
        yearLast: 2019
      }
    ],
    finishers: ['Kinshasa'],
    signature_moves: ['Reverse Exploder Suplex', 'Strong Style Knee Strikes'],
    height: '6\'2"',
    weight: '229 lbs',
    birthDate: '1980-02-24',
    birthplace: {
      pl: 'Kyōto, Japonia',
      en: 'Kyoto, Japan',
      de: 'Kyoto, Japan',
      es: 'Kioto, Japón'
    },
    characteristic: {
      pl: 'Ekscentryczny styl, intensywna mimika, czerwony strój ringowy',
      en: 'Eccentric style, intense facial expressions, red ring gear',
      de: 'Exzentrischer Stil, intensive Mimik, rotes Ringoutfit',
      es: 'Estilo excéntrico, expresiones faciales intensas, atuendo rojo'
    },
    funFacts: [
      {
        pl: 'Był mistrzem IWGP w NJPW zanim przeszedł do WWE',
        en: 'He was IWGP Champion in NJPW before joining WWE',
        de: 'Er war IWGP-Champion in NJPW, bevor er zur WWE kam',
        es: 'Fue campeón de IWGP en NJPW antes de unirse a WWE'
      },
      {
        pl: 'Walczył z legendarnym Brockiem Lesnarem w Japonii',
        en: 'Fought the legendary Brock Lesnar in Japan',
        de: 'Kämpfte gegen die Legende Brock Lesnar in Japan',
        es: 'Luchó contra la leyenda Brock Lesnar en Japón'
      },
      {
        pl: 'Wystąpił w japońskim programie tanecznym i reality show',
        en: 'Appeared in Japanese dance and reality shows',
        de: 'Trat in japanischen Tanz- und Reality-Shows auf',
        es: 'Apareció en programas de baile y realities japoneses'
      }
    ]
  },
  {
    id: 'otis',
    name: 'Otis',
    alternateNames: ['Otis Dozovic', 'Dozer'],
    currentEmployer: 'WWE',
    currentRoster: 'Raw',
    yearsActive: {
      from: 2015
    },
    championships: [
      {
        name: 'WWE Raw Tag Team Championships',
        times: 1,
        yearFirst: 2022,
        yearLast: 2022
      },
      {
        name: 'WWE Money in the Bank',
        times: 1,
        yearFirst: 2020,
        yearLast: 2020
      }
    ],
    finishers: ['Caterpillar', 'Vader Bomb'],
    signature_moves: ['Corner Splash', 'Spinning Scoop Slam'],
    height: '5\'10"',
    weight: '330 lbs',
    birthDate: '1991-12-21',
    birthplace: {
      pl: 'Duluth, Minnesota',
      en: 'Duluth, Minnesota',
      de: 'Duluth, Minnesota',
      es: 'Duluth, Minnesota'
    },
    characteristic: {
      pl: 'Krzepa, śmieszny taniec przed wykonaniem finishera, broda i duża masa ciała',
      en: 'Stocky build, funny dance before finisher, beard and large physique',
      de: 'Stämmiger Körperbau, lustiger Tanz vor dem Finisher, Bart und große Statur',
      es: 'Cuerpo robusto, baile gracioso antes del remate, barba y gran físico'
    },
    funFacts: [
      {
        pl: 'Jest byłym zapaśnikiem amatorskim – reprezentował USA na mistrzostwach młodzieżowych',
        en: 'Former amateur wrestler – represented USA in youth championships',
        de: 'Ehemaliger Amateur-Wrestler – vertrat die USA bei Jugendmeisterschaften',
        es: 'Exluchador amateur – representó a EE.UU. en campeonatos juveniles'
      },
      {
        pl: 'Stracił walizkę Money in the Bank nawet jej nie wykorzystując',
        en: 'Lost his Money in the Bank bag even though he didn\'t use it',
        de: 'Verlor seine Money in the Bank Tasche, obwohl er sie nicht benutzte',
        es: 'Perdió su bolsa Money in the Bank incluso sin usarla'
      },
      {
        pl: 'Jego romans z Mandy Rose był jedną z najpopularniejszych historii 2020 roku',
        en: 'His romance with Mandy Rose was one of the most popular storylines of 2020',
        de: 'Seine Romanze mit Mandy Rose war eine der beliebtesten Storylines 2020',
        es: 'Su romance con Mandy Rose fue una de las historias más populares de 2020'
      }
    ]
  },
  {
    id: 'aleister-black',
    name: 'Aleister Black',
    alternateNames: ['Tommy End', 'Malakai Black'],
    currentEmployer: 'WWE',
    currentRoster: 'Smackdown',
    yearsActive: {
      from: 2002
    },
    championships: [
      {
        name: 'NXT Championship',
        times: 1,
        yearFirst: 2018,
        yearLast: 2018
      },
      {
        name: 'AEW World Trios Championship',
        times: 1,
        yearFirst: 2022,
        yearLast: 2022
      }
    ],
    finishers: ['Black Mass'],
    signature_moves: ['Fade to Black', 'Double Foot Stomp', 'Running Knee Strike'],
    height: '5\'11"',
    weight: '215 lbs',
    birthDate: '1985-11-19',
    birthplace: {
      pl: 'Amsterdam, Holandia',
      en: 'Amsterdam, Netherlands',
      de: 'Amsterdam, Niederlande',
      es: 'Ámsterdam, Países Bajos'
    },
    characteristic: {
      pl: 'Czarne tatuaże pokrywające ciało, mistyczny i mroczny styl wejścia na ring',
      en: 'Black tattoos covering the body, mystical and dark entrance style',
      de: 'Schwarze Tattoos am ganzen Körper, mystischer und dunkler Ringauftritt',
      es: 'Tatuajes negros por todo el cuerpo, estilo de entrada místico y oscuro'
    },
    funFacts: [
      {
        pl: 'Jest wyznawcą buddyzmu i jego styl walki jest inspirowany sztukami walki',
        en: 'He practices Buddhism and his fighting style is inspired by martial arts',
        de: 'Er praktiziert Buddhismus und sein Kampfstil ist von Kampfkünsten inspiriert',
        es: 'Practica el budismo y su estilo de lucha está inspirado en las artes marciales'
      },
      {
        pl: 'Był liderem frakcji w AEW',
        en: 'He was the leader of the faction in AEW',
        de: 'Er war der Anführer der Fraktion in AEW',
        es: 'Él fue el líder de la facción en AEW'
      },
      {
        pl: 'W WWE zasłynął niesamowitymi wejściami z podnoszącej się platformy',
        en: 'In WWE, he was known for his spectacular rising platform entrance',
        de: 'In der WWE war er bekannt für seinen spektakulären Plattform-Einzug',
        es: 'En WWE fue conocido por su espectacular entrada con plataforma elevadora'
      }
    ]
  },
  {
    id: 'big-show',
    name: 'Big Show',
    alternateNames: ['Paul Wight', 'The Giant'],
    currentEmployer: 'AEW',
    currentRoster: 'Dynamite',
    yearsActive: {
      from: 1995,
      to: 2021
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 2,
        yearFirst: 1999,
        yearLast: 2002
      },
      {
        name: 'WWE World Heavyweight Championship',
        times: 2,
        yearFirst: 2011,
        yearLast: 2012
      },
      {
        name: 'ECW World Championship',
        times: 1,
        yearFirst: 2000,
        yearLast: 2000
      },
      {
        name: 'WCW World Heavyweight Championship',
        times: 2,
        yearFirst: 2002,
        yearLast: 2002
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 1,
        yearFirst: 2006,
        yearLast: 2006
      },
      {
        name: 'WWE United States Championship',
        times: 1,
        yearFirst: 2012,
        yearLast: 2012
      },
      {
        name: 'WWE Hardcore Championship',
        times: 3,
        yearFirst: 2003,
        yearLast: 2004
      },
      {
        name: 'WWE Tag Team Championships',
        times: 8,
        yearFirst: 2002,
        yearLast: 2016
      },
      {
        name: 'Andre the Giant Memorial Battle Royal',
        times: 1,
        yearFirst: 2015,
        yearLast: 2015
      }
    ],
    finishers: ['KO Punch', 'Chokeslam'],
    signature_moves: ['Shoulder Block', 'Final Cut', 'Open Hand Chop'],
    height: '7\'0"',
    weight: '383 lbs',
    birthDate: '1972-02-08',
    birthplace: {
      pl: 'Aiken, Karolina Południowa',
      en: 'Aiken, South Carolina',
      de: 'Aiken, South Carolina',
      es: 'Aiken, Carolina del Sur'
    },
    characteristic: {
      pl: 'Olbrzymi wzrost i masa, łysy z brodą, często występuje jako heel lub face zamiennie',
      en: 'Gigantic height and mass, bald with a beard, often switches between heel and face',
      de: 'Gigantische Größe und Masse, kahl mit Bart, wechselt oft zwischen Heel und Face',
      es: 'Tamaño y peso gigantescos, calvo con barba, cambia frecuentemente entre heel y face'
    },
    funFacts: [
      {
        pl: 'Zadebiutował w jako syn (fabularnie) Andre the Gianta',
        en: 'Debuted in kayfabe as the son of Andre the Giant',
        de: 'Debütierte in kayfabe als Sohn von Andre the Giant',
        es: 'Debutó en kayfabe como hijo de André the Giant'
      },
      {
        pl: 'Jest jedynym wrestlerem, który zdobył mistrzostwa WWE, WCW, ECW i World Heavyweight',
        en: 'He is the only wrestler to win WWE, WCW, ECW and World Heavyweight Championships',
        de: 'Er ist der einzige Wrestler, der WWE-, WCW-, ECW- und World-Heavyweight-Titel gewann',
        es: 'Es el único luchador que ganó campeonatos de WWE, WCW, ECW y World Heavyweight'
      },
      {
        pl: 'Zagrał w kilku filmach i serialach, w tym w "The Waterboy" i show promowanym jego własnym imieniem',
        en: 'Acted in several movies and shows, including "The Waterboy" and a show named after his own name',
        de: 'Spielte in mehreren Filmen und Serien mit, darunter "The Waterboy" und einem Show, das nach seinem eigenen Namen benannt ist',
        es: 'Actuó en varias películas y series, incluyendo "The Waterboy" y un show llamado después de su propio nombre'
      }
    ]
  },
  {
    id: 'joe-hendry',
    name: 'Joe Hendry',
    alternateNames: ['The Prestigious One'],
    currentEmployer: 'TNA Wrestling',
    currentRoster: 'TNA',
    yearsActive: {
      from: 2013
    },
    championships: [
      {
        name: 'TNA World Championship',
        times: 1,
        yearFirst: 2022,
        yearLast: 2023
      },
      {
        name: 'Impact Digital Media Championship',
        times: 1,
        yearFirst: 2017,
        yearLast: 2017
      }
    ],
    finishers: ['Standing Ovation', 'Chokeslam'],
    signature_moves: ['Fallaway Slam', 'Delayed Vertical Suplex', 'Pop-Up Powerbomb'],
    height: '6\'2"',
    weight: '240 lbs',
    birthDate: '1988-05-01',
    birthplace: {
      pl: 'Edynburg, Szkocja',
      en: 'Edinburgh, Scotland',
      de: 'Edinburgh, Schottland',
      es: 'Edimburgo, Escocia'
    },
    characteristic: {
      pl: 'Charyzmatyczny, często śpiewa własne piosenki przed walkami, dobrze zbudowany',
      en: 'Charismatic, often sings his own entrance songs, well-built physique',
      de: 'Charismatisch, singt oft eigene Entrance-Songs, gut gebaut',
      es: 'Carismático, a menudo canta sus propias canciones de entrada, bien formado físicamente'
    },
    funFacts: [
      {
        pl: 'Jest także profesjonalnym muzykiem – komponuje i wykonuje własne utwory wejściowe',
        en: 'He is also a professional musician – he composes and performs his own entrance songs',
        de: 'Er ist auch ein professioneller Musiker – komponiert und singt eigene Entrance-Songs',
        es: 'También es músico profesional: compone e interpreta sus propias canciones de entrada'
      },
      {
        pl: 'Reprezentował Szkocję w zapasach amatorskich na Igrzyskach Wspólnoty Narodów 2018',
        en: 'Represented Scotland in amateur wrestling at the 2018 Commonwealth Games',
        de: 'Vertrat Schottland im Amateur-Wrestling bei den Commonwealth Games 2018',
        es: 'Representó a Escocia en lucha amateur en los Juegos de la Commonwealth de 2018'
      },
      {
        pl: 'Stał się viralem dzięki swojemu wejściu.',
        en: 'Went viral with his entrance.',
        de: 'Wurde viral mit seinem Eintritt',
        es: 'Se volvió viral con su entrada'
      }
    ]
  },
  {
    id: 'santino-marella',
    name: 'Santino Marella',
    alternateNames: ['Anthony Carelli', 'The Milan Miracle'],
    currentEmployer: 'TNA Wrestling',
    currentRoster: 'Authority Figure / Occasional Wrestler',
    yearsActive: {
      from: 2005,
      to: 2014
    },
    championships: [
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 2007,
        yearLast: 2008
      },
      {
        name: 'WWE United States Championship',
        times: 1,
        yearFirst: 2012,
        yearLast: 2012
      },
      {
        name: 'WWE Tag Team Championships',
        times: 1,
        yearFirst: 2011,
        yearLast: 2011
      },
      {
        name: 'Miss WrestleMania',
        times: 1,
        yearFirst: 2009,
        yearLast: 2009
      }
    ],
    finishers: ['Cobra Strike', 'Marella Driver'],
    signature_moves: ['Hip Toss', 'Split Leg Drop', 'Judo Throw'],
    height: '5\'10"',
    weight: '233 lbs',
    birthDate: '1974-03-14',
    birthplace: {
      pl: 'Mississauga, Ontario, Kanada',
      en: 'Mississauga, Ontario, Canada',
      de: 'Mississauga, Ontario, Kanada',
      es: 'Mississauga, Ontario, Canadá'
    },
    characteristic: {
      pl: 'Komiczny styl walki, charakterystyczna "kobra" jako finisher, wąsy i gesty sceniczne',
      en: 'Comedic wrestling style, signature "cobra" finisher, mustache and theatrical gestures',
      de: 'Komödiantischer Stil, typischer "Cobra"-Finisher, Schnurrbart und theatralische Gesten',
      es: 'Estilo cómico de lucha, remate "cobra" característico, bigote y gestos teatrales'
    },
    funFacts: [
      {
        pl: 'Zadebiutował niespodziewanie w WWE jako "fan z publiczności", który pokonał Umagę',
        en: 'Debuted in WWE as a "fan from the audience" who defeated Umaga',
        de: 'Debütierte in der WWE als "Fan aus dem Publikum", der Umaga besiegte',
        es: 'Debutó en WWE como un "fan del público" que venció a Umaga'
      },
      {
        pl: 'Występował też jako jego rzekoma "siostra bliźniaczka"',
        en: 'Also performed as his supposed "twin sister"',
        de: 'Trat auch als seine angebliche "Zwillingsschwester" auf',
        es: 'También actuó como su supuesta "hermana gemela"'
      },
      {
        pl: 'Występował w polskiej federacji PTW.',
        en: 'After retiring, he opened a judo academy and became a TNA commentator',
        de: 'Nach dem Rücktritt eröffnete er eine Judo-Akademie und wurde TNA-Kommentator',
        es: 'Tras retirarse, abrió una academia de judo y se convirtió en comentarista de TNA'
      }
    ]
  },
  {
    id: 'omos',
    name: 'Omos',
    alternateNames: ['Jordan Omogbehin', 'The Nigerian Giant'],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
    yearsActive: {
      from: 2019
    },
    championships: [
      {
        name: 'WWE RAW Tag Team Championship',
        times: 1,
        yearFirst: 2021,
        yearLast: 2021
      }
    ],
    finishers: ['Double Handed Chokeslam'],
    signature_moves: ['Two-Handed Toss', 'Running Corner Splash', 'Big Boot'],
    height: '7\'3"',
    weight: '410 lbs',
    birthDate: '1994-05-16',
    birthplace: {
      pl: 'Lagos, Nigeria',
      en: 'Lagos, Nigeria',
      de: 'Lagos, Nigeria',
      es: 'Lagos, Nigeria'
    },
    characteristic: {
      pl: 'Olbrzymi wzrost, potężna sylwetka, dominujący styl walki',
      en: 'Gigantic height, massive physique, dominant in-ring style',
      de: 'Riesige Körpergröße, massige Statur, dominanter Wrestling-Stil',
      es: 'Altura gigantesca, físico imponente, estilo dominante en el ring'
    },
    funFacts: [
      {
        pl: 'Grał w koszykówkę w NCAA zanim przeszedł do WWE',
        en: 'Played college basketball in the NCAA before joining WWE',
        de: 'Spielte NCAA-College-Basketball, bevor er zur WWE kam',
        es: 'Jugó baloncesto universitario en la NCAA antes de unirse a WWE'
      },
      {
        pl: 'Zadebiutował w WWE jako bodyguard dla Akiry Tozawy i AJ Stylesa',
        en: 'Debuted in WWE as a bodyguard for Akira Tozawa and later AJ Styles',
        de: 'Debütierte in der WWE als Bodyguard für Akira Tozawa und später AJ Styles',
        es: 'Debutó en WWE como guardaespaldas de Akira Tozawa y luego de AJ Styles'
      },
      {
        pl: 'Jest jednym z najwyższych zawodników w historii WWE',
        en: 'He is one of the tallest wrestlers in WWE history',
        de: 'Er ist einer der größten Wrestler in der WWE-Geschichte',
        es: 'Es uno de los luchadores más altos en la historia de WWE'
      }
    ]
  },
  {
    id: 'the-rock',
    name: 'The Rock',
    alternateNames: ['Dwayne Johnson', 'The Great One', 'The People\'s Champion'],
    currentEmployer: 'WWE',
    currentRoster: 'Part-time',
    yearsActive: {
      from: 1996,
      to: 2004
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 8,
        yearFirst: 1998,
        yearLast: 2013
      },
      {
        name: 'WCW Championship',
        times: 1,
        yearFirst: 2019,
        yearLast: 2019
      },
      {
        name: 'WWE Intercontinental Championship',
        times: 2,
        yearFirst: 1997,
        yearLast: 1997
      },
      {
        name: 'WWE Tag Team Championships',
        times: 5,
        yearFirst: 1999,
        yearLast: 2001
      },
      {
        name: 'WWE Royal Rumble',
        times: 1,
        yearFirst: 2000,
        yearLast: 2000
      }
    ],
    finishers: ['Rock Bottom', 'People\'s Elbow'],
    signature_moves: ['Samoan Drop', 'Diving Clothesline', 'Sharpshooter'],
    height: '6\'5"',
    weight: '260 lbs',
    birthDate: '1972-05-02',
    birthplace: {
      pl: 'Hayward, Kalifornia, USA',
      en: 'Hayward, California, USA',
      de: 'Hayward, Kalifornien, USA',
      es: 'Hayward, California, EE. UU.'
    },
    characteristic: {
      pl: 'Niesamowita charyzma, muskulatura, ikoniczne okulary przeciwsłoneczne i hasła',
      en: 'Incredible charisma, muscular build, iconic sunglasses and catchphrases',
      de: 'Unglaubliche Ausstrahlung, muskulöser Körperbau, ikonische Sonnenbrille und Sprüche',
      es: 'Carisma increíble, físico musculoso, gafas de sol icónicas y frases pegajosas'
    },
    funFacts: [
      {
        pl: 'Jest jednym z najbardziej rozpoznawalnych aktorów Hollywood',
        en: 'He is one of the most recognizable actors in Hollywood',
        de: 'Er ist einer der bekanntesten Schauspieler in Hollywood',
        es: 'Es uno de los actores más reconocidos de Hollywood'
      },
      {
        pl: 'Pochodzi z legendarnej rodziny zapaśniczej Anoa\'i',
        en: 'He comes from the legendary Anoa\'i wrestling family',
        de: 'Er stammt aus der legendären Anoa\'i-Wrestlingfamilie',
        es: 'Proviene de la legendaria familia de lucha libre Anoa\'i'
      },
      {
        pl: 'Jego powiedzenia przeszły do popkultury',
        en: 'His catchphrases became pop culture icons',
        de: 'Seine Sprüche wurden zu Popkultur-Ikonen',
        es: 'Sus frases se convirtieron en íconos culturales'
      }
    ]
  },
  {
    id: 'johnny-gargano',
    name: 'Johnny Gargano',
    alternateNames: ['Johnny Wrestling'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2005
    },
    championships: [
      {
        name: 'WWE Tag Team Championships',
        times: 2,
        yearFirst: 2022,
        yearLast: 2022
      },
      {
        name: 'NXT Championship',
        times: 1,
        yearFirst: 2019,
        yearLast: 2019
      },
      {
        name: 'NXT North American Championship',
        times: 3,
        yearFirst: 2019,
        yearLast: 2021
      },
      {
        name: 'NXT Tag Team Championship',
        times: 1,
        yearFirst: 2016,
        yearLast: 2017
      }
    ],
    finishers: ['Gargano Escape', 'One Final Beat'],
    signature_moves: ['Slingshot DDT', 'Superkick', 'Lawn Dart'],
    height: '5\'10"',
    weight: '199 lbs',
    birthDate: '1987-08-14',
    birthplace: {
      pl: 'Cleveland, Ohio',
      en: 'Cleveland, Ohio',
      de: 'Cleveland, Ohio',
      es: 'Cleveland, Ohio'
    },
    characteristic: {
      pl: 'Niski wzrost, ogromna zwinność i serce do walki',
      en: 'Short stature, great agility, and a big fighting heart',
      de: 'Kleine Statur, große Beweglichkeit und viel Kampfgeist',
      es: 'Estatura baja, gran agilidad y mucho corazón luchador'
    },
    funFacts: [
      {
        pl: 'Pierwszy zawodnik w historii NXT, który zdobył Triple Crown',
        en: 'First Triple Crown Champion in NXT history',
        de: 'Erster Triple Crown Champion in der NXT-Geschichte',
        es: 'Primer campeón Triple Corona en la historia de NXT'
      },
      {
        pl: 'Jego żona również jest wrestlerką WWE',
        en: 'His wife is also a WWE wrestler',
        de: 'Seine Ehefrau ist ebenfalls eine WWE-Wrestlerin',
        es: 'Su esposa también es una luchadora de WWE'
      },
      {
        pl: 'Znany ze swoich emocjonalnych pojedynków i długich rywalizacji',
        en: 'Known for his emotional matches and long rivalries',
        de: 'Bekannt für seine emotionalen Matches und langen Rivalitäten',
        es: 'Conocido por sus combates emocionales y largas rivalidades'
      }
    ]
  },
  {
    id: 'austin-theory',
    name: 'Austin Theory',
    alternateNames: ['All Day', 'The Now'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2016
    },
    championships: [
      {
        name: 'WWE United States Championship',
        times: 2,
        yearFirst: 2022,
        yearLast: 2023
      },
      {
        name: 'Money in the Bank',
        times: 1,
        yearFirst: 2022,
        yearLast: 2022
      },
      {
        name: 'WWE Tag Team Championships',
        times: 1,
        yearFirst: 2022,
        yearLast: 2022
      }
    ],
    finishers: ['A-Town Down'],
    signature_moves: ['Rolling Dropkick', 'Fallaway Slam', 'Standing Moonsault'],
    height: '6\'1"',
    weight: '220 lbs',
    birthDate: '1997-08-02',
    birthplace: {
      pl: 'McDonough, Georgia',
      en: 'McDonough, Georgia',
      de: 'McDonough, Georgia',
      es: 'McDonough, Georgia'
    },
    characteristic: {
      pl: 'Młody, umięśniony, pełen pewności siebie i arogancji',
      en: 'Young, muscular, full of confidence and arrogance',
      de: 'Jung, muskulös, voller Selbstvertrauen und Arroganz',
      es: 'Joven, musculoso, lleno de confianza y arrogancia'
    },
    funFacts: [
      {
        pl: 'Był najmłodszym posiadaczem walizki Money in the Bank w historii WWE',
        en: 'He was the youngest Money in the Bank holder in WWE history',
        de: 'Er war der jüngste Money-in-the-Bank-Gewinner in der WWE-Geschichte',
        es: 'Fue el ganador más joven de Money in the Bank en la historia de WWE'
      },
      {
        pl: 'Był "wybrańcem" Vince\'a McMahona w fabule prowadzącej do WrestleManii 38',
        en: 'He was Vince McMahon\'s "chosen one" in the storyline leading to WrestleMania 38',
        de: 'Er war Vince McMahons "Auserwählter" in der Storyline vor WrestleMania 38',
        es: 'Fue el "elegido" de Vince McMahon en la historia que llevó a WrestleMania 38'
      },
      {
        pl: 'Zaczął karierę jako kulturysta i wygrał kilka lokalnych zawodów',
        en: 'He started his career as a bodybuilder and won several local competitions',
        de: 'Er begann seine Karriere als Bodybuilder und gewann mehrere lokale Wettbewerbe',
        es: 'Comenzó su carrera como culturista y ganó varias competiciones locales'
      }
    ]
  },
  {
    id: 'carmelo-hayes',
    name: 'Carmelo Hayes',
    alternateNames: ['Melo'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2014
    },
    championships: [
      {
        name: 'NXT Championship',
        times: 1,
        yearFirst: 2023,
        yearLast: 2023
      },
      {
        name: 'NXT North American Championship',
        times: 2,
        yearFirst: 2021,
        yearLast: 2022
      },
      {
        name: 'NXT Cruiserweight Championship',
        times: 1,
        yearFirst: 2021,
        yearLast: 2021
      },
      {
        name: 'WWE Andre the Giant Memorial Trophy',
        times: 1,
        yearFirst: 2021,
        yearLast: 2021
      }
    ],
    finishers: ['Nothing But Net'],
    signature_moves: ['Springboard Clothesline', 'Fadeaway Leg Drop', 'Codebreaker'],
    height: '5\'10"',
    weight: '210 lbs',
    birthDate: '1994-08-01',
    birthplace: {
      pl: 'Framingham, Massachusetts',
      en: 'Framingham, Massachusetts',
      de: 'Framingham, Massachusetts',
      es: 'Framingham, Massachusetts'
    },
    characteristic: {
      pl: 'Styl uliczny, atletyczna sylwetka, ogromna pewność siebie',
      en: 'Street style, athletic physique, high confidence',
      de: 'Street-Style, athletische Figur, großes Selbstvertrauen',
      es: 'Estilo callejero, físico atlético, gran confianza en sí mismo'
    },
    funFacts: [
      {
        pl: 'Ma powiedzenie "... nie chybia", podkreślając swoją skuteczność w ringu',
        en: 'He says "... don\'t miss," highlighting his in-ring accuracy',
        de: 'Er sagt "... verfehlt nicht", um seine Treffgenauigkeit im Ring zu betonen',
        es: 'El dice "... no falla", destacando su precisión en el ring'
      },
      {
        pl: 'Był uczniem WWE Performance Center i szybko wspiął się w hierarchii NXT',
        en: 'He was a WWE Performance Center trainee and quickly rose through the NXT ranks',
        de: 'Er war ein WWE Performance Center-Trainee und stieg schnell in den NXT-Rängen auf',
        es: 'Fue aprendiz del WWE Performance Center y ascendió rápidamente en NXT'
      },
      {
        pl: 'Zasłynął z walki z Trickiem Williamsem, jego dawnym partnerem',
        en: 'He became known for his feud with Trick Williams, his former partner',
        de: 'Er wurde bekannt durch seine Fehde mit Trick Williams, seinem ehemaligen Partner',
        es: 'Se hizo conocido por su rivalidad con Trick Williams, su antiguo compañero'
      }
    ]
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
]

// Funkcja do losowego wybierania wrestlera
export const getRandomWrestler = (): Wrestler => {
  const randomIndex = Math.floor(Math.random() * wrestlers.length)
  return wrestlers[randomIndex]
}

// Funkcja do sprawdzania odpowiedzi (uwzględnia alternatywne nazwy)
export const checkWrestlerGuess = (wrestler: Wrestler, guess: string): boolean => {
  const normalizedGuess = guess.toLowerCase().trim()
  const possibleNames = [
    wrestler.name.toLowerCase(),
    ...(wrestler.alternateNames?.map(name => name.toLowerCase()) || [])
  ]
  
  return possibleNames.some(name => name === normalizedGuess)
}

// Funkcja do obliczania wieku wrestlera na podstawie daty urodzenia
export const calculateAge = (birthDate: string): number => {
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDiff = today.getMonth() - birthDateObj.getMonth()
  
  // Jeśli jeszcze nie było urodzin w tym roku, odejmujemy 1 rok
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--
  }
  
  return age
} 