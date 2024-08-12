import { z } from 'zod'

const loginValidationSchema = z.object({
    body: z.object({
        username: z.string({
            required_error: 'username is required',
            invalid_type_error: 'username must be string',
        }),
        password: z.string({
            required_error: 'password is required',
            invalid_type_error: 'password must be string',
        }),
    }),
})

const refreshTokenValidationSchema = z.object({
    cookies: z.object({
        refreshToken: z.string({
            required_error: 'refresh token is required',
        }),
    }),
})

// const forgetPasswordValidationSchema = z.object({
//     body: z.object({
//         username: z.string({
//             required_error: 'username is required',
//         }),
//         password: z.string({
//             required_error: 'password is required'
//         })
//     })
// });


export const AuthValidation = {
    loginValidationSchema,
    refreshTokenValidationSchema,
}