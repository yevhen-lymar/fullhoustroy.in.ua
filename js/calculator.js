var end_price = document.getElementById("end_price");
var form = document.smeta;
var tr = document.querySelectorAll("#smeta_table tr");
var uah = " грн.";

function showPrice() {
    var sum = 0,
        price = [0];
    for (var i = 1; i < tr.length - 1; i++) {
        price.push(0);

        price[i] += +form.elements["cost" + i].value * form.elements["cost" + i].dataset.price;
        form.elements["price" + i].value = price[i];
        sum += price[i];
    }
    end_price.innerHTML = sum + uah ;
}
showPrice();
for (var i = 0; i < form.length; i++) {
    if (form.elements[i].type == "number") form.elements[i].onchange = showPrice;
}