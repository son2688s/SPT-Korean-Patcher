import type { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";

class KoreanPatcher implements IPostDBLoadMod
{
    private koreanPatch = require("../locale/kr.json");

    postDBLoad(container: DependencyContainer): void 
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const databases = databaseServer.getTables();
        const originalkr = databases.locales.global["kr"];

        for (let localekey in originalkr)
        {
            const value = this.koreanPatch[localekey];
            originalkr[localekey] = this.krreplacer(value, logger);
            // logger.error(value);
        }
    }
    private krreplacer  (stringtokr: string, logger: ILogger):string
    {
                return stringtokr
    }
}

module.exports = { mod: new KoreanPatcher() };
