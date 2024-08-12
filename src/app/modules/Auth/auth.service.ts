import httpStatus from 'http-status'
import { TLoginUser } from './auth.interface'
import Auth from './auth.model'
import AppError from '../../errors/AppError'
import config from '../../config'
import { createToken } from './auth.utils'

const loginUser = async (payload: TLoginUser) => {
    const user = await Auth.isUserExistsByCustomId(payload.username)

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!')
    }

    if (!(await Auth.isPasswordMatched(payload.password, user.password))) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password mismatch')
    }

    const jwtPayload = {
        username: user.username,
    }
    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_expires_in as string
    )

    return accessToken;
}


export const AuthServices = {
    loginUser
}