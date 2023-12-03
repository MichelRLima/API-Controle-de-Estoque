import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../models/interfaces/user/auth/Payload";

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction

) {

    //acessar token JWR
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ") //desconsidera o primeiro elemento do array 

    try {

        //validar token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload
        request.user_id = sub
        return next(); //deuxa a requisiçao seguir

    } catch (error) {
        return response.send(401).end()
    }
}