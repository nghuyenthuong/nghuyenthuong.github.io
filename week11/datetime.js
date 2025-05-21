function showDateTime() {
  // Mảng tên các ngày trong tuần bằng tiếng Việt
  const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  
  const now = new Date(); // lấy thời gian hiện tại

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const formatted = `Hôm nay là ${day}, ngày ${date} tháng ${month} năm ${year} - ${hours}:${minutes}:${seconds}`;

  document.getElementById("datetime").innerText = formatted;
}

// Gọi hàm mỗi giây để cập nhật thời gian
setInterval(showDateTime, 1000);
