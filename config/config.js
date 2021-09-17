import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve('./')});

const API_KEY = process.env.API_KEY;

export {
    API_KEY
};