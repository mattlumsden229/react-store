const productsArray = [
    {
        id: "price_1MYfifEgQDlE3GD3cbtT64rV",
        title: 'Energy Drink',
        price: 4.99
    },
    {
        id: "price_1MYvgFEgQDlE3GD3RTrsDtOJ",
        title: 'T-Shirt',
        price: 19.99
    },
    {
        id: "price_1MYvhVEgQDlE3GD3YWVUeirk",
        title: 'Brazilian Jiu-Jitsu Gi',
        price: 149.99
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if(productData == undefined) {
        console.log('Product data does not exist for ID: ' + id)
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};