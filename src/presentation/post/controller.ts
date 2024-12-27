import { Request, Response } from "express";

interface Post {
  id: number;
  name: string;
  titulo: string;
  contenido: string;
  fecha: string;
  categoria: string;   
}

const posts: Post[] = [{"id": 1,
  "name": "post 1",
  "titulo": "title post1",
  "contenido": "contenido post 1",
  "fecha": "fecha post 1",
  "categoria": "categoria post 1"}];
  
let postId = posts.length + 1;


export class PostController {
  constructor() {}

  createPost = async (req: Request, res: Response) => {

    const {name, titulo, contenido, fecha, categoria} = req.body;

    if(!name || name.length === 0) {
      return res.status(422).json({            
          message: "Name of post is required"
      });
    }

    if(!titulo || titulo.length === 0) {
      return res.status(422).json({            
          message: "Title of post is required"
      });
    }

    if(!contenido || contenido.length === 0) {
      return res.status(422).json({            
          message: "Content of post is required"
      });
    }
    
    if(!fecha || fecha.length === 0) {
      return res.status(422).json({            
          message: "Date of post is required"
      });
    }

    const newPost: Post = {
      id: postId++,
      name ,
      titulo,
      contenido ,
      fecha,
      categoria: categoria|| null
    }

    posts.push(newPost);

    return res.status(201).json({
      message: "Post has been created",
      post: newPost
    });
  };

  findAllPost = async (req: Request, res: Response) => {
    return res.status(200).json({
      message: "success get all posts",
      posts:posts
    });
  };


  findOnePost = async (req: Request, res: Response) => {

    const { id } = req.params;
    const postId = +id;

    if(isNaN(postId)){
        return res.status(400).json({
            message: "Invalid post id"
        })
    }      

    const post = posts.find((t) => t.id === postId);

    if(!post){
        return res.status(404).json({
            message: `Post not found with id: ${postId}`
        });
    }
 
    return res.status(200).json({
      message: `Success get 1 post with id ${postId}`,post:post
    });
  };

  deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const postId = +id;

    if(isNaN(postId)){
        return res.status(400).json({
            message: "Invalid post id"
        })
    }      

    const post = posts.find((t) => t.id === postId);

    if(!post){
      return res.status(404).json({
          message: `Post not found with id: ${postId}`
      });
    }    

    posts.splice(posts.indexOf(post), 1);

    return res.status(200).json({
      message: "success delete 1 post with id " + postId ,
      post: post
    });
  };

  patchPost = async (req: Request, res: Response) => {
    const {name, titulo, contenido, fecha, categoria} = req.body;

    const { id } = req.params;
    const postId = +id;

    if(isNaN(postId)){
        return res.status(400).json({
            message: "Invalid post id"
        })
    }      

    const post = posts.find((t) => t.id === postId);

    if(!post){
      return res.status(404).json({
          message: `Post not found with id: ${postId}`
      });
    }   

    if(!name || name.length === 0) {
      return res.status(422).json({            
          message: "Name of post is required"
      });
    }

    if(!titulo || titulo.length === 0) {
      return res.status(422).json({            
          message: "Title of post is required"
      });
    }

    if(!contenido || contenido.length === 0) {
      return res.status(422).json({            
          message: "Content of post is required"
      });
    }
    
    if(!fecha || fecha.length === 0) {
      return res.status(422).json({            
          message: "Date of post is required"
      });
    }

     post.name = name;
     post.titulo = titulo;
     post.contenido = contenido;
     post.fecha = fecha;
     post.categoria = categoria|| null;

    return res.status(200).json({
      message: "success updated  1 post with id " + postId ,post:post
    });
  };  

}
