import { httpClient } from "@/src/app/http";
import { Produto } from "@/src/models/produtos";
import { AxiosResponse } from "axios";

const resourceURL: string = "/api/produtos";

export const useProdutoService = () => {

    const salvar = async (produto : Produto) : Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto)
        return response.data;
    }

    return {
        salvar
    }
}