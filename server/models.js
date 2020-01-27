const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

var ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, '* Product name is required'],
		minlength: [4, '* Product name must be at least 4 characters']
	},
	price: {
		type: String,
		required: [true, '* Product price is required'],
		minlength: [3, '* Price should be at least 3 digits'],
		min: 1
	},
	imageURL: {
		type: String
	}
}, {timestamps: true})

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;