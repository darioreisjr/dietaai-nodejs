import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Dario Reis",\n  "sexo": "masculino",\n  "idade": 29,\n  "altura": 1.70,\n  "peso": 103,\n  "objetivo": "emagrecimento",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "1 fatia de pão integral",\n        "1 ovo cozido",\n        "1 xícara de café com leite desnatado",\n        "1 banana",\n        "1 colher de sopa de granola"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n        "1 iogurte grego natural desnatado",\n        "1/2 xícara de frutas vermelhas"\n      ]\n    },\n    {\n      "horario": "12:30",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido no vapor",\n        "Salada verde com azeite de oliva e limão"\n      ]\n    },\n    {\n      "horario": "15:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 xícara de chá verde",\n        "1 fatia de queijo minas",\n        "1 fatia de pão integral"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe grelhado",\n        "1 xícara de batata doce cozida",\n        "1 xícara de couve refogada"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 iogurte grego natural desnatado"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Proteína do soro do leite",\n    "Creatina",\n    "Ômega 3"\n  ]\n}\n```';

    try {
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return reply.send({ data: jsonObject });
    } catch (err) {
      console.log(err);
    }

    reply.send({ OK: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
