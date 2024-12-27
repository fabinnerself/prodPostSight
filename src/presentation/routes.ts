import { Router } from "express";
import { PostRoutes } from "./post/router";
import { ProductRoutes } from "./product/router";
import { AlienEncounterRoutes } from "./alienEncounter/router";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/post", PostRoutes.routes);
    router.use("/api/product", ProductRoutes.routes);
    router.use("/api/alienEncounter", AlienEncounterRoutes.routes);
    //userRoutes
    //comentsRoutes

    return router;
  }
}
