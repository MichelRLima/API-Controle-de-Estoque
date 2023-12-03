import prismaClient from "../../prisma";

interface removeProductRequest {
    product_id: string
}

class RemoveProductService {
    async execute({ product_id }: removeProductRequest) {
        if (!product_id) {
            throw new Error("Id do produto nao foi enviado")
        }

        const removeProduct = await prismaClient.product.delete({
            where: {
                id: product_id,
            }
        })
        return removeProduct;
    }
}

export { RemoveProductService }