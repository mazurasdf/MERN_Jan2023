const SundaeController = require("../controllers/sundae.controller");

module.exports = (app) => {
    app.get("/api/test", SundaeController.testRoute);
    app.get("/api/sundaes/getAll", SundaeController.getAll);
    app.get("/api/sundaes/random", SundaeController.randomSundae);
    app.post("/api/sundaes/create", SundaeController.create);
    app.get("/api/sundaes/:_id", SundaeController.getOne);
    app.delete("/api/sundaes/:_id/delete", SundaeController.deleteOne);
    app.patch("/api/sundaes/:_id/update", SundaeController.updateOne);
    app.put("/api/sundaes/:_id/addTopping", SundaeController.addTopping);
}