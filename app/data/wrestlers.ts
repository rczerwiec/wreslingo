import { Wrestler, LocalizedContent } from '../types/wrestler'
import { LanguageCode } from '../types/language'

export const wrestlers: Wrestler[] = [
  {
    id: 'roman-reigns',
    name: 'Roman Reigns',
    alternateNames: ['Leakee', 'Roman Leakee'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
    yearsActive: {
      from: 2010
    },
    championships: [
      {
        name: 'WWE Universal Championship',
        times: 1,
        yearFirst: 2020
      },
      {
        name: 'WWE Championship',
        times: 4,
        yearFirst: 2015,
        yearLast: 2023
      }
    ],
    finishers: ['Spear', 'Superman Punch'],
    signature_moves: ['Drive By', 'Moment of Silence'],
    height: '6\'3"',
    weight: '265 lbs',
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
    ]
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
        name: 'IWGP Heavyweight Championship',
        times: 1,
        yearFirst: 2018,
        yearLast: 2019
      }
    ],
    finishers: ['One-Winged Angel', 'V-Trigger'],
    signature_moves: ['You Can\'t Escape', 'Dr. Wily\'s Bomb'],
    height: '6\'0"',
    weight: '227 lbs',
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
    ]
  },
  {
    id: 'the-miz',
    name: 'The Miz',
    alternateNames: ['Mike Mizanin', 'Michael Mizanin'],
    currentEmployer: 'WWE',
    currentRoster: 'RAW',
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
        name: 'Intercontinental Championship',
        times: 8,
        yearFirst: 2012,
        yearLast: 2018
      }
    ],
    finishers: ['Skull Crushing Finale', 'Figure-Four Leglock'],
    signature_moves: ['Reality Check', 'Yes Kicks'],
    height: '6\'2"',
    weight: '221 lbs',
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
        pl: 'Rozpoczął karierę występując w reality show MTV "The Real World" w 2001 roku',
        en: 'He started his career by appearing on MTV\'s reality show "The Real World" in 2001',
        de: 'Er begann seine Karriere mit einem Auftritt in MTVs Reality-Show "The Real World" im Jahr 2001',
        es: 'Comenzó su carrera apareciendo en el reality show de MTV "The Real World" en 2001'
      },
      {
        pl: 'Zagrał główną rolę w serii filmów akcji "The Marine" (części 3, 4, 5 i 6)',
        en: 'He starred in "The Marine" action film series (parts 3, 4, 5, and 6)',
        de: 'Er spielte die Hauptrolle in der Actionfilm-Reihe "The Marine" (Teile 3, 4, 5 und 6)',
        es: 'Protagonizó la serie de películas de acción "The Marine" (partes 3, 4, 5 y 6)'
      },
      {
        pl: 'Ma własne reality show z żoną Maryse o nazwie "Miz & Mrs"',
        en: 'He has his own reality show with his wife Maryse called "Miz & Mrs"',
        de: 'Er hat seine eigene Reality-Show mit seiner Frau Maryse namens "Miz & Mrs"',
        es: 'Tiene su propio reality show con su esposa Maryse llamado "Miz & Mrs"'
      }
    ]
  },
  {
    id: 'john-cena',
    name: 'John Cena',
    alternateNames: ['The Prototype', 'Doctor of Thuganomics'],
    currentEmployer: 'WWE',
    currentRoster: 'Part-time',
    yearsActive: {
      from: 1999
    },
    championships: [
      {
        name: 'WWE Championship',
        times: 13,
        yearFirst: 2005,
        yearLast: 2017
      },
      {
        name: 'World Heavyweight Championship',
        times: 3,
        yearFirst: 2009,
        yearLast: 2013
      },
      {
        name: 'United States Championship',
        times: 5,
        yearFirst: 2004,
        yearLast: 2015
      }
    ],
    finishers: ['Attitude Adjustment', 'STF'],
    signature_moves: ['Five Knuckle Shuffle', 'Shoulder Tackles'],
    height: '6\'1"',
    weight: '251 lbs',
    birthplace: {
      pl: 'West Newbury, Massachusetts',
      en: 'West Newbury, Massachusetts',
      de: 'West Newbury, Massachusetts',
      es: 'West Newbury, Massachusetts'
    },
    characteristic: {
      pl: 'Krótkie włosy, kolorowe koszulki i czapki, gest "You Can\'t See Me"',
      en: 'Short hair, colorful shirts and caps, "You Can\'t See Me" gesture',
      de: 'Kurze Haare, bunte T-Shirts und Kappen, "You Can\'t See Me"-Geste',
      es: 'Pelo corto, camisetas y gorras coloridas, gesto "You Can\'t See Me"'
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
        pl: 'Nagrał album hip-hopowy "You Can\'t See Me", który dotarł do 15. miejsca na liście Billboard 200',
        en: 'He recorded a hip-hop album "You Can\'t See Me" that reached #15 on the Billboard 200 chart',
        de: 'Er nahm ein Hip-Hop-Album "You Can\'t See Me" auf, das Platz 15 der Billboard 200-Charts erreichte',
        es: 'Grabó un álbum de hip-hop "You Can\'t See Me" que alcanzó el puesto 15 en la lista Billboard 200'
      }
    ]
  },
  {
    id: 'kofi-kingston',
    name: 'Kofi Kingston',
    alternateNames: ['Kofi Nahaje Sarkodie-Mensah'],
    currentEmployer: 'WWE',
    currentRoster: 'SmackDown',
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
        name: 'Intercontinental Championship',
        times: 4,
        yearFirst: 2008,
        yearLast: 2012
      },
      {
        name: 'Tag Team Championships',
        times: 14,
        yearFirst: 2008,
        yearLast: 2023
      }
    ],
    finishers: ['Trouble in Paradise', 'S.O.S.'],
    signature_moves: ['Boom Drop', 'Double Foot Stomp'],
    height: '6\'0"',
    weight: '212 lbs',
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
    alternateNames: ['Allen Neal Jones', 'The Phenomenal One'],
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
        times: 3,
        yearFirst: 2009,
        yearLast: 2013
      },
      {
        name: 'IWGP Heavyweight Championship',
        times: 2,
        yearFirst: 2014,
        yearLast: 2015
      }
    ],
    finishers: ['Styles Clash', 'Phenomenal Forearm', 'Calf Crusher'],
    signature_moves: ['Pele Kick', 'Ushigoroshi', 'Rack Bomb'],
    height: '5\'11"',
    weight: '218 lbs',
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