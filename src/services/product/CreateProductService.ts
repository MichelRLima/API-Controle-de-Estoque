import prismaClient from "../../prisma";
import { ProdutcRequest } from "../../models/interfaces/product/productRequest";

class CreateProductService {

    async execute({ name, price, description, banner, category_id, amount }: ProdutcRequest) {

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                amount: Number(amount)
            }
        })
        return product
    }

}

export { CreateProductService }