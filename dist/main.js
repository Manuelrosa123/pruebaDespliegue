"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nunjucks = require("nunjucks");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    nunjucks.configure('views', {
        autoescape: true,
        express: app
    });
    app.useStaticAssets(__dirname + '/../public', { prefix: 'public' });
    app.useStaticAssets(__dirname + '/../node_modules/bootstrap/dist');
    app.setViewEngine('njk');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map