const appAuth = require("../api/auth/auth.routes");
const appShop = require("../api/shops/shop.routes");
const appUser = require("../api/users/user.routes");
const appProduct = require("../api/products/product.routes");
const appWorkshop = require("../api/workshops/workshop.routes");
const appPurchase = require("../api/purchases/purchase.routes")
const appVoucher = require("../api/vouchers/voucher.routes")
const checkAuth = require("../middlewares/checkAuth")

function configureRoutes(app) {
    app.use("/api/auth", appAuth);
    app.use("/api/shop", checkAuth, appShop);
    app.use("/api/user", appUser);
    app.use("/api/product", checkAuth, appProduct);
    app.use("/api/workshop", checkAuth, appWorkshop);
    app.use("/api/purchase", checkAuth, appPurchase);
    app.use("/api/voucher", checkAuth, appVoucher);
}

module.exports = configureRoutes;