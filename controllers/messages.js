const express = require("express");
const db = require("../db/models")
const router = express.Router();


 router.post("/", async (req, res) => {
     
    var data = req.body;

    await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Dados salvos com sucesso!",
            data
        });
    }).catch(() => {
        return res.json({
            error: false,
            message: "Error: Dados não foram salvos com sucesso!"
         });

        });
 });
 
 module.exports = router;
 