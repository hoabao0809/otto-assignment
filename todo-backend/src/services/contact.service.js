const ContactRepository = require("../repositories/contact.repo.js");

class ContactService {
  async searchContacts({ keySearch, page, limit }) {
      return ContactRepository.searchContacts({ keySearch, page, limit });
  }
}
module.exports = new ContactService();