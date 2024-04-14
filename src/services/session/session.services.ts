import ApiLogic from "@/services/index";
import { generateResponse, type IResponse } from "@/utils/axios";

export async function get(): Promise<IResponse> {
  let response: IResponse;

  try {
    response = await ApiLogic.get(`session`);
  } catch (error: any) {
    response = error;
  }

  return generateResponse(response);
}
