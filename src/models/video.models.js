import mongoose,{Schema} from "mongoose";
import AggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema({
    video:{
        type:String,
        required:true
    },
    thumbail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    descriptuion:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true


    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(AggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)