import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritionService";

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    console.log("ROTA FOI CHAMADA !!!!!!!!!!");

    const createNutrition = new CreateNutritionService();

    const nutrition = await createNutrition.execute();

    reply.send(nutrition);
  }
}

export { CreateNutritionController };
