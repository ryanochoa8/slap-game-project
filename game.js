// do I need a global damage variable?

let morty = {
  name: "Morty",
  health: 100,
  hits: 0,
  items: [],
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  }
}

let items = {
  fire: { name: 'Fire', modifier: 2, description: 'Burn Morty!' },
  shock: { name: 'Shock', modifier: 5, description: 'Shock Morty!' },
  shield: { name: 'Shield', modifier: .5, description: 'Spare Morty' }

}

// let multiplier =

function giveFire() {
  // if (items.name == "Fire") {
  morty.items.push(items['fire'].modifier) // is this line correct?
  // }
  update(morty)
}

// console.log(morty.items)



function giveShock() {
  // if (items.name == 'Shock') {
  morty.items.push(items.shock['modifier']) // or is this correct?
  // }
  update(morty)
}

function giveShield() {
  // if (items.name == 'Shield') {
  morty.items.push(items.shield['modifier'])
  // }
  update(morty)
}

function addMods() { // is this function correct?
  let sum = 0
  for (let i = 0; i < morty.items.length; i++) {
    let mods = morty.items[i] // alias
    sum += mods;
  }
  return sum
}

function slap() {
  if (morty.health > 0) {
    morty.health -= morty.attacks['slap'] + addMods();
    morty.hits++;
  }
  update(morty)
}

function punch() {
  if (morty.health >= 5) {
    morty.health -= morty.attacks['punch'] + addMods();
    morty.hits++;
  }
  update(morty)
}

function kick() {
  if (morty.health >= 10) {
    morty.health -= morty.attacks['kick'] + addMods();
    morty.hits++;
  }
  update(morty)
}



function update(morty) {
  document.getElementById("morty.health").innerText = morty.health;
  document.getElementById("morty.hits").innerText = morty.hits;
  document.getElementById("morty.name").innerText = morty.name;
}
//do i need to add anything here for the modifier functions

update(morty)


