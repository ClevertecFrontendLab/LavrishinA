import {instance} from "@utils/axios-instance.ts";
import {AxiosResponse} from "axios";

export class authApi {
    static regUser(args: RegistrationPayload) {

        return instance.post<AuthResponse, AxiosResponse<AuthResponse>, RegistrationPayload>(`/auth/registration`, args)
    }

    static authUser(args: AuthPayload) {
        return instance.post<AuthSuccessResponse, AxiosResponse<AuthSuccessResponse>, AuthPayload>('/auth/login', args)
    }
}


export type AuthResponse = {
    statusCode: number,
    error: string,
    message: string
}

export type AuthSuccessResponse = {
    accessToken: string
}

export type RegistrationPayload = {
    email: string
    password: string
}

export type AuthPayload = {
    rememberMe?: boolean
} & RegistrationPayload
