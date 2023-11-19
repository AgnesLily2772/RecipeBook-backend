import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password : {
            type:String,
            required:true
        },
        dietPreference:{
                type:String,
        },
        location:{
                type:String,
        },
        signedUpAt:{
            type:Date,
            default:Date.now,
            immutable:true
        },
        sessionToken:{
                type:String,
        },
        activationToken:{
                type:String,
                required:true
        },
        isActivated:{
                type:Boolean,
                default:false
        },
        agreedToTerms: {
                type: Boolean,
                default: false
        },
    });

    userSchema.methods.generateSessionToken = async function() {
        try {
            let token = jwt.sign({ _id: this._id }, process.env.SESSION_KEY,{ expiresIn: "2h" });
            this.sessionToken = token
            return token;
        } catch (err) {
            console.log(err);
        }
    };

    const recipeSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
              },
              ingredients: [{
                type:String,
                required:true
              }],
              instructions: {
                type: String,
                required: true,
              },
              imageUrl: {
                  type: String,
              },
              cuisine: {
                type: String,
              },
              category: {
                type: String,
              },
              preparationTime: {
                type: Number, 
                required: true,
              },
              createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'USER',
              },
              createdAt: {
                type: Date,
                default: Date.now,
                immutable:true
              },
              updatedAt: {
                type: Date,
                default:Date.now
              },
    })
    const commentSchema = new mongoose.Schema({
        text: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER',
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RECIPE',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
    });

export const UserModel = mongoose.model("USER", userSchema);
export const RecipeModel = mongoose.model("RECIPE", recipeSchema);
export const CommentModel = mongoose.model("COMMENT", commentSchema);