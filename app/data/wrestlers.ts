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