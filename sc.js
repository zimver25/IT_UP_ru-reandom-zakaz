function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        },
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    let first_info = arrayReceipt[count]
    let result = `ваш заказ таков:`
    let price = 0
    for(keys in first_info){
        result +=`\n${keys + ' информация: ' + first_info[keys].info + ' цена: ' + first_info[keys].price}`
        price += Number(first_info[keys].price)
    }
   return `${result}\nвся сумма: \n${String(price + 9000)} и с ценой доставки (9000сум)`
}

console.log(receipt());