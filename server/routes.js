const controller = require('./controller');
const path = require('path');

module.exports = (app) => {
    app.get('/api/products', controller.index);
    app.get('/api/products/:id', controller.readOne);
    app.post('/api/products', controller.create);
    app.put('/api/products/:id', controller.update);
    app.delete('/api/products/:id', controller.delete);

    // app.post('/api/authors/:authorid/quotes', controller.addQuote);
    // app.post('/api/authors/:authorid/quotes/:quoteid', controller.updateQuote);
    // app.delete('/api/quotes/:quoteid', controller.deleteQuote)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}