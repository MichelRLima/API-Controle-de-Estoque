import express, { Request, Response, NextFunction } from "express"
import cors from 'cors'
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import path from 'path'
import swaggerDocumento from "../swagger.json"
import { router } from "./routes"

const app = express();
const port = process.env.PORT || 3333
app.use(express.json()); //receberemos e devolveremos arquivos json
app.use(cors()) //adicionando cors para habilitar a comunicação com o front
app.use('/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumento))
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp")))//acessar imagem do banco 

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: 'Internal server error'
    })
})

app.get('/terms', (request: Request, response: Response) => {
    return response.json({
        message: "Termos de serviço"
    })
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3333 - projeto de controle de estoque node js")
})