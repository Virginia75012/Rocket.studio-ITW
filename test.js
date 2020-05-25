// EXERCICE A : Décolage d'une fusée

// Modules pris dans "A_liste-module.txt" et mis dans un array
const modulesRocket = [88623, 101095, 149899, 89383, 54755, 73496, 115697, 99839, 65903, 140201, 95734, 144728, 113534, 82199, 98256, 107126, 54686, 61243, 54763, 119048, 58863, 134097, 84959, 130490, 145813, 115794, 130398, 69864, 133973, 58382, 75635, 77153, 132645, 91661, 126536, 118977, 137568, 100341, 142080, 63342, 84557, 51961, 61956, 87922, 92488, 107572, 51373, 70148, 80672, 134880, 105721, 100138, 80394, 145117, 50567, 122606, 112408, 110737, 111521, 144309, 65761, 113147, 58920, 96623, 65479, 66576, 94244, 64493, 142334, 65969, 99461, 143656, 134661, 90115, 122994, 66994, 135658, 134336, 102958, 111410, 107930, 54711, 101397, 111350, 86453, 134383, 134276, 130342, 80522, 64875, 68182, 83400, 121302, 105996, 123580, 130373, 123987, 107932, 78930, 132068];

// Diviser une masse ℵ d'un module par 3, l'arrondir à l'unité inférieure et soustraire 2. Obtenir la quantité de carburant par module
const quantityFuel = (x) => Math.floor((x / 3) - 2);

// Test en console `node test.js` 
console.log(quantityFuel(12)); //result 2
console.log(quantityFuel(14)); //result 2
console.log(quantityFuel(1969)); //result 654
console.log(quantityFuel(100756)); //result 33583
console.log("-------------------------------------------------");

// Calculer individuellement le carburant nécessaire pour la masse de chaque module
const counterFuel = (modules, calculateFuel) => {
	// Initialiser un total de carburant nécessaire à 0
  let total = 0;

	// Parcourir le tableau modules et trouver pour chaque module le carburant nécessaire
  modules.map((module) => {
    const needFuel = calculateFuel(module);
    total += needFuel;
  });
  return total;
};

const totalFuel = counterFuel(modulesRocket, quantityFuel);

// Test en console `node test.js` 
console.log(`La somme des besoins en carburant pour tous les modules de notre fusée est de "${totalFuel}"`); //La somme des besoins en carburant pour tous les modules de notre fusée est de "3334297"
console.log("-------------------------------------------------");

// Pour chaque masse de module, calculer le carburant et l'ajouter au total
const totalFuelPerModule = (mass) => {
	// Initialiser un total carburant par module nécessaire à 0
  let fuelNeedPerModule = 0;
  let needFuel = quantityFuel(mass);

	// Répeter le processus, en continuant jusqu'à ce que le besoin en carburant soit nul ou négatif
  while (needFuel === null || needFuel >= 0) {
    fuelNeedPerModule += needFuel;
    needFuel = quantityFuel(needFuel);
  }
  return fuelNeedPerModule;
};

const realTotalCarb = counterFuel(modulesRocket, totalFuelPerModule);

// Test en console `node test.js` 
console.log(`La somme des besoins en carburant de tous les modules de notre fusée, en tenant compte également de la masse du carburant ajouté, est de "${realTotalCarb}"`);
//La somme des besoins en carburant de tous les modules de notre fusée, en tenant compte également de la masse du carburant ajouté, est de "4998565"
console.log("-------------------------------------------------");