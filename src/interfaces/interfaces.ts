export interface Warrior {
  fight(): string
  sneak(): string
}

export interface Weapon {
  hit(): string
}

export interface ShootWeapon {
  shoot(): string
}
