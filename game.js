let health = 100
let slapee = "Morty"
let hits = 0

function slap() {
  if (health > 0) {
    health--;
    hits++;
  }
  update(health, hits, slapee)
}

function punch() {
  if (health >= 5) {
    health -= 5;
    hits++;
  }
  update(health, hits, slapee)
}

function kick() {
  if (health >= 10) {
    health -= 10;
    hits++;
  }
  update(health, hits, slapee)
}



function update(health, hits, slapee) {
  document.getElementById("health").innerText = health;
  document.getElementById("hits").innerText = hits;
  document.getElementById("slapee").innerText = slapee;
}


update(health, hits, slapee)

