import { Router } from "express";
import LikeController from "../../controller/likes/likes.js";
const LikeRouter=Router();
LikeRouter.post('/add',LikeController.CreateLike);
LikeRouter.get('/display',LikeController.DisplayLike);
LikeRouter.delete('/delete/:del',LikeController.RemoveLike);
LikeRouter.put('/update',LikeController.UpdateLike);



export default LikeRouter;