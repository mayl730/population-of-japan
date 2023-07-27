import { APIClient } from "@services/index.ts";

export async function fetchPopulationDataByPrefCode() {
  try {
    const response = await APIClient.get(
      "/api/v1/population/composition/perYear?cityCode=-&prefCode=1"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
