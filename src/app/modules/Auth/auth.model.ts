import { model, Schema } from 'mongoose'
import { TAuth, TLoginUser } from './auth.interface'
import bcrypt from 'bcrypt';

const loginSchema = new Schema<TLoginUser>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})


loginSchema.statics.isUserExistsByCustomId = async function(username: string){
    return await Auth.findOne({username}).select('+password')
}

loginSchema.statics.isPasswordMatched = async function(plainTextPasword, hashedPassword){
    return await bcrypt.compare(plainTextPasword, hashedPassword);
}

const Auth = model<TLoginUser, TAuth>('User', loginSchema)
export default Auth
