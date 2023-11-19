import express from "express"
import {signUpUser,signInUser, signOutUser, getUserData, createRecipe, getUserRecipe, getAllUsersRecipes, updateRecipe, deleteRecipe,getRecipe, postComment, getRecipeComment} from "../Controller/Controller.js"
import Authenticate from "../Middleware/Authenticate.js"

const router = express.Router()
router.post("/signup",signUpUser)
router.post("/signin",signInUser)
router.get("/signout", signOutUser);
router.get("/getUserData",Authenticate, getUserData);
router.post("/createRecipe",Authenticate,createRecipe);
router.put("/updateRecipe/:id",updateRecipe);
router.delete("/deleteRecipe/:id",Authenticate,deleteRecipe);
router.get("/getUserRecipe",Authenticate,getUserRecipe);
router.get("/getAllUsersRecipes",Authenticate,getAllUsersRecipes);
router.get("/getRecipe/:id",Authenticate, getRecipe);
router.post("/postComment/:id",Authenticate,postComment);
router.get("/getComment/:id",Authenticate,getRecipeComment);

export default router