import { CreateProductService } from "../../services/product/CreateProductService";
import { Response, Request } from "express";
import { ProdutcRequest } from "../../models/interfaces/product/productRequest";

class CreateProductController {

    async handle(request: Request, response: Response) {
        const { name, price, description, banner, category_id, amount }: ProdutcRequest = request.body;

        const createProductService = new CreateProductService()

        if (!request.file) {
            throw new Error("Error sending image")
        } else {
            const { originalname, filename: banner } = request.file
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id,
                amount
            })

            return response.json(product)
        }
    }

}

export { CreateProductController }