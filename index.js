import fetch from 'node-fetch';

const purchaseURL = 'https://www.binance.com/bapi/nft/v1/private/nft/mystery-box/purchase';

const asyncGetBoxInfo = async (productID) => {
    try {
        const infoURL = 'https://www.binance.com/bapi/nft/v1/friendly/nft/mystery-box/detail?productId=';
        const res = await fetch(infoURL + productID);
        if (!res.ok) throw new Error('Response is not okay');
        const parsedRes = await res.json();
        return parsedRes;
    } catch(e) {
        console.error(e);
    }
}

asyncGetBoxInfo('133913760132809728')
.then(res => console.log(res.data.startTime))