var menu = {
    supreme: {
        name: "supreme",
        price: 22,
        toppings: ["pepperoni", "sausage", "onion"]
    },
    special: {
        name: "special",
        price: 21,
        toppings: ["olive", "pepper", "cheese"]
    },
    nonna: {
        name: "nonna",
        price: 23,
        toppings: ["spinach", "onion", "jalapena"]
    },
    vaggie: {
        name: "veggie",
        price: 22,
        toppings: ["red onion", "mushroom", "potato"]
    },
    plain: {
        name: "plain",
        price: 24,
        toppings: ["cheese", "sause", "garlic"]
    }
}

    console.log(menu.supreme);

    for(var key in menu) {
        console.log(key)
    };
    var banana = false;
    for (var key in menu) {
        if(menu[key] === "banana") {
        console.log("Ther is a banana pizza")
        banana = true;
        }
    }
    if(! banana){
        console.log("There is no banana pizza")
    };

