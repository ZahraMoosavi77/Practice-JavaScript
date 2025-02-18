
function isBalanced(expression) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };

    for (let char of expression) {
        if (pairs[char]) {
            // اگر کاراکتر یک پرانتز باز باشد، آن را به پشته اضافه کن
            stack.push(char);
        } else {
            // اگر پرانتز بسته باشد، مقدار آخرین پرانتز باز را از پشته بیرون بیاور
            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false; // اگر جفت پرانتز نادرست بود، نامتعادل است
            }
        }
    }

    return stack.length === 0; // اگر پشته خالی باشد، متعادل است
}

// تست کد
const expr1 = "()[]";
const expr2 = "([]()";
const expr3 = "][()[]";

console.log(isBalanced(expr1)); // true ✅
console.log(isBalanced(expr2)); // false ❌
console.log(isBalanced(expr3)); // false ❌
