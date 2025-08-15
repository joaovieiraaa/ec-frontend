import ApiLogic from "@/services/index";
import { generateResponse, type IResponse } from "@/utils/axios";

export async function getAll(params: any): Promise<IResponse> {
  let response: IResponse;

  try {
    response = await ApiLogic.get(
      "categories?" + new URLSearchParams(params).toString()
    );
  } catch (error: any) {
    response = error;
  }

  return generateResponse(response);
}
