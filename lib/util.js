import mongoose from "mongoose"
 
// export const connectToDB = async () => {
//     try {
//         const connection = {}
//         if(connection.isConnected) return
//         const db = await mongoose.connect('mongodb+srv://nqhuydev:Huybeo1ga@nqhuydev.e0kr1f9.mongodb.net/');
//         connection.isConnected = db.connection[0].readyState;
//     } catch (error) {
//         console.log(error);
//     }
// }

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect('mongodb+srv://nqhuydev:Huybeo1ga@nqhuydev.e0kr1f9.mongodb.net/');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

