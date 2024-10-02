const VoucherModel = require("./voucher.model")
const HttpError = require("../../utils/HttpError")

class VoucherService {
    async validateVoucher(code, userId) {
        const voucher = await VoucherModel.findOne({ code })
        
        if (!voucher) {
            throw new HttpError(400, "Invalid code")
        }

        if (voucher.expiry_date < Date.now()) {
            throw new HttpError(400, "Voucher expired")
        }

        if (voucher.user_id) {
            throw new HttpError(400, "Voucher already used")
        }

        voucher.user_id = userId
        await voucher.save()

        return voucher
    }

    async getAllVouchersByUserId(userId) {
        return await VoucherModel.find({ user_id: userId })
    }
}   

module.exports = VoucherService