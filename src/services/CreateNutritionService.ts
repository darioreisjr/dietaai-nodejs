import { DataProps } from "../controllers/CreateNutritionController";

class CreateNutritionService {
  async execute({
    name,
    age,
    gender,
    height,
    level,
    objective,
    weight,
  }: DataProps) {
    console.log("Teste");

    return { message: "FUNCIONOU O SERVICE" };
  }
}

export { CreateNutritionService };
