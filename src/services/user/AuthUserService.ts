import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import PrismaClient from "@prisma/client";
import { AuthRequest } from "../../models/interfaces/user/auth/AuthRequest";
import prismaClient from "../../prisma";


class AuthUserService {

    async execute({ email, password }: AuthRequest) {


        //verificar se esta sendo passado o e-mail e senha
        if (!email) {
            throw new Error("E-mail precisa ser informado")
        }

        if (!password) {
            throw new Error("Senha precisa ser informado")
        }
        ///////////////////////////////////////////////

        //verificar se tem algum usuario com o e-mail passado
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Email ou senha invalida")
        }

        /////////////////////////////////////////////////


        //verificar se a senha do usuario esta correta
        const passwordMatch = await compare(password, user?.password) //acessar apenas se user for verdadeiro

        if (!passwordMatch) {
            throw new Error("Senha incorreta")
        }

        const token = sign(  //sempre que o usuario for logado, necessario criar um token, sendo necessario passar os dados de acesso e a chave secreta
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string, //afirmando que é uma strig
            {
                subject: user?.id,
                expiresIn: "30d"
            }

        );
        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }

    }

}

export { AuthUserService }