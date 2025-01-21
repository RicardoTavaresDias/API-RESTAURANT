import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { z } from "zod"
import { knex } from "@/database/knex"

class ProductController {
  async index(request: Request, response: Response, next: NextFunction){
    try {
      const { name } = request.query

      const products = await knex<ProductRepository>("products")
      .select()
      .whereLike("name", `%${name ?? ""}%`)
      .orderBy("name")
      
      return response.json(products)
    } catch (error) {
      // Usa next para passar o erro assincrona
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0, { message: "value must be greater than 0"})
      })

      const { name, price } = bodySchema.parse(request.body)

      //<ProductRepository> é a tipagem do typescript definido no arquivo product-repository.d.ts
      await knex<ProductRepository>("products").insert({ name, price })

      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction){
    try {
      //Tratamento se o valor do parametro o valor que esta sendo recebido se é ID
      const id = z
      .string()
      .transform((value) => Number(value))
      .refine((value) => !isNaN(value), { menssage: "id must be a number" })
      .parse(request.params.id)

      // Tratamento dos campos name e price
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0)
      })

      const { name, price } = bodySchema.parse(request.body)

      // Para não aceitar id que não existe exemplo não existe numero 3
      const product = await knex<ProductRepository>("products")
      .select()
      .where({ id })
      .first()

      //Caso encontre passar a mensagem de erro.
      if (!product){
      throw new AppError("product not found")
      }

      await knex<ProductRepository>("products")
      .update({ name, price, updated_at: knex.fn.now() })
      .where({ id })

      return response.json()
    } catch (error) {
      next(error)
    }
  }

  async remove(request: Request, response: Response, next: NextFunction){
    try {
      //Tratamento se o valor do parametro o valor que esta sendo recebido se é ID
      const id = z
      .string()
      .transform((value) => Number(value))
      .refine((value) => !isNaN(value), { menssage: "id must be a number" })
      .parse(request.params.id)

      // Para não aceitar id que não existe exemplo não existe numero 3
      const product = await knex<ProductRepository>("products")
      .select()
      .where({ id })
      .first()

      //Caso encontre passar a mensagem de erro.
     if (!product){
      throw new AppError("product not found")
     }

      await knex<ProductRepository>("products").delete().where({ id })

      return response.json()
    } catch (error) {
      next(error)
    }
  }

}

export { ProductController }