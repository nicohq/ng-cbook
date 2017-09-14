const Contact = require('../models/contact.model');

function load(req, res, next, id) {
    Contact.get(id)
        .then(contact => {
            req.contact = contact;
            return next();
        })
        .catch(e => next(e));
}

function get(req, res) {
    return res.json(req.user);
}

function create(req, res, next) {
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contact.save()
        .then(contact => res.json(contact))
        .catch(e => next(e));
}

function list(req, res, next) {
    const { limit, skip = 0, name } = req.query;
    Contact.list({ limit, skip, name })
        .then(contacts => res.json(contacts))
        .catch(e => next(e));
}

function update(req, res, next) {
    const contact = req.contact;
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    contact.email = req.body.email;

    contact.save()
        .then(contatc => res.json(contact))
        .catch(e => next(e));
}

function remove(req, res, next) {
    const contact = req.contact;
    contact.remove()
        .then(contact => res.json(contact))
        .catch(e => next(e));
}

module.exports = { get, create, list, load, update, remove };
