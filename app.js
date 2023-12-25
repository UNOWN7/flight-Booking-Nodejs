

const flight = require('./models/flights');
const seats = require('./models/seats');
const stop = require('./models/stops');
const book = require('./models/booking');

const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const Unown = require('./models/user');
const router = express.Router();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/tasks', async(req, res) => {
  try {
    const { username , password, email } = req.body;

    const own = await Unown.create({
      username ,
      password,
      email
    });
  
    return res.json(own);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

app.get('/gets/:id', async(req,res)=>{
  
 try{ 
  const userId = req.params.id;
  const user =await Unown.findByPk(userId);
  if (!user){
    return res.status(404).send('Usr not found')
  }
  return res.json(user);
}catch(error){
  console.error(error);
  return res.status(500).json({ "message":error.message });
}
});

app.get('/geto/:id',async(req,res)=>{
  try{ 
   const userId = req.params.id;
   
   const user =await Unown.findByPk(userId);
  
   if (!user){
     return res.send('Usr not found')
   };
   return res.send(`${user.username}, ${user.email}`);
 }catch(error){
   console.error(error);
     return res.status().json({ "message":error.message });
 }
 });

// Updating user
app.put('/user/update/:id', async(req,res)=>{
  try{ 
   const userId = req.params.id;
   const { username , password , email }= req.body;
   
   const user =await Unown.findByPk(userId);
   
   if (!user){
     return res.status(404).send('User not found')
   };
   await user.update({
        username,
        password,
        email
   });
   return res.json(user);
 }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

// Deleting user
 app.delete('/user/delete/:id', async(req,res)=>{
  try{ 
   const userId = req.params.id;
   
   const user =await Unown.findByPk(userId);
   
   if (!user){
     return res.status(404).send('Usr not found')
   };
   await user.destroy();
   return res.json(user);
 }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

/*Unown.create({
  user_id:6,
  username: 'raj',
  password: 'raj123',
  email: 'str86577@gmail.com',
}).then((user) => {
  console.log('User created:');
});
*/

//  Flight Model

/*flight.create({
  flight_id:4,
  airline :'Air india',
departure_city: 'mumbai', 
destination_city: 'Goa',
departure_time : '2004-11-02 12:12:12' ,
arrival_time : '2004-11-03 10:12:12',
stops:'Null'
0}).then((user) => {
  console.log('User created:',flight.toJSON());
});
*/

// Creating Flight
app.post('/flight', async(req, res) => {
  try {
    const { flight_id,airline,departure_city,destination_city,departure_time,arrival_time,stops} = req.body;

    const own = await flight.create({
      flight_id,
      airline,
      departure_city,
      destination_city,
      departure_time,
      arrival_time,
      stops 
    });
  
    return res.json(own);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

// For accessing flight detail 
app.get('/flight/:id', async(req,res)=>{
  
 try{ 
  const flightID = req.params.id;
  const user =await flight.findByPk(flightID);
  if (!user){
    return res.status(404).send('Usr not found')
  }
  return res.json(user);
}catch(error){
  console.error(error);
  return res.status(500).json({ "message":error.message });
}
});

// For Update  flight detail
app.put('/flight/update/:id', async(req,res)=>{
  try{ 
   const flightID = req.params.id;
   const { flight_id,airline,departure_city,destination_city,departure_time,arrival_time,stops} = req.body;   
   const fligh =await flight.findByPk(flightID);
   
   if (!fligh){
     return res.status(404).send('User not found')
   };
   await fligh.update({
    flight_id,
    airline,
    departure_city,
    destination_city,
    departure_time,
    arrival_time,
    stops
   });
   return res.json(fligh);
 }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

 //For delete Flight detail
app.delete('/flight/delete/:id', async(req,res)=>{
  try{ 
   const flightID = req.params.id;
   
   const user =await flight.findByPk(flightID);
   
   if (!user){
     return res.status(404).send('Usr not found')
   };
   
   await user.destroy();
   
   return res.json(user);
 }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
 }
 });



 // Flight Seats Model
 /*seats.create({
  seat_id:2,
  Flight_id:1,
  seat_No: 'a33',
  available: true,
}).then((user) => {
  console.log('User created:',seats.toJSON());
});
*/

app.post('/seat', async(req, res) => {
  try {
    const { seat_id, Flight_id, seat_No, available } = req.body;

    const own = await seats.create({
      seat_id,
      Flight_id,
      seat_No,
      available
    });
  
    return res.json(own);
  } catch (error) {
    
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

app.get('/seat/:id', async(req,res)=>{
  try{ 
      const seatID = req.params.id;
      const user =await seats.findByPk(seatID);
    if (!user){
      return res.status(404).send('Usr not found')
    }
    return res.json(user);
  }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

app.put('/seat/update/:id', async(req,res)=>{
  try{ 
   const seatID = req.params.id;
   const { seat_id, Flight_id, seat_No, available} = req.body;   
   const user =await seats.findByPk(seatID);
   
   if (!user){
     return res.status(404).send('User not found')
   };
   await user.update({
      seat_id, 
      Flight_id, 
      seat_No, 
      available
   });
   return res.json(user);
 }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

app.delete('/seat/delete/:id', async(req,res)=>{
  try{ 
   const seatID = req.params.id;
   
   const user =await seats.findByPk(seatID);
   
   if (!user){
     return res.status(404).send('Usr not found')
   };
   
   await user.destroy();
   
   return res.json(user);
 }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
 }
 });




// Stop model 

/*stop.create({
  stop_id:5,
  Flight_id:1,
city_name: 'Goa',
arrival_time : '2004-11-02 12:12:12' ,
departure_time : '2004-11-03 10:12:12'
}).then((user) => {
  console.log('User created:');
});
*/

app.post('/stop', async(req, res) => {
  try {
    const { stop_id, Flight_id, city_name , arrival_time , departure_time  } = req.body;

    const own = await stop.create({
      stop_id,
      Flight_id,
      city_name,
      arrival_time  ,
      departure_time
    });
  
    return res.json(own);
  } catch (error) {
    
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

app.get('/stop/:id', async(req,res)=>{
  try{ 
      const stopID = req.params.id;
      const user =await stop.findByPk(stopID);
      if (!user){
        return res.status(404).send('Usr not found')
      }
      return res.json(user);
  }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
}
});

app.put('/stop/update/:id', async(req,res)=>{
  try{ 
   const stopID = req.params.id;
   const { stop_id, Flight_id, city_name , arrival_time , departure_time } = req.body;   
   const user =await stop.findByPk(stopID);
   
   if (!user){
     return res.status(404).send('User not found')
   };
   await user.update({
      stop_id, 
      Flight_id, 
      city_name, 
      arrival_time, 
      departure_time 
    });
   return res.json(user);
  }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

app.delete('/stop/delete/:id', async(req,res)=>{
  try{ 
   const stopID = req.params.id;
   
   const user =await stop.findByPk(stopID);
   
   if (!user){
     return res.status(404).send('Usr not found')
   };
   
   await user.destroy();
   
   return res.json(user);
 }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
 }
 });




// Booking/Ticket model

/*book.create({
  booking_id:1,
  user_id:1,
  flight_id:1,
  train_id:null,
  seat_number:'A22',
  booking_date:'2023-12-08 14:09:20'
}).then((user)=>{
  console.log('User Created');
});*/

app.post('/booked', async(req, res) => {
  try {
    const { booking_id,user_id,flight_id,train_id,seat_number,booking_date} = req.body;

    const own = await book.create({
      booking_id,
      user_id,
      flight_id,
      train_id,
      seat_number,
      booking_date
    });
  
    return res.json(own);
  } catch (error) {
    
    console.error(error);
    return res.status(500).json({ "message":error.message });
  }
});

app.get('/booked/:id', async(req,res)=>{
  
 try{ 
  const bookedID = req.params.id;
  const user =await book.findByPk(bookedID);
  if (!user){
    return res.status(404).send('Usr not found')
  }
  return res.json(user);
}catch(error){
  console.error(error);
  return res.status(500).json({ "message":error.message });
}
});

app.put('/booked/update/:id', async(req,res)=>{
  try{ 
   const bookedID = req.params.id;
   const { booking_id,user_id,flight_id,train_id,seat_number,booking_date} = req.body;   
   const user =await book.findByPk(bookedID);
   
   if (!user){
     return res.status(404).send('User not found')
   };
   await user.update({
    booking_id,
    user_id,
    flight_id,
    train_id,
    seat_number,
    booking_date
   });
   return res.json(user);
 }catch(error){
   console.error(error);
   return res.status(500).json({ "message":error.message });
 }
 });

app.delete('/booked/delete/:id', async(req,res)=>{
  try{ 
   const bookedID = req.params.id;
   
   const user =await book.findByPk(bookedID);
   
   if (!user){
     return res.status(404).send('Usr not found')
   };
   
   await user.destroy();
   
   return res.json(user);
 }catch(error){
    console.error(error);
    return res.status(500).json({ "message":error.message });
 }
 });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});