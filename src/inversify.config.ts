import {Container} from "inversify";
import {ShootWeapon, Warrior, Weapon} from "./interfaces/interfaces";
import {TYPES} from "./types/types";
import {Katana, Ninja, Shuriken} from "./entities";

const myContainer = new Container()
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
myContainer.bind<ShootWeapon>(TYPES.ShootWeapon).to(Shuriken)

export {myContainer}
