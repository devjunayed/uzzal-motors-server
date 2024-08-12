import path from 'path';
import dotenv from 'dotenv';

dotenv.config({path: path.join(process.cwd(), '.env')});

export default {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_expires_in: process.env.JWT_ACCESS_EXPIRE_IN
}