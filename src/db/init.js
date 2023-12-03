
import UserModel from "../model/user/user.js";
import PostModel from "../model/post/post.js";
import LikeModel from "../model/like/like.js";
import CommentModel from "../model/comment/comment.js";
import User_FollowModel from "../model/user_follow/user_follow.js";

const Init=async()=>{

    try{

     
        await UserModel.sync({
            alter:true,
            force:false
        });
       
        await User_FollowModel.sync({
            alter:true,
            force:false
        });
        await PostModel.sync({
            alter:true,
            force:false
        });
         await LikeModel.sync({
            alter:true,
            force:false
        });
       
        await CommentModel.sync({
            alter:true,
            force:false
        });
        


    }catch(error){
        // console.log("There is some Error migrating the tables...")
        console.log(error)
    }

}
export default Init;