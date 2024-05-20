"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KoreanPatcher {
    koreanPatch = require("../locale/kr.json");
    postDBLoad(container) {
        const logger = container.resolve("WinstonLogger");
        const databaseServer = container.resolve("DatabaseServer");
        const databases = databaseServer.getTables();
        const originalkr = databases.locales.global["kr"];
        for (let localekey in originalkr) {
            const value = this.koreanPatch[localekey];
            originalkr[localekey] = this.krreplacer(value, logger);
            // logger.error(value);
        }
    }
    krreplacer(stringtokr, logger) {
        return stringtokr;
    }
}
module.exports = { mod: new KoreanPatcher() };
//# sourceMappingURL=mod.js.map