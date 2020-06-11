/*
Title: Cash Register 
*/
/* 
Link: 
*/
/*
Resume: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
        payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
*/

function checkCashRegister(price, cash, cid) {
    let units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let quantityOfUnitsUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let response = [];
    let change = cash - price;
    let sumCashInDrawer = sumCid(cid);

    if (sumCid(cid) == change) {
        return { status: 'CLOSED', change: cid };
    }

    for (let index = cid.length - 1; index >= 0; index--) {
        if (sumCashInDrawer > change && cid[index][1] !== 0) {
            while (change !== 0 && cid[index][1] > 0 && change >= units[index]) {
                cid[index][1] -= units[index];
                change -= units[index];
                change = +change.toFixed(2);
                quantityOfUnitsUsed[index] = quantityOfUnitsUsed[index] + 1;
                if (change == 0) {
                    for (let i = 0; i < quantityOfUnitsUsed.length; i++) {
                        if (quantityOfUnitsUsed[i] > 0) {
                            response.unshift([cid[i][0], units[i] * quantityOfUnitsUsed[i]]);
                        }
                    }
                    return { status: "OPEN", change: response };
                }
            }
        } else if (sumCid(cid) < change || units[index] > change) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        }

    }
}

function sumCid(cid) {
    let sumResult = 0;
    sumResult = cid.reduce((accumulator, currentValue) =>
        ["sum", currentValue[1] + accumulator[1]])
    return sumResult[1];
}
