import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../models/interfaces/user/UserRequest";


class CreateUserService {

    //usando a interface UserRequesta criada para garantir os dados estao corretos
    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email incorreto")
        }

        //se encontrar algum e-mail igual, apresenta erro (verifica se o usuario ja existe)
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email ja existe!");
        }
        ///////////////////////////////////////////////////////////

        //Encriptando a senha do usuario
        const passwordHash = await hash(password, 8)

        ////////////////////////////////////////////

        //Criando o usuario no banco

        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return user;
    }
}

export { CreateUserService }