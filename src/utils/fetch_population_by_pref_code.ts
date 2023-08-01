import { APIClient } from "@services/index.ts";

export async function fetchPopulationDataByPrefCode(prefCode: number):Promise<any> {
  return await APIClient.get(
    `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
  )
    .then((res) => res.data.result.data[0].data)
    .catch((err) => console.log(err));
}
