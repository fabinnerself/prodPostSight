import { Router } from "express";
import { AlienEncounterController } from "./controller";

export class AlienEncounterRoutes {
  static get routes(): Router {
    const router = Router();
    const alienEncounterController = new AlienEncounterController();

    router.get("/random/", alienEncounterController.randomEncounter); 
    router.get("/", alienEncounterController.findAllEncounter);
    router.post("/", alienEncounterController.createEncounter);
    router.get("/:id", alienEncounterController.findOneEncounter);
    router.delete("/:id", alienEncounterController.deleteEncounter);
    router.patch("/:id", alienEncounterController.patchEncounter);
    

    return router;
  }
}
