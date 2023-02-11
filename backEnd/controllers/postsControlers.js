const posts=require("../model/postModel")
const users=require("../model/usersModel")
const mongoose=require("mongoose");
const { post } = require("../routes/posts");

const createPost=async(req,res)=>{
     const{title,content}=req.body;
     if(!title && content) res.json("supply a title");
     const user=req.userId;
     try{
            const userChecking=await users.findOne({user});

                const post=await posts.create({
                    title,
                    content,
                    author:user
                 })
                 res.json(post);
    
     }
     catch(error){
        console.log(error);
     }
}
const getPosts=async(req,res)=>{
    try{
    const allPosts=await posts.find({})
    res.json(allPosts);
    }catch(error){
        res.json(error);
    }
}
const getpost=async(req,res)=>{
      const id=req.params.id;
      try{
           res.json("to review")
      }catch(error){
        res.json(error.message)
      }
}
const deletePost=async(req,res)=>{
    const id = req.params.id;
    const verifiedId=req.userId;
try{
const postToDelete=await posts.findById(id)
if(postToDelete){
   if(postToDelete.author.toString()!==verifiedId){
    res.json("not the owner")
   }else{
     posts.findOneAndRemove({_id:id},(error)=>{
        res.json(error.message)
     })
     res.json(`${postToDelete.title} deleted successfully`)
   }
}
else{
    res.json("post not found")
}
// if(!postToDelete){
//     res.json("post  not found")
// }else{
//     console.log(postToDelete)
//     // if( postToDelete[0].author.toString()!==verifiedId.toString()){
//     //     res.json("not authorised to delete this post");
//     // }
//     //  const deleted=await posts.findByIdAndDelete({_id:id});
//     //  res.json(deleted);
// }

}catch(error){
    res.json(error.message);
}
}

module.exports={getPosts,deletePost,createPost,getpost}