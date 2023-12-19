var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jsonwebtoken from "jsonwebtoken";
export function isUserAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let isAuthorized = false;
        if (req.session.token != undefined) {
            const tokenVerified = yield jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET);
            const myTokenVerified = tokenVerified;
            if (myTokenVerified.role == "Admin")
                isAuthorized = true;
        }
        if (isAuthorized)
            next();
        else
            res.status(401).json({ "message": "No estás autorizado" });
    });
}
