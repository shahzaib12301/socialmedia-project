import { Router } from "express";
import searchercontroller from "../../controller/searcher/searcher.js";
const searcherrouter=Router();

searcherrouter.get('/allfollower',searchercontroller.GetallFolower)
searcherrouter.post('/onefollower/:search',searchercontroller.GetFollower)
searcherrouter.get('/alllikes',searchercontroller.Getallpost)
searcherrouter.get('/likepost',searchercontroller.Getuserlikes)





export default searcherrouter;


