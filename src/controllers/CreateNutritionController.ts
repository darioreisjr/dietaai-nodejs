import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps;

    const createNutrition = new CreateNutritionService();

    const nutrition = await createNutrition.execute({
      name,
      age,
      gender,
      height,
      level,
      objective,
      weight,
    });

    reply.send(nutrition);
  }
}

export { CreateNutritionController };
