//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message:'Get all contacts'});
};

//@desc Create new Contacts
//@route POST /api/contacts
//@access Public
const cresteContact = (req, res) => {
    res.status(201).json({message:'create contact'});
}

//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}  
module.exports = {getContacts};
