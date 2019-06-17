let health = 100
let slapee = "Morty"
let hits = 0

function slap() {
  if (health > 0) {
    health--;
    hits++;
  }
  update(health, hits)
}

function punch() {
  if (health >= 5) {
    health -= 5;
    hits++;
  }
  update(health, hits)
}

function kick() {
  if (health >= 10) {
    health -= 10;
    hits++;
  }
  update(health, hits)
}



function update(health, hits) {
  document.getElementById("health").innerText = health;
  document.getElementById("hits").innerText = hits;
}


update(health, hits)

