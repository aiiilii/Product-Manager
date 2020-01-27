var Product = require('./models');

module.exports = {
    
    index : (req, res) => {
        Product.find ()
        .then ( data => {
            console.log('displaying all data:', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    readOne : (req, res) => {
        Product.findById (req.params.id)
        .then ( data => {
            console.log('displaying one author', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    create : (req, res) => {
        Product.create ({
            title : req.body.title,
            price : req.body.price,
            imageURL : req.body.imageURL,
        })
        .then ( data => {
            console.log('successfully added', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    update : (req, res) => {
        Product.findByIdAndUpdate (req.params.id, req.body, {runValidators: true, new: true})
        .then ( data => {
            console.log('successfully updated', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    delete : (req, res) => {
        Product.findByIdAndDelete (req.params.id)
        .then ( data => {
            console.log('successfully deleted', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

}