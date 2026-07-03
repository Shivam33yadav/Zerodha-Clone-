require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionModel } = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');


const PORT = process.env.PORT  || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* app.get('/addHoldings', async(req, res) => {
     let tempHoldings=[
    
  {
    name: "INFY",
    qty: 50,
    avg: 1520.5,
    price: 1555.45,
    net: "+2.30%",
    day: "-1.60%",
    isLoss: false,
  },
  {
    name: "TCS",
    qty: 25,
    avg: 3250.75,
    price: 3194.8,
    net: "-1.72%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 15,
    avg: 2055.2,
    price: 2112.4,
    net: "+2.78%",
    day: "+1.44%",
    isLoss: false,
  },
  {
    name: "HDFCBANK",
    qty: 30,
    avg: 1475.0,
    price: 1496.2,
    net: "+1.44%",
    day: "+0.78%",
    isLoss: false,
  },
  {
    name: "ICICIBANK",
    qty: 40,
    avg: 890.25,
    price: 874.15,
    net: "-1.81%",
    day: "-0.42%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 60,
    avg: 560.4,
    price: 577.75,
    net: "+3.10%",
    day: "+0.32%",
    isLoss: false,
  },
  {
    name: "ITC",
    qty: 100,
    avg: 425.5,
    price: 438.8,
    net: "+3.13%",
    day: "+0.54%",
    isLoss: false,
  },
  {
    name: "LT",
    qty: 10,
    avg: 3550,
    price: 3612.7,
    net: "+1.77%",
    day: "+1.26%",
    isLoss: false,
  },
];
   
  tempHoldings.forEach((item)=> {
        let newHolding = new HoldingsModel({
    name: item.name,
    qty: item.qty,
    avg: item.avg,
    price: item.price,
    net: item.day,
    day: item.day,
        });

        newHolding.save();
  });
  res.send("Done!");
});
*/

/*app.get("/addPositions", async (req, res) => {
   let tempPositions = [
    {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58",
        day: "-1.24",
        isLoss: true,
    },
    {
         product: "CNC",
        name: "JUBLEFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04",
        day: "-1.35",
        isLoss: true,
    },
   ];
  
   tempPositions.forEach((item) => {
       let newPositions = new PositionsModel ({
         product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
       });

       newPositions.save();
    });
    res.send("Done!");
      }); */


  app.get('/allHoldings', async(req, res)=> {
     let allHoldings = await HoldingsModel.find({});
     res.json(allHoldings);

  });
  app.get('/allPositions', async(req, res)=> {
     let allPositions = await PositionsModel.find({});
     res.json(allPositions);

  });

  app.post('/newOrder', async(req, res) => {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        newOrder.save();

        res.send("Order saved!");
  });

app.listen(PORT, ()=> {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB started");

});

