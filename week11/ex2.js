function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  // Kiểm tra rỗng
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    errorMsg.textContent = "Vui lòng điền đầy đủ thông tin.";
    return false;
  }

  // Kiểm tra email có chứa @
  if (!email.includes("@")) {
    errorMsg.textContent = "Email không hợp lệ.";
    return false;
  }

  // Kiểm tra khớp mật khẩu
  if (password !== confirmPassword) {
    errorMsg.textContent = "Mật khẩu không khớp.";
    return false;
  }

  // Nếu hợp lệ
  errorMsg.textContent = "";
  alert("Form đã gửi thành công!");
  return true;
}