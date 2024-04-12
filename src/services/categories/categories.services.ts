import ApiLogic from "@/services/index";
import { generateReponse } from "@/utils/axios";

export async function getAll() {
  let response: any;

  try {
    response = await ApiLogic.get(`categories`);
  } catch (error: any) {
    response = error;
  }

  return generateReponse(response);
}
