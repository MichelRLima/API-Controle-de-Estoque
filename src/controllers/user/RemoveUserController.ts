import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {

    async handle(request: Request, response: Response) {
        const user_id = request?.query.user_id as string;
        const removeUserService = new RemoveUserService()
        const removeUer = removeUserService.execute({ user_id })
        return response.json(removeUer)
    }

}

export { RemoveUserController }