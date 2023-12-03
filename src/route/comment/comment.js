import { Router } from "express";
import CommentController from "../../controller/comment/comment.js";
const CommentRouter=Router();
CommentRouter.post('/add',CommentController.CreateComment);
CommentRouter.get('/display',CommentController.DisplayComment);
CommentRouter.delete('/delete/:del',CommentController.RemoveComment);
CommentRouter.put('/update',CommentController.UpdateComment);



export default CommentRouter;