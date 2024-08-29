import httpStatus from 'http-status'
import AppError from '../errors/AppError'
import catchAsync from '../utils/catchAsync'
import { NextFunction, Request, Response } from 'express'
import config from '../config'
import jwt, { JwtPayload } from 'jsonwebtoken'
import Auth from '../modules/Auth/auth.model'

const auth = (role: string) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const token = req.headers.authorization?.split(" ")[1]

            if (!token) {
                throw new AppError(
                    httpStatus.UNAUTHORIZED,
                    'you are not authorized'
                )
            }

            const decoded = jwt.verify(
                token,
                config.jwt_access_secret as string
            ) as JwtPayload

            const { username } = decoded

            console.log(decoded);

            const user = await Auth.isUserExistsByCustomId(username)

            if (!user) {
                throw new AppError(
                    httpStatus.NOT_FOUND,
                    'This user is not found'
                )
            }

            next()
        }
    )
}

export default auth
