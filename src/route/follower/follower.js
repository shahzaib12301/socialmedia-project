import { Router } from "express";
import FollowerController from "../../controller/followers/followers.js";
const User_FollowRouter=Router();
User_FollowRouter.post('/add',FollowerController.CreateFollower);
User_FollowRouter.post('/search/:search',FollowerController.SearchFollower);
User_FollowRouter.put('/update',FollowerController.UpdateFollower);
User_FollowRouter.delete('/delete/:del',FollowerController.RemoveFollower);
User_FollowRouter.get('/display',FollowerController.DisplayFollower);



export default User_FollowRouter;
