function declarationExample() {
    console.log("Function Declaration");
}

const expressionExample = function () {
    console.log("Function Expression");
};

const arrowExample = () => {
    console.log("Arrow Function");
};

declarationHoisting();

function declarationHoisting() {
    console.log("Declaration: Có thể gọi trước khi khai báo");
}

const expressionHoisting = function () {
    console.log("Expression: Phải khai báo trước khi gọi");
};

expressionHoisting();

const arrowHoisting = () => {
    console.log("Arrow: Phải khai báo trước khi gọi");
};

arrowHoisting();

function declarationArguments() {
    console.log("Số lượng arguments:", arguments.length);
}

declarationArguments(10, 20, 30);

const expressionArguments = function () {
    console.log("Số lượng arguments:", arguments.length);
};

expressionArguments(10, 20);

const arrowArguments = (...numbers) => {
    console.log("Số lượng tham số:", numbers.length);
};

arrowArguments(10, 20, 30);

console.log("\n===== BẢNG SO SÁNH =====");

console.log("Function Declaration:");
console.log("- Hoisting: Có");
console.log("- this: Dynamic this");
console.log("- arguments: Có");
console.log("- Cú pháp: function tenHam() {}");

console.log("\nFunction Expression:");
console.log("- Hoisting: Không thể gọi trước khi gán");
console.log("- this: Dynamic this");
console.log("- arguments: Có");
console.log("- Cú pháp: const fn = function() {}");

console.log("\nArrow Function:");
console.log("- Hoisting: Không thể gọi trước khi gán");
console.log("- this: Kế thừa từ bên ngoài");
console.log("- arguments: Không có riêng");
console.log("- Cú pháp: const fn = () => {}");



console.log("\n===== QUY CHUẨN SMART HOME IoT =====");

console.log("1. Ưu tiên Arrow Function cho các hàm xử lý thông thường.");
console.log("2. Dùng Function Declaration cho các hàm tiện ích cần gọi trước.");
console.log("3. Dùng Function Expression khi cần lưu hàm vào biến.");
console.log("4. Không sử dụng Arrow Function khi cần this của object.");
console.log("5. Thống nhất một cách viết trong cùng một module.");

