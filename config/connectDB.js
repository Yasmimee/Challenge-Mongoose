const mongoose=require('mongoose')

const connectDB=   async ()=>{

    try {
         await  mongoose.connect('mongodb://127.0.0.1:27017/')
    console.log('DB is connected')

    } catch (error) {
        console.log({msg:'DB is not connected', error})
    }

   
}
module.exports= connectDB