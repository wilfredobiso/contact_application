module.exports = function(app) {

	var contactcontroller = require('../controllers/contact');
	
	//Routes for Contacts
	app.get('/', contactcontroller.listContact); 
	app.get('/new', contactcontroller.viewAddContact); 
	app.post('/add', contactcontroller.addContact);
	app.get('/edit/:id', contactcontroller.viewEditContact);
	app.get('/delete/:id', contactcontroller.deleteContact);
	app.post('/edit_save', contactcontroller.editContact);
	
	//Rest Api's
	app.get('/api/listContact', contactcontroller.apiListContact);

	//Routes for not initialize
	app.get('*',contactcontroller.viewPageNotFound);
}
		