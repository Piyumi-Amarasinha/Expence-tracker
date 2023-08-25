const router  = require("express").Router();

let foodPrice = require("../models/foodPrice");

router.route("/").post((req, res) => {

const discription = req.body.discription;
const price = req.body.price;
const type = req.body.type;

const newPrice = new foodPrice({
    discription,
    price,
    type

})

newPrice.save().then(() => {
    res.json("price Added")
}).catch((err) => {
    console.log(err);
})

})

router. route("/").get((req, res) => {
    foodPrice.find().then((price) => {
        res.json(price)
    }).catch((err) => {
        console.log(err);
    })
    
    
}) 

router.route("/update/:code").put(async(req,res) => {
    let foodCode = req.params.code;
    const {discription, price, type} = req.body;

    const updatePrice = {
        discription,
        price,
        type
    }

    const update = await foodPrice.findByIdAndUpdate(foodCode, updatePrice)
    .then(() => {
        res.status(200).send({status: "Price updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })


})

router.route("/delete/:code").delete(async(req,res) => {
    let foodCode = req.params.code;

    await foodPrice.findByIdAndDelete(foodCode)
    .then(() => {
        res.status(200).send({status: "Price deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error: err.massage});
    })

})

router. route("/get/:code").get(async(req, res) => {
    let foodCode = req.params.code;
    
    const price = await foodPrice.findByIdAndUpdate(foodCode)
    .then(() => {
        res.status(200).send({status: "Price deleted", price:update})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error: err.massage});
    })

    
}) 

   

module.exports = router;



