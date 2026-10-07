Bảng phân tích Trade-off
Tiêu chí	Function Declaration	Function Expression	Arrow Function
Hoisting	Có	Không thể gọi trước khi gán	Không thể gọi trước khi gán
Cú pháp	function fn() {}	const fn = function() {}	const fn = () => {}
this	Dynamic	Dynamic	Lexical
arguments	Có	Có	Không có riêng
Implicit return	Không	Không	Có
Ưu điểm	Dễ tổ chức hàm, gọi trước khai báo	Linh hoạt, có thể gán hàm	Ngắn gọn, phù hợp ES6+
Nhược điểm	Dài hơn	Dài hơn Arrow	Không phù hợp khi cần this độngs