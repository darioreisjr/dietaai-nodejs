import { FastifyRequest, FastifyReply } from "fastify";

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    console.log("ROTA FOI CHAMADA !!!!!!!!!!");

    reply.send({ message: "ROTA FOI CHAMADA!!!" });
  }
}

export { CreateNutritionController };
