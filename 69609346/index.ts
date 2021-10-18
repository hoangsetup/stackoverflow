import Usecase from "./usecase";

const usecase =  new Usecase();

export const handler = async (event: any) => {
  await usecase.submitTaxes();
}
