import { Request, Response } from "express";

interface Product {
  id: number;
  name: string;
  description: string;  
}

const products: Product[] = [{"id": 1,
  "name": "Product name 1",
  "description": "description for Product 1",
   }];
  
let prodId = products.length + 1;


export class ProductController {
  constructor() {}

  createProd = async (req: Request, res: Response) => {

    const {name, description} = req.body;

    if(!name || name.length === 0) {
      return res.status(422).json({            
          message: "Name of product is required"
      });
    }

    if(!description || description.length === 0) {
      return res.status(422).json({            
          message: "Description of product is required"
      });
    }    

    const newProduct: Product = {
      id: prodId++,
      name ,
      description 
    }

    products.push(newProduct);

    return res.status(201).json({
      message: "Product has been created",
      Product: newProduct
    });
  };

  findAllProd = async (req: Request, res: Response) => {
    return res.status(200).json({
      message: "Success to get all products",
      products:products
    });
  };


  findOneProd = async (req: Request, res: Response) => {

    const { id } = req.params;
    const prodId = +id;

    if(isNaN(prodId)){
        return res.status(400).json({
            message: "Invalid product id"
        })
    }      

    const Product = products.find((t) => t.id === prodId);

    if(!Product){
        return res.status(404).json({
            message: `Product not found with id: ${prodId}`
        });
    }
 
    return res.status(200).json({
      message: `Success get 1 Product with id ${prodId}`,Product:Product
    });
  };

  deleteProd = async (req: Request, res: Response) => {
    const { id } = req.params;
    const prodId = +id;

    if(isNaN(prodId)){
        return res.status(400).json({
            message: "Invalid Product id"
        })
    }      

    const Product = products.find((t) => t.id === prodId);

    if(!Product){
      return res.status(404).json({
          message: `Product not found with id: ${prodId}`
      });
    }    

    products.splice(products.indexOf(Product), 1);

    return res.status(200).json({
      message: "success delete 1 Product with id " + prodId ,
      Product: Product
    });
  };

  patchProd = async (req: Request, res: Response) => {
    const {name, description} = req.body;

    const { id } = req.params;
    const prodId = +id;

    if(isNaN(prodId)){
        return res.status(400).json({
            message: "Invalid Product id"
        })
    }      

    const Product = products.find((t) => t.id === prodId);

    if(!Product){
      return res.status(404).json({
          message: `Product not found with id: ${prodId}`
      });
    }   

    if(!name || name.length === 0) {
      return res.status(422).json({            
          message: "Name of Product is required"
      });
    }

    if(!description || description.length === 0) {
      return res.status(422).json({            
          message: "Description of Product is required"
      });
    }

     

     Product.name = name;
     Product.description = description;      

    return res.status(200).json({
      message: "success updated 1 Product with id " + prodId ,Product:Product
    });
  };  

}
