let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 100000.90]
    },
    taxes: "98.90"
}

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-----------")

    for(let index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
    console.log(`Os produtos são ${invoice.products}`)
}

generateInvoice(invoice)