import {inject, injectable} from "inversify";
import {ShootWeapon, Warrior, Weapon} from "./interfaces/interfaces";
import {TYPES} from "./types/types";

@injectable()
class Katana implements Weapon {
  public hit(): string {
    return "cut!"
  }
}

@injectable()
class Shuriken implements ShootWeapon {
  public shoot(): string {
    return "hit!"
  }
}

@injectable()
class Ninja implements Warrior {
  private _katana: Weapon
  private _shuriken: ShootWeapon

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ShootWeapon) shuriken: ShootWeapon
  ) {
    this._katana = katana
    this._shuriken = shuriken
  }

  public fight(): string {
    return this._katana.hit()
  }

  public sneak(): string {
    return this._shuriken.shoot()
  }
}

export {Ninja, Katana, Shuriken}
