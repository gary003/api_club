"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMediaDB = void 0;
const connectionFile_1 = require("../connection/connectionFile");
const entity_1 = require("./entity");
const getAllMediaDB = (mediaId) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, connectionFile_1.connectionDB)();
    const MediaRepository = connection.getRepository(entity_1.Media);
    const media = yield MediaRepository.find().catch((err) => console.error(err));
    yield connection.destroy();
    if (!media)
        throw new Error("Impossible to found the requested wallet");
    return media;
});
exports.getAllMediaDB = getAllMediaDB;
