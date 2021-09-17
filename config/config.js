import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve('./') + '/config/.env'});

const COOKIE = process.env.COOKIE;
const CSRF_TOKEN = process.env.CSRF_TOKEN;
const PRODUCT_ID = process.env.PRODUCT_ID;
const AMOUNT = process.env.AMOUNT;

export {
    COOKIE,
    CSRF_TOKEN,
    PRODUCT_ID,
    AMOUNT
};