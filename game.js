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

function giveFire() {
  if (items.name = "Fire") {

    morty.items.push("Fire"['modifier']) // is this line correct?
  }
  update(morty)
}

function giveShock() {
  if (items.name = 'Shock') {
    morty.items.push(items.shock) // or is this correct?
  }
  update(morty)
}

function giveShield() {
  if (items.name = 'Shield') {
    morty.items.push(items.shield)
  }
  update(morty)
}

function addMods() { // is this function correct?
  let mods = morty.items
  let sum = 0
  for (let i = 0; i < morty.items.length; i++) {
    sum += mods[i];
  }
  return sum

}

function slap() {
  if (morty.health > 0) {
    morty.health--;
    morty.hits++;
  }
  update(morty)
}

function punch() {
  if (morty.health >= 5) {
    morty.health -= 5;
    morty.hits++;
  }
  update(morty)
}

function kick() {
  if (morty.health >= 10) {
    morty.health -= 10;
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


