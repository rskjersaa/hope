const HopeController = require ('../controllers/hope.controller')

module.exports = (app) => {
    app.get("/api/hope", HopeController.findAll)
    app.get("/api/hope/:id", HopeController.findOne)
    app.post("/api/hope", HopeController.create)
    app.put("/api/hope/:id", HopeController.update)
    app.delete("/api/hope/:id", HopeController.deleteHope)

}