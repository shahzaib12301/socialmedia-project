import { Router } from "express";
import FollowingController from "../../controller/following/following.js";
const FollowingRouter=Router();
FollowingRouter.get('/add',FollowingController.CreateFollowing);



export default FollowingRouter;