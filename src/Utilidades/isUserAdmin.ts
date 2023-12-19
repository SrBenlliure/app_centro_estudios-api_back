import Express, { NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import { jwUserToken } from "../types";

export async function isUserAdmin (req: Express.Request, res: Express.Response, next: NextFunction) {
    let isAuthorized = false;
    if (req.session.token != undefined) {
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!)
        const myTokenVerified: jwUserToken = <jwUserToken>tokenVerified;
        if (myTokenVerified.role == "Admin") isAuthorized = true;
    }
    if (isAuthorized) next();
    else res.status(401).json ({"message": "No estás autorizado"});
    
}