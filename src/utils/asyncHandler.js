
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve().catch((err)=>next())
    }
}
export {asyncHandler}

// const asyncHandler=(fn)=>async(req,res,next)=>{
//         try{

//         }catch(error){
//                 res.status(error.code || 500).json({
//                     success:false,
//                     message:error.message
//                 })
//         }
// }