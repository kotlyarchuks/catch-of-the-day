export const makeFunName = () => {
  const adjectives = [
    "Adamant",
    "Adroit",
    "Amatory",
    "Animistic",
    "Antic",
    "Arcadian",
    "Baleful",
    "Bellicose",
    "Billous",
    "Boorish",
    "Caustic",
    "Cerulean",
    "Comely",
    "Concomitant",
    "Corpulent",
    "Didactic",
    "Dowdy",
    "Endemic",
    "Feckless",
    "Fecund",
    "Friable",
    "Fulsome"
  ];

  const nouns = [
    "Bumfuzzle",
    "Cattywampus",
    "Gardyloo",
    "Taradiddle",
    "Snickersnee",
    "Widdershins",
    "Collywobbles",
    "Gubbins",
    "Bumbershoot",
    "Lollygag",
    "Flibbertigibbet",
    "Malarkey",
    "Wabbit",
    "Snollygoster",
    "Erinacetor",
    "Bibble",
    "Impignorator",
    "Ratoon",
    "Xertz",
    "Borborygm"
  ];

  const randArrElem = arr => arr[Math.floor( Math.random()*arr.length )]
  return randArrElem(adjectives) + '-' + randArrElem(nouns)
    
}
  


