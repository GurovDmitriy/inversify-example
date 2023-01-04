import {myContainer} from "./inversify.config";
import {Warrior} from "./interfaces/interfaces";
import {TYPES} from "./types/types";

const ninja = myContainer.get<Warrior>(TYPES.Warrior)

ninja.fight()
ninja.sneak()
