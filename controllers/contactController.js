//@desc Get all Contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({message:'No contacts yet'});
}