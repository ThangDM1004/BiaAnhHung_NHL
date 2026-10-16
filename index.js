let currentGallery = 0;
const galleryTrack = document.querySelector(".gallery-track");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryDots = document.querySelectorAll(".gallery-dot");
function updateGallery() {
    if (!galleryTrack || gallerySlides.length === 0) return;
    galleryTrack.style.transform = `translateX(-${currentGallery * 100}%)`;
    galleryDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentGallery);
    });
}
function changeGallery(direction) {
    currentGallery = (currentGallery + direction + gallerySlides.length) % gallerySlides.length;
    updateGallery();
}
function goToGallery(index) {
    currentGallery = index;
    updateGallery();
}

const DATA = { "ls": [{ "n": "Trần Văn Năm", "b": "1943", "e": "04/1971", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "24/10/1973" }, { "n": "Trương Văn Đáng", "b": "1944", "e": "02/1960", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Đội viên du kích", "h": "09/09/1966" }, { "n": "Nguyễn Văn Bá", "b": "1934", "e": "01/1968", "q": "Mỹ Thạnh Trung - Cai Lậy - Tiền Giang", "c": "Chuẩn úy", "h": "25/08/1975" }, { "n": "Trần Văn Thị", "b": "1928", "e": "05/04/1954", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Đội viên du kích xã", "h": "05/03/1962" }, { "n": "Tô Văn Tạo", "b": "1948", "e": "01/1963", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Tiểu đội trưởng", "h": "13/01/1968" }, { "n": "Nguyễn Văn Thế", "b": "1940", "e": "05/1961", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Tiểu đội trưởng - Du kích xã", "h": "20/11/1964" }, { "n": "Tô Thành Tiếng", "b": "1944", "e": "19/10/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Phó công an xã", "h": "19/10/1968" }, { "n": "Lê Lâm Sơn", "b": "1954", "e": "05/1975", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Thiếu úy", "h": "08/03/1978" }, { "n": "Lê Chiến Thắng", "b": "1953", "e": "01/1968", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Chiến sĩ", "h": "27/06/1968" }, { "n": "Lê Thị Sương", "b": "1951", "e": "01/1970", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trưởng ban an ninh mật", "h": "22/09/1972" }, { "n": "Lê Ngọc Cẩn", "b": "1950", "e": "01/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội trưởng", "h": "24/01/1970" }, { "n": "Phan Văn Tám", "b": "1954", "e": "01/1972", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Đội viên du kích", "h": "08/01/1975" }, { "n": "Phan Văn Thanh", "b": "1942", "e": "15/06/1969", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Xã đội trưởng", "h": "26/01/1970" }, { "n": "Lê Châu Lang", "b": "1942", "e": "01/01/1961", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "15/03/1963" }, { "n": "Lê Văn Trầm", "b": "1915", "e": "01/1959", "q": "Tân Quí Đông - Châu Thành - Tiền Giang", "c": "Đại đội trưởng", "h": "11/06/1969" }, { "n": "Lê Văn Dơn", "b": "1948", "e": "01/1962", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "15/05/1968" }, { "n": "Đặng Châu Trang", "b": "1937", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Xã đội phó", "h": "28/08/1969" }, { "n": "Đặng Văn Tư", "b": "1936", "e": "", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Thượng sĩ", "h": "02/09/1967" }, { "n": "Tạ Thành Đức", "b": "1944", "e": "14/02/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Hạ sĩ", "h": "29/10/1969" }, { "n": "Đặng Văn Quành", "b": "1936", "e": "01/1948", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Đội viên du kích xã", "h": "13/04/1949" }, { "n": "Nguyễn Văn Hai", "b": "1935", "e": "01/1960", "q": "Tuyên Thạnh - Mộc Hóa - Long An", "c": "Xã đội phó", "h": "25/06/1967" }, { "n": "Nguyễn Văn Tư", "b": "1945", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "25/07/1969" }, { "n": "Nguyễn Văn Niệm", "b": "1940", "e": "", "q": "Tân Hiệp - Giồng Riềng - Kiên Giang", "c": "Tiểu đội phó", "h": "01/07/1969" }, { "n": "Nguyễn Thị Liển", "b": "1929", "e": "1950", "q": "Hội Cư - Cai Bè - Tiền Giang", "c": "Chiến sĩ", "h": "17/06/1967" }, { "n": "Lâm Văn Tấn", "b": "1943", "e": "", "q": "Mỹ Phước Tây - Cai Lậy - Tiền Giang", "c": "Vũ trang xã", "h": "25/11/1969" }, { "n": "Đặng Thị Cúc", "b": "1948", "e": "06/01/1968", "q": "Tân Ninh - Tân Thạnh - Long An", "c": "Y tá", "h": "25/05/1970" }, { "n": "Hà Văn Hiếu", "b": "1931", "e": "05/1955", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Trung đội trưởng xã", "h": "10/02/1962" }, { "n": "Nguyễn Văn Năm", "b": "1938", "e": "08/1963", "q": "Phước Thạnh - Châu Thành - Mỹ Tho", "c": "Thượng sĩ", "h": "14/08/1968" }, { "n": "Nguyễn Văn Oanh", "b": "1947", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Tiểu đội trưởng - Du kích xã", "h": "13/01/1966" }, { "n": "Trần Văn Dảnh", "b": "1923", "e": "01/1946", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội trưởng", "h": "15/06/1954" }, { "n": "Nguyễn Hùng Tây", "b": "1957", "e": "26/12/1973", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Chiến sĩ", "h": "08/09/1974" }, { "n": "Trần Văn Sáu", "b": "1944", "e": "20/03/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Thượng sĩ", "h": "24/04/1965" }, { "n": "Hồ Văn Ngay", "b": "1914", "e": "01/02/1960", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Tổ trưởng Hội Nông dân", "h": "08/06/1962" }, { "n": "Nguyễn Văn Lượng", "b": "1935", "e": "02/1959", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Xã đội trưởng du kích", "h": "23/06/1970" }, { "n": "Đoàn Văn Bảy", "b": "1943", "e": "04/06/1964", "q": "Nhơn Ninh - Mộc Hóa - Long An", "c": "Đội viên du kích", "h": "1968" }, { "n": "Tô Thành Hai", "b": "1924", "e": "01/01/1949", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó du kích", "h": "26/08/1961" }, { "n": "Nguyễn Văn Thọ", "b": "1945", "e": "05/1964", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "28/02/1969" }, { "n": "Trương Văn Anh", "b": "1932", "e": "10/10/1960", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Tiểu đội trưởng du kích", "h": "14/07/1966" }, { "n": "Nguyễn Văn Táng", "b": "1921", "e": "", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Trung đội trưởng", "h": "10/07/1948" }, { "n": "Phạm Văn Thời", "b": "1925", "e": "05/1961", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Thượng sĩ", "h": "25/07/1963" }, { "n": "Huỳnh Thị Vân", "b": "1925", "e": "", "q": "Nhơn Ninh - Tân Thạnh - Long An", "c": "Hội Phụ nữ xã", "h": "21/05/1963" }, { "n": "Phạm Văn Bén", "b": "1943", "e": "10/02/1962", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Trung sĩ", "h": "10/05/1964" }, { "n": "Nguyễn Văn Dư", "b": "1899", "e": "10/10/1937", "q": "Phú Mỹ - Châu Thành Bắc - Tiền Giang", "c": "Hội viên tổ nhà vàng", "h": "08/09/1941" }, { "n": "Nguyễn Văn Chót", "b": "1940", "e": "15/05/1961", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Thượng sĩ", "h": "08/05/1964" }, { "n": "Nguyễn Thị Bạch Hường", "b": "1945", "e": "03/1963", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Dân công", "h": "18/03/1969" }, { "n": "Nguyễn Thanh Lưu", "b": "1952", "e": "04/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Chiến sĩ", "h": "29/12/1967" }, { "n": "Lê Quang Phục", "b": "1928", "e": "01/1958", "q": "Bình Tịnh - Tân Trụ - Long An", "c": "Phó ban Bình vận", "h": "09/09/1968" }, { "n": "Trầm Văn A", "b": "1929", "e": "06/1962", "q": "Nhơn Ninh - Kiến Bình - Kiến Tường", "c": "Đội viên du kích", "h": "24/02/1964" }, { "n": "Đoàn Văn Nhân", "b": "1940", "e": "1971", "q": "Nhơn Ninh - Tân Thạnh - Long An", "c": "Ấp đội trưởng", "h": "21/03/1974" }, { "n": "Châu Ngọc Em", "b": "1963", "e": "02/1982", "q": "Mỹ Phước - Châu Thành - Long An", "c": "Trung đội phó", "h": "29/05/1985" }, { "n": "Dương Công Phép", "b": "1925", "e": "05/1947", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Bí thư Đảng ủy xã", "h": "13/03/1964" }, { "n": "Trần Văn Phát", "b": "1946", "e": "30/11/1962", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Du kích xã", "h": "20/11/1963" }, { "n": "Trần Văn Chơn", "b": "1937", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "15/05/1966" }, { "n": "Phạm Văn Hùng", "b": "1950", "e": "08/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội trưởng", "h": "14/03/1968" }, { "n": "Phạm Văn Tham", "b": "", "e": "07/1962", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "10/10/1968" }, { "n": "Huỳnh Văn Chính", "b": "1945", "e": "01/01/1963", "q": "Tân Ninh - Mộc Hóa - Long An", "c": "Tiểu đội trưởng", "h": "30/07/1968" }, { "n": "Phan Văn Chuyển", "b": "1930", "e": "17/05/1948", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Chiến sĩ", "h": "24/06/1952" }, { "n": "Tạ Văn Cu", "b": "1954", "e": "", "q": "Phước Hải - Hưng Điền - Bà Rịa", "c": "Thượng sĩ", "h": "25/11/1983" }, { "n": "Trần Lâm", "b": "", "e": "09/1965", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Trung sĩ", "h": "18/08/1971" }, { "n": "Nguyễn Văn Sáng", "b": "1966", "e": "08/1984", "q": "Nhơn Ninh - Tân Thạnh - Long An", "c": "Ấp đội trưởng", "h": "07/04/1987" }, { "n": "Hà Văn Ngôn", "b": "1938", "e": "01/01/1966", "q": "Tân Ninh - Mộc Hóa - Long An", "c": "A trưởng", "h": "13/11/1968" }, { "n": "Nguyễn Văn Sạng", "b": "1938", "e": "1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Bí thư Chi bộ xã", "h": "28/09/1966" }, { "n": "Huỳnh Văn Mới", "b": "1930", "e": "02/1957", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Phó ban Kinh tài xã", "h": "08/1965" }, { "n": "Hà Văn Cẩn", "b": "1926", "e": "05/1955", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Trung đội phó", "h": "15/08/1972" }, { "n": "Dương Công Trực", "b": "1949", "e": "05/06/1964", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trưởng ban Bình vận xã", "h": "01/01/1968" }, { "n": "Dương Công Lễ", "b": "1918", "e": "01/01/1962", "q": "Hậu Thành - Cái Bè - Tiền Giang", "c": "Chiến sĩ", "h": "26/09/1969" }, { "n": "Nguyễn Văn Hiệp", "b": "1956", "e": "01/11/1976", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Bí thư Chi bộ xã", "h": "01/11/1977" }, { "n": "Lê Văn Quang", "b": "1927", "e": "01/07/1949", "q": "Thanh Hưng - Cái Bè - Tiền Giang", "c": "A phó", "h": "25/05/1967" }, { "n": "Phan Văn Múm", "b": "1949", "e": "20/07/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Thượng sĩ", "h": "24/05/1969" }, { "n": "Hà Văn Thảo", "b": "1935", "e": "04/1955", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Bí thư Chi bộ xã", "h": "05/07/1957" }, { "n": "Nguyễn Văn Chiến", "b": "1936", "e": "05/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Tiểu đội phó du kích", "h": "18/03/1969" }, { "n": "Tô Văn Phát", "b": "1943", "e": "01/04/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Cán bộ Kinh tài tỉnh", "h": "16/10/1961" }, { "n": "Nguyễn Văn Mầu", "b": "1925", "e": "01/1952", "q": "Bình Hòa - Mộc Hóa - Long An", "c": "Tổ trưởng du kích", "h": "12/03/1967" }, { "n": "Nguyễn Thị Ánh", "b": "1924", "e": "04/1961", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Du kích xã", "h": "10/02/1968" }, { "n": "Hà Văn Phong", "b": "1950", "e": "02/1973", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Đội viên du kích", "h": "22/12/1973" }, { "n": "Trần Văn Tư", "b": "1949", "e": "01/1968", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "27/07/1968" }, { "n": "Hà Văn Chọn", "b": "1934", "e": "05/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "10/05/1970" }, { "n": "Hà Minh Chí", "b": "1957", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Dân công", "h": "03/07/1978" }, { "n": "Nguyễn Văn Hồng", "b": "1953", "e": "", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Du kích", "h": "24/12/1969" }, { "n": "Nguyễn Văn Thậm", "b": "1932", "e": "1957", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Dân công", "h": "13/07/1966" }, { "n": "Trần Văn Ngói", "b": "1938", "e": "01/12/1960", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Du kích", "h": "17/03/1968" }, { "n": "Nguyễn Văn Đua", "b": "1938", "e": "01/1961", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Tiểu đội trưởng", "h": "24/12/1969" }, { "n": "Ngô Văn Đức", "b": "1953", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Hội viên du kích", "h": "24/01/1964" }, { "n": "Trần Văn Gấm", "b": "1934", "e": "22/08/1950", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Tổ trưởng du kích", "h": "01/01/1969" }, { "n": "Đoàn Văn Nhiên", "b": "1949", "e": "01/01/1963", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "05/03/1953" }, { "n": "Đoàn Văn Chính", "b": "1921", "e": "16/04/1972", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội trưởng", "h": "05/05/1971" }, { "n": "Nguyễn Văn Hòa", "b": "1919", "e": "", "q": "Tân Thạnh - TP. Cà Mau - Cà Mau", "c": "Nhân viên Ban Chấp hành Nông hội", "h": "25/07/1972" }, { "n": "Hồ Thị Dệt", "b": "1920", "e": "", "q": "Tân Thạnh - TP. Cà Mau - Cà Mau", "c": "", "h": "18/06/1959" }, { "n": "Đổ Công Chuyên", "b": "", "e": "03/1963", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Hội trưởng Phụ nữ ấp", "h": "03/09/1960" }, { "n": "Đoàn Văn Thắng", "b": "1939", "e": "02/1959", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Đội viên du kích", "h": "27/02/1966" }, { "n": "Nguyễn Văn Rở", "b": "1932", "e": "16/10/1947", "q": "Tân Lập - Tân Thạnh - Long An", "c": "Đại đội trưởng", "h": "03/03/1968" }, { "n": "Hà Văn Thơ", "b": "1924", "e": "05/1955", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Cán bộ Ban Bình vận", "h": "20/10/1961" }, { "n": "Nguyễn Văn Hiếu", "b": "", "e": "06/05/1959", "q": "Mỹ Phước - Châu Thành - Tiền Giang", "c": "Trưởng Công an xã kiêm tài chính xã", "h": "25/02/1966" }, { "n": "Tô Văn Giỏi", "b": "1928", "e": "", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Cán bộ liên lạc xã", "h": "07/05/1970" }, { "n": "Đỗ Văn Lô", "b": "1954", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Kinh tài xã", "h": "28/03/1973" }, { "n": "Nguyễn Văn Điều", "b": "1929", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Xã đội trưởng", "h": "27/12/1964" }, { "n": "Trần Văn Tơ", "b": "1944", "e": "01/01/1960", "q": "Tân Ninh - Tân Thạnh - Long An", "c": "Trung đội phó", "h": "20/06/1967" }, { "n": "Nguyễn Văn Chinh", "b": "1934", "e": "02/1967", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Chính trị viên", "h": "14/10/1966" }, { "n": "Nguyễn Văn Lài", "b": "1937", "e": "01/1962", "q": "Bình Phú - Cai Lậy - Mỹ Tho", "c": "Du kích xã", "h": "04/06/1969" }, { "n": "Vũ Văn Nhuệ", "b": "1911", "e": "15/08/1949", "q": "Tuyên Hưng - Đông Thọ - Thái Bình", "c": "Cán bộ tuyên truyền", "h": "24/02/1964" }, { "n": "Mai Văn Lôi", "b": "", "e": "", "q": "Hòa Khánh Tây - Đức Hòa - Long An", "c": "", "h": "16/12/1970" }, { "n": "Trương Văn Thường", "b": "", "e": "16/05/1957", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "01/07/1971" }, { "n": "Lê Văn Đặng", "b": "1927", "e": "03/1960", "q": "Bình Hòa - Mộc Hóa - Long An", "c": "Đội viên du kích - Chiến sĩ", "h": "12/03/1969" }, { "n": "Lê Văn Chiến", "b": "1947", "e": "02/1961", "q": "Bình Hòa - Mộc Hóa - Long An", "c": "Đội viên du kích", "h": "27/04/1968" }, { "n": "Lê Văn Lưu", "b": "1944", "e": "08/03/1963", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Thượng sĩ", "h": "19/05/1964" }, { "n": "Bùi Văn Tính", "b": "", "e": "14/03/1969", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Nhân viên Công an huyện", "h": "05/05/1965" }, { "n": "Nguyễn Văn Sum", "b": "1940", "e": "06/04/1963", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "13/08/1971" }, { "n": "Hồ Văn Dũng", "b": "1944", "e": "01/1962", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Thượng sĩ", "h": "17/04/1967" }, { "n": "Lê Văn Bảo", "b": "1934", "e": "09/1955", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Đại đội trưởng", "h": "08/02/1960" }, { "n": "Lê Phước Nhật", "b": "1941", "e": "02/1960", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Du kích xã", "h": "18/04/1960" }, { "n": "Nguyễn Văn Đức", "b": "1941", "e": "07/1962", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung sĩ", "h": "16/07/1963" }, { "n": "Trương Văn Tho", "b": "1941", "e": "20/04/1964", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "Trung đội phó", "h": "15/01/1968" }, { "n": "Trần Văn Chính", "b": "1941", "e": "", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An", "c": "", "h": "16/01/1963" }, { "n": "Phan Văn Chỉnh", "b": "1913", "e": "07/08/1952", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An", "c": "Đội viên du kích", "h": "17/03/1953" }, { "n": "Lê Văn Danh", "b": "", "e": "18/02/1947", "q": "Soài Riêng - Cao Miên - Campuchia", "c": "Sơ cấp Đảng", "h": "10/05/1970" }], "me": [{ "n": "Nguyễn Thị Cẩm", "b": "1922", "q": "Tân Phước Tây - Tân Trụ - Long An" }, { "n": "Triệu Thị Huê", "b": "1917", "q": "Soài Hột - Mỹ Tho - Tiền Giang" }, { "n": "Trần Thị Vinh", "b": "1917", "q": "Vĩnh Kim - Tiền Giang" }, { "n": "Nguyễn Thị Quận", "b": "1913", "q": "Tân Lập - Tân Thạnh - Long An" }, { "n": "Đoàn Thị Vinh", "b": "1910", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An" }, { "n": "Dương Thị Chơi", "b": "1916", "q": "Tân Lập - Tân Thạnh - Long An" }, { "n": "Đoàn Thị Mười", "b": "1925", "q": "Tân Lập - Tân Thạnh - Long An" }, { "n": "Phan Thị Hoai", "b": "1906", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An" }, { "n": "Huỳnh Thị Vân", "b": "1925", "q": "Nhơn Ninh - Tân Thạnh - Long An" }, { "n": "Nguyễn Thị Chơi", "b": "1924", "q": "Nhơn Hòa Lập - Tân Thạnh - Long An" }, { "n": "Nguyễn Thị Nuôi", "b": "1923", "q": "Tân Lập - Tân Thạnh - Long An" }, { "n": "Bùi Thị Thời", "b": "1916", "q": "Nhơn Hòa Lập - Kiến Bình - Kiến Tường" }, { "n": "Bùi Thị Tài", "b": "1904", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An" }, { "n": "Trần Thị Lịch", "b": "1905", "q": "Nhơn Hòa Lập - Mộc Hóa - Long An" }, { "n": "Nguyễn Thị Chẩn", "b": "1937", "q": "Mỹ Phước Tây - Cai Lậy - Tiền Giang" }], "ah": [{ "n": "Lê Văn Trầm", "b": "1915", "q": "Tân Quí Đông - Châu Thành - Tiền Giang", "c": "Đại Đội Trưởng", "h": "11/06/1969" }] };
const LOGO = '';
const TABS = { ls: 'Liệt sĩ', me: 'Bà mẹ Việt Nam anh hùng', ah: 'Anh hùng lực lượng vũ trang' };
const SHORT = { ls: 'Liệt sĩ', me: 'Bà mẹ Việt Nam anh hùng', ah: 'Anh hùng LLVT' };
const FIELDS = { ls: [['q', 'Quê quán'], ['c', 'Chức vụ'], ['e', 'Nhập ngũ'], ['h', 'Hy sinh']], me: [['q', 'Quê quán']], ah: [['q', 'Quê quán'], ['c', 'Chức vụ'], ['h', 'Hy sinh']] };
const HOME = 'Nhơn Hòa Lập', DEFAULT_PAGE_SIZE = 24, STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z"/></svg>';
let tab = 'ls', pageSize = DEFAULT_PAGE_SIZE, currentPage = 1, cur = [];
const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const yearOf = v => { const m = (v || '').match(/(\d{4})\s*$/); return m ? +m[1] : 0 };
const dateKey = v => { const m = (v || '').match(/^(\d{2})\/(\d{2})\/(\d{4})$/); return m ? +(m[3] + m[2] + m[1]) : yearOf(v) * 10000 };
function mark(s, q) { if (!q) return esc(s); const n = norm(s), i = n.indexOf(q); if (i < 0 || n.length !== s.length) return esc(s); return esc(s.slice(0, i)) + '<mark>' + esc(s.slice(i, i + q.length)) + '</mark>' + esc(s.slice(i + q.length)) }
function life(r) { const b = r.b, d = yearOf(r.h); if (tab === 'me') return b ? 'Sinh năm ' + b : ''; if (b && d) return b + ' – ' + d; if (d) return 'Hy sinh năm ' + d; return b ? 'Sinh năm ' + b : '' }
function logos() { document.querySelectorAll('.logo').forEach(el => { if (LOGO) { el.classList.add('solid'); el.innerHTML = `<img src="${LOGO}" alt="Logo Chi đoàn cơ sở UBND xã Nhơn Hòa Lập">` } else el.innerHTML = '<span>Logo<br>Chi đoàn</span>' }) }
function tiles() {
    $('#tiles').innerHTML = Object.keys(TABS).map(k => `<button class="tile" data-k="${k}" aria-pressed="${k === tab}"><span class="num" data-t="${DATA[k].length}">0</span><span class="l">${SHORT[k]}</span></button>`).join('');
    document.querySelectorAll('.num').forEach(el => { const t = +el.dataset.t; if (reduce) { el.textContent = t; return } const s = performance.now(); (function f(n) { const p = Math.min(1, (n - s) / 900); el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f) })(s) })
}
function chart() {
    const P = [['Trước 1955', 0, 1954], ['1955 – 1964', 1955, 1964], ['1965 – 1975', 1965, 1975], ['Sau 1975', 1976, 9999]];
    const c = P.map(([l, a, b]) => [l, DATA.ls.filter(r => { const y = yearOf(r.h); return y && y >= a && y <= b }).length]), m = Math.max(...c.map(x => x[1])), k = c.reduce((s, x) => s + x[1], 0);
    $('#stat').innerHTML = `<p>Tính theo năm hy sinh của ${k}/${DATA.ls.length} liệt sĩ có ghi năm.</p>` + c.map(([l, n]) => `<div class="row"><span>${l}</span><span class="track"><i class="fill" data-w="${m ? n / m * 100 : 0}"></i></span><b>${n}</b></div>`).join('');
    const go = () => document.querySelectorAll('.fill').forEach(e => e.style.width = e.dataset.w + '%'); reduce ? (document.querySelectorAll('.fill').forEach(e => e.style.transition = 'none'), go()) : setTimeout(go, 300)
}
function renderTabs() { $('nav').innerHTML = Object.keys(TABS).map(k => `<button class="tab" role="tab" data-k="${k}" aria-selected="${k === tab}">${TABS[k]}<b>${DATA[k].length}</b></button>`).join('') }
function render() {
    const q = norm($('#q').value.trim()), home = $('#home').value, sk = $('#sort').value;
    cur = DATA[tab].filter(r => {
        const h = norm(r.q).startsWith(norm(HOME));
        if (home === 'in' && !h) return false;
        if (home === 'out' && h) return false;
        return !q || norm(r.n + ' ' + r.q).includes(q);
    });
    cur.sort((a, b) => sk === 'n' ? a.n.localeCompare(b.n, 'vi') : sk === 'b' ? ((+a.b || 9999) - (+b.b || 9999)) : (dateKey(a.h) || 99999999) - (dateKey(b.h) || 99999999));

    const totalPages = Math.max(1, Math.ceil(cur.length / pageSize));
    currentPage = Math.min(Math.max(1, currentPage), totalPages);
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, cur.length);
    const pageItems = cur.slice(start, end);

    $('#grid').innerHTML = pageItems.length ? pageItems.map((r, offset) => {
        const i = start + offset;
        const l = life(r);
        return `<li class="card" data-i="${i}"><h3>${mark(r.n, q)}</h3><p class="yrs">${l ? STAR + esc(l) : ''}</p><dl>` + FIELDS[tab].filter(f => f[0] !== 'e' && f[0] !== 'h' || tab === 'ah').map(([k, lb]) => {
            const v = r[k];
            return `<div><dt>${lb}</dt>${v ? `<dd>${k === 'q' ? mark(v, q) : esc(v)}</dd>` : '<dd class="na">Chưa có thông tin</dd>'}</div>`;
        }).join('') + '</dl><button class="more" type="button">Xem chi tiết</button></li>';
    }).join('') : '<li class="empty">Không tìm thấy kết quả. Hãy thử gõ ít chữ hơn hoặc kiểm tra lại họ tên.</li>';

    $('#count').textContent = `${cur.length} / ${DATA[tab].length} người`;
    const pagination = $('#pagination');
    const pageButtons = [];
    const addPage = (p) => pageButtons.push(`<button type="button" data-page="${p}" ${p === currentPage ? 'aria-current="page"' : ''}>${p}</button>`);
    if (totalPages <= 7) {
        for (let p = 1; p <= totalPages; p++) addPage(p);
    } else {
        addPage(1);
        if (currentPage > 3) pageButtons.push('<span aria-hidden="true">…</span>');
        const from = Math.max(2, currentPage - 1);
        const to = Math.min(totalPages - 1, currentPage + 1);
        for (let p = from; p <= to; p++) addPage(p);
        if (currentPage < totalPages - 2) pageButtons.push('<span aria-hidden="true">…</span>');
        addPage(totalPages);
    }

    pagination.innerHTML = `
                <div class="pagination-info">Hiển thị ${cur.length ? start + 1 : 0}–${end} / ${cur.length} người</div>
                <div class="page-size">
                    <label for="pageSize">Số người mỗi trang:</label>
                    <select id="pageSize">
                        <option value="5" ${pageSize === 5 ? 'selected' : ''}>5</option>
                        <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
                        <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
                        <option value="100" ${pageSize === 100 ? 'selected' : ''}>100</option>
                    </select>
                </div>
                <div class="pagination-controls">
                    <button type="button" data-page="${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? 'disabled' : ''} aria-label="Trang trước">‹</button>
                    ${pageButtons.join('')}
                    <button type="button" data-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Trang sau">›</button>
                </div>`;
}

function reset() { currentPage = 1; render() }

function openD(i) {

    const r = cur[i]; if (!r) return; const l = life(r);

    $('#dbody').innerHTML = `<h2>${esc(r.n)}</h2><p class="yrs">${l ? STAR + esc(l) : ''}</p><dl>` + [['b', 'Năm sinh']].concat(FIELDS[tab]).map(([k, lb]) => `<div><dt>${lb}</dt>${r[k] ? `<dd>${esc(r[k])}</dd>` : '<dd class="na">Chưa có thông tin</dd>'}</div>`).join('') + '</dl>';

    $('#dlg').showModal()

}

$('#q').oninput = reset; $('#home').onchange = reset; $('#sort').onchange = reset;

$('#pagination').onchange = e => {
    if (e.target.id === 'pageSize') {
        pageSize = Number(e.target.value) || DEFAULT_PAGE_SIZE;
        currentPage = 1;
        render();
    }
};
$('#pagination').onclick = e => {
    const button = e.target.closest('button[data-page]');
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.page) || 1;
    render();
};

$('nav').onclick = e => { const b = e.target.closest('.tab'); if (!b) return; tab = b.dataset.k; syncTiles(); renderTabs(); reset() };

$('#tiles').onclick = e => { const b = e.target.closest('.tile'); if (!b) return; tab = b.dataset.k; syncTiles(); renderTabs(); reset(); $('#danhsach').scrollIntoView() };

function syncTiles() { document.querySelectorAll('.tile').forEach(t => t.setAttribute('aria-pressed', t.dataset.k === tab)) }

$('#grid').onclick = e => { const c = e.target.closest('.card'); if (c) openD(+c.dataset.i) };

$('#dlg').onclick = e => { if (e.target === $('#dlg') || e.target.closest('.x')) $('#dlg').close() };

logos(); tiles(); chart(); renderTabs(); render();