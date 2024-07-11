const { Contact } = require('../models/contact.model.js');

class ContactRepository {

  async insertContacts(contacts) {
    try {
      return await Contact.insertMany(contacts);
    } catch (error) {
      console.error('Error inserting contacts:', error);
      throw error;
    }
  }

  async searchContacts({ keySearch, page = 1, limit = 10 }) {
    const regexSearch = new RegExp(keySearch, 'i');
    const skip = (page - 1) * limit;

    const result = await Contact.find(
        {
            $or: [
                { firstName: regexSearch },
                { lastName: regexSearch },
                { title: regexSearch },
            ]
        }
    )
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();

    const total = await Contact.countDocuments({
        $or: [
            { firstName: regexSearch },
            { lastName: regexSearch },
            { title: regexSearch },
        ]
    });

    return {
        data: result,
        total,
        page,
        pages: Math.ceil(total / limit)
    };
  }             
}

module.exports = new ContactRepository();