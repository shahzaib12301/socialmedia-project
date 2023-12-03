import { Router } from "express";
import PostController from "../../controller/post/post.js";
const PostRouter=Router();
PostRouter.post('/add',PostController.createPost);
PostRouter.post('/search/:search',PostController.SearchPost);
PostRouter.get('/display',PostController.DisplayPost);
PostRouter.put('/update',PostController.UpdatePost);
PostRouter.delete('/delete/:del',PostController.RemovePost);




export default PostRouter;