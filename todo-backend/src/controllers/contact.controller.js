const ContactService = require("../services/contact.service.js");
const {
  SuccessResponse
} = require("../core/success.response.js");
const { NotFoundError } = require("../core/error.response.js");

class ContactController {

  async searchContacts(req, res, next) {
    try {
      const { keySearch, page, limit } = req.query;

      const result = await ContactService.searchContacts({ keySearch, page: parseInt(page), limit: parseInt(limit) });

      new SuccessResponse({
        message: 'Search contacts successfully',
        metadata: result
      }).send(res);

  } catch (error) {
      res.status(500).json({ message: error.message });
  }
  }
}

module.exports = new ContactController();