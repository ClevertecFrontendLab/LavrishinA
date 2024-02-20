import {instance} from "@utils/axios-instance.ts";
import {AxiosResponse} from "axios";

export class authApi {
    static regUser(args: RegistrationPayload) {

        return instance.post<AuthResponse, AxiosResponse<AuthResponse>, RegistrationPayload>(`/auth/registration`, args)
    }
}

type AuthResponse = {
    statusCode: number,
    error: string,
    message: string
}

export type RegistrationPayload = {
    email: string
    password: string
}
