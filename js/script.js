$(document).ready(function() {
    const pizzaSizeArray = [{
            name: "Extra Large",
            price: 900
        },
        {
            name: "Large",
            price: 700
        },
        {
            name: "Medium",
            price: 500
        },
        {
            name: "Small",
            price: 300
        }
    ]

    const crustOptionArray = [{
            name: "Double-Delight",
            price: 300
        },
        {
            name: "Regular",
            price: 0
        }
    ]

    const toppingsOptionArray = [{
            name: "BBQ Chicken",
            price: 300
        },
        {
            name: "Meat Deluxe",
            price: 200
        },
        {
            name: "Margherita",
            price: 250
        }
    ]
    $("#orderPizza").submit(function(event) {
        event.preventDefault();

        pizzaSize = $("#pizzaSize").val();
        crustOption = $("#crustOption").val();
        toppingsOption = $("#toppings").val();
        extraToppings = $("#extraToppings").val();
        numberOfOrder = $("#numberOfOrders").val();

        let pizzaSizePrice = 0;
        let crustOptionPrice = 0;
        let toppingsOptionPrice = 0;
        let extraToppingsPrice = 0;
        //to use these variables later



        //find out which size was selected

        $.each(pizzaSizeArray, function(key, value) {
            if (value.name == pizzaSize) {
                console.log(value.name + value.price);
                pizzaSizePrice = value.price;
                return pizzaSizePrice
            }
        });


        //find out which crust was selected
        console.log(pizzaSizePrice)
        $.each(crustOptionArray, function(key, value) {
            if (value.name == crustOption) {
                console.log(value.name + value.price);
                crustOptionPrice = value.price;
                return crustOptionPrice
            }
        });


        //find out which topping was selected
        $.each(toppingsOptionArray, function(key, value) {
            if (value.name == toppingsOption) {
                console.log(value.name + value.price);
                toppingsOptionPrice = value.price;
                return toppingsOptionPrice
            }
        });


        console.log(extraToppings)
        if (extraToppings == "Familiar") {
            extraToppingsPrice = 0;
            console.log(extraToppingsPrice);
        } else {
            if (extraToppings == "Surprise Me" && pizzaSize == "Extra Large") {
                extraToppingsPrice = 250;
                console.log(extraToppingsPrice);
            } else if (extraToppings == "Surprise Me" && pizzaSize == "Large") {
                extraToppingsPrice = 200;
                console.log(extraToppingsPrice);
            } else if (extraToppings == "Surprise Me" && pizzaSize == "Medium") {
                extraToppingsPrice = 150;
                console.log(extraToppingsPrice);
            } else if (extraToppings == "Surprise Me" && pizzaSize == "Small") {
                extraToppingsPrice = 100;
                console.log("extraToppings ", extraToppingsPrice)
            }
        }


        //total price calculation (size, crust, toppings, extraToppings)
        const totalCostOfPizza = pizzaSizePrice + crustOptionPrice + toppingsOptionPrice + extraToppingsPrice;
        console.log("total ", totalCostOfPizza);


        //total with number of orders

        const finalTotal = totalCostOfPizza * numberOfOrder;



        console.log(finalTotal);

        $("#sizeAndPrice").html("Size and Price: " + pizzaSizePrice);
        $("#crustAndPrice").html("Crust and Price: " + crustOptionPrice);
        $("#toppingsAndPrice").html("Toppings and Price: " + toppingsOptionPrice);
        $("#extraToppingsAndPrice").html("Extra Toppings and Price: " + extraToppingsPrice);
        $("#subTotal").html("Subtotal Cost: " + totalCostOfPizza);
        $("#orderNumber").html("Number of Order(s): " + numberOfOrder);
        $("#grandTotal").html("Grand Total Cost: " + finalTotal);

    });
    $("#deliveryPointForm").submit(function(event) {
        event.preventDefault();

        deliveryPoint = $("#deliveryPoint").val();
        if (deliveryPoint == 1) {
            $("#remoteLocation").show();

        };

    });
 $("#submitLocaton").submit(function(event) {
        event.preventDefault();
        var remoteClientName = $("#userName").val();
        var remoteClientAddress = $("#userAddress").val();
        var remoteClientPhoneNumber = $("#userTelNum").val();

        alert("#remoteThankYou").html("Thankyou " + remoteClientName + " for odering with us! Your order will be delivered to your location, " + remoteClientAddress + ".");

    });


});