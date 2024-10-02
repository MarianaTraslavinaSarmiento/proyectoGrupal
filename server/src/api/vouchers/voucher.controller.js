const VoucherService = require("./voucher.service")

class VoucherController {
    #service;
    constructor() {
        this.#service = new VoucherService()
    }

    async validateVoucher(req, res) {
        const { code } = req.body
        const userId = req.user._id
        const result = await this.#service.validateVoucher(code, userId)
        res.status(200).json(result)
    }

    async getAllVouchersByUserId(req, res) {
        const result = await this.#service.getAllVouchersByUserId(req.user._id)
        res.status(200).json(result)
    }
}

module.exports = VoucherController