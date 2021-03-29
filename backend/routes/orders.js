const { Router } = require("express");
const router = new Router();
const db = require("../modules/db-operations");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");

router.get("/", (req, res) => {
    res.send(db.getOrders());
});

router.get("/:uuid", (req, res) => {
    res.send(db.findOrderByUuid(req.params.uuid));
});

router.post("/", (req, res) => {
    let body = req.body;

    let order = {
        uuid: uuid(),
        orderNr: generateOrderNr(),
        eta: generateETA(),
        created: body.created,
        cart: body.cart,
        totalValue: body.totalValue,
        userUuid: body.userUuid
    };
    db.addOrder(order);
    res.send(order);
});

router.put("/:uuid", (req, res) => {
    let body = req.body;
    res.send(db.updateOrder(req.params.uuid, body));
});

module.exports = router;