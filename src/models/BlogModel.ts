import mongoose ,{Schema, Document } from 'mongoose'

interface blogInterface extends Document {
    title : string,
    description : string,
    featuredImage : string,
    tags : string[]
}

const blogSchema = new Schema<blogInterface>({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    },
    
    featuredImage : {
        type : String,
        required : true,
        unique : true,
        default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6QcSV7xEX-EgfTryJckjjKr4YYQM_-_4RpjcX6-ATw&s=10'
    },
    tags :[{
        type : String,
        required : true
    }]

},
    {timestamps : true})


 const Blog = mongoose.models.blogs || mongoose.model("Blog", blogSchema)

 export default Blog