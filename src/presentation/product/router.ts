import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();
    const productController = new ProductController();

    router.get("/", productController.findAllProd);
    router.post("/", productController.createProd);
    router.get("/:id", productController.findOneProd);
    router.delete("/:id", productController.deleteProd);
    router.patch("/:id", productController.patchProd);

    return router;
  }
}
