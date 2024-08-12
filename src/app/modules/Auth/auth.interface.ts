/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type TLoginUser = {
    username: string
    password: string
}

export interface TAuth extends Model<TLoginUser> {
    isUserExistsByCustomId(id: string): Promise<TLoginUser>
    isPasswordMatched(
        plainTextPasword: string,
        hashedPassword: string
    ): Promise<boolean>
}
