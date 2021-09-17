import fetch from 'node-fetch';

const PURCHASE_URL = 'https://www.binance.com/bapi/nft/v1/private/nft/mystery-box/purchase';
const PRODUCT_ID = 133913760132809728

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
    const boxInfo = await getBoxInfo(PRODUCT_ID);
    const boxData = boxInfo.data;

    console.log('Starting the timer . . .');
    if (startTime < currTime) throw new Error('Sale has already ended.');
    console.log('Timer started.');
    setTimeout(() => purchaseBox(boxData), startTime - currTime);
}

const purchaseBox = async boxData => {
    console.log('Mystery box purchased.')
}

startTimeout(new Date().getTime() + 2000);