const appAuth = require("../api/auth/auth.routes");
const appShop = require("../api/shops/shop.routes");
const appUser = require("../api/users/user.routes");
const appProduct = require("../api/products/product.routes");
const appWorkshop = require("../api/workshops/workshop.routes");

function configureRoutes(app) {
    app.use("/api/auth", appAuth);
    app.use("/api/shop", appShop);
    app.use("/api/user", appUser);
    app.use("/api/product", appProduct);
    app.use("/api/workshop", appWorkshop);
}

module.exports = configureRoutes;