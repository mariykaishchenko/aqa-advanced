function checkOrder(available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else if (available >= ordered) {
        return "Your order is accepted";
    } else {
        return "Oops something went wrong";
    }
}
const AVAILABLE = 100;
console.log(checkOrder(AVAILABLE, 101));
console.log(checkOrder(AVAILABLE, 100));
console.log(checkOrder(AVAILABLE, 99));
console.log(checkOrder(AVAILABLE, 0));
console.log(checkOrder(AVAILABLE, "A"));