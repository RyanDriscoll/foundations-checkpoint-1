function Pokemon(name, health, attackBonus) {
	this.name = name;
	this.health = health;
	this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
	return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function() {
	if (this.health < 1) {
		return true;
	} else {
		return false;
	}
};

function simulateBattle(poke1, poke2, firstPlayer) {
	var attacker, defender;
	if (poke1.name === firstPlayer) {
		attacker = poke1;
		defender = poke2;
	} else {
		attacker = poke2;
		defender = poke1;
	}
	while (attacker.health > 0 || defender.health > 0) {
		defender.health -= attacker.attackBonus;
		if (defender.health < 1) {
			return attacker.name + ' Wins!';
		}
		attacker.health -= defender.attackBonus;
		if (attacker.health < 1) {
			return defender.name + ' Wins!';
		}
	}
}
