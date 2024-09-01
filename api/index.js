import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Path to .env file relative to index.js
dotenv.config();
// dotenv.config({path:.env});
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

// mongoose
// .connect(process.env.MONGO)
// .then(() => {
//     console.log('connected to MongoDB!');
// })
// .catch((err) => {
//     console.log(err);

// });
(async () => {
    try {
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to DB");
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  })();

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log('server is running on port 3000 !!!');

    
}
);

app.use ("/api/user", userRouter);
app.use ("/api/auth", authRouter);
app.use ("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) =>{

  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.use((err, req, res, next) =>{
const statusCode = err.statusCode||500;
const message = err.message || 'Internal server error';
return res.status(statusCode).json({
success:false,
statusCode,
message,
});



});