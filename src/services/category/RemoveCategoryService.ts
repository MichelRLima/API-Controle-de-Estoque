import { RemoveCategoryRequyest } from "../../models/interfaces/category/RemoveCategoryRequest";
import prismaClient from "../../prisma";

class RemoveCategoryService {

    async execute({ category_id }: RemoveCategoryRequyest) {
        if (category_id) {
            const category = await prismaClient.category.delete({
                where: {
                    id: category_id
                }
            })

            return category
        }
    }

}

export { RemoveCategoryService }