import { Router } from "express";
import ProductRoute from "./product/product.js";
import orderrouter from "./order/order.js";
import product_orderrouter from "./product_order/product_order.js";
import UserRouter from "./user/user.js";
import PostRouter from "./post/post.js";
import LikeRouter from "./likes/likes.js";
import CommentRouter from "./comment/comment.js";
import User_FollowRouter from "./follower/follower.js";
import AuthRouter from "./auth/userauth/userauth.js";
import searcherrouter from "./searcher/searcher.js";


const AllRoutes=Router();
AllRoutes.use('/product',ProductRoute);
AllRoutes.use('/order',orderrouter);
AllRoutes.use('/product_order',product_orderrouter);
AllRoutes.use('/user',UserRouter);
AllRoutes.use('/post',PostRouter);
AllRoutes.use('/like',LikeRouter);
AllRoutes.use('/comment',CommentRouter);
AllRoutes.use('/follower',User_FollowRouter);
AllRoutes.use('/authuser',AuthRouter);
AllRoutes.use('/find',searcherrouter);






export default AllRoutes;