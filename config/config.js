import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve('./') + '/config/.env'});

const COOKIE = process.env.COOKIE;
const CSRF_TOKEN = process.env.CSRF_TOKEN;

export {
    COOKIE,
    CSRF_TOKEN
};