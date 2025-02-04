"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
const TodoHandlers = __importStar(require("./auth.handlers"));
const auth_model_1 = require("./auth.model");
const router = (0, express_1.Router)();
//
router.post('/', (0, middlewares_1.validateRequest)({
    body: auth_model_1.Auth,
}), TodoHandlers[process.env.AUTH_TYPE === 'ldap' ? 'findOneLdap' : 'findOne']);
router.post('/qa', TodoHandlers.qaVerify);
router.get('/ldapusers', TodoHandlers.findAllUsers);
router.post('/ldapusers', TodoHandlers.findAllUsersUsingConfig);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map