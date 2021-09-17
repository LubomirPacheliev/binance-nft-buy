import fetch from 'node-fetch';
import { COOKIE, CSRF_TOKEN, PRODUCT_ID, AMOUNT } from './config/config.js';

const PURCHASE_URL = 'https://www.binance.com/bapi/nft/v1/private/nft/mystery-box/purchase?productId=';

const getBoxInfo = async productID => {
    console.log('Getting mystery box info . . .');
    try {
        const INFO_URL = 'https://www.binance.com/bapi/nft/v1/friendly/nft/mystery-box/detail?productId=';
        const res = await fetch(INFO_URL + productID);
        if (!res.ok) throw new Error('Response is not okay');
        const parsedRes = await res.json();
        return parsedRes;
    } catch(e) {
        console.error(e);
    }
}

const startTimeout = async startTime => {
    const currTime = new Date().getTime();

    console.log('Starting the timer . . .');
    if (startTime < currTime) throw new Error('Sale has already ended.');
    console.log('Timer started.');
    setTimeout(() => purchaseBox(AMOUNT, PRODUCT_ID), startTime - currTime);
}

const purchaseBox = (amount, productID) => {
    fetch(PURCHASE_URL + productID, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            cookie: COOKIE,
            csrftoken: CSRF_TOKEN
        },
        body: JSON.stringify({ProductID: productID, Amount: amount})
    })
    console.log('Mystery box purchased.')
}

(async function() {
    const boxInfo = await getBoxInfo(PRODUCT_ID);
    const boxData = boxInfo.data;
    startTimeout(boxData.startTime);
})();