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
exports.Todos = exports.Todo = void 0;
const z = __importStar(require("zod"));
const db_1 = require("../../db");
exports.Todo = z.object({
    email: z.string().optional(),
    fname: z.string().optional(),
    lname: z.string().optional(),
    phone: z.any().optional(),
    role: z.string().optional(),
    username: z.string().optional(),
    avatar: z.string().optional(),
    password: z.string().optional(),
    attempt: z.number().optional(),
    password_created: z.number().optional(),
    qnn: z.string().optional(),
    signature: z.string().optional(),
    updated_at: z.number().optional(),
    created_at: z.number().optional(),
});
exports.Todos = db_1.db.collection('users');
//# sourceMappingURL=users.model.js.map