import ApiLogic from "@/services/index";
import { generateResponse, type IResponse } from "@/utils/axios";

export async function getAll(): Promise<IResponse> {
  let response: IResponse;

  try {
    response = await ApiLogic.get(`categories`);
  } catch (error: any) {
    response = error;
  }

  return generateResponse(response);
}
