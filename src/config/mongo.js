const mongoose = require("mongoose")

// const dbConnect = () => {
//   const DB_URI = process.env.DB_URI;
//   mongoose.connect(
//     DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, (err, res) => {
//     if(!err){
//       console.log('*****CONNECTION SUCCESSFULLY*****');
//     }else{
//       console.log('*****CONNECT TO ERROR*****');
//     }
//   })
// }
const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('*****CONNECTION SUCCESSFULLY*****');
  } catch (error) {
    console.log('*****CONNECT TO ERROR*****', error);
  }
}


module.exports = dbConnect