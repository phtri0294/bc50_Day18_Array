// INPUT: Khai báo một mảng để lưu trữ các số nguyên
var numbers = [];
// <!-- =================================================================== -->
// INPUT N: Thêm số n vào mảng
domID('btnThemSoN').onclick = function () {
    // INPUT
    var nhapSoN = Number(domID('nhapSoN').value);
    numbers.push(nhapSoN);
    // // HIỂN THỊ KẾT QUẢ
    displayArray('themSoN', numbers);
    domID('themSoN').innerHTML = 'Mảng: ' + domID('themSoN').innerHTML;
};

// <!-- =================================================================== -->
// Bài 1: Hàm tính tổng số nguyên dương
domID('btnTinhTongSoDuong').onclick = function () {
    // OUTPUT
    var sum_positive = 0;
    // PROGRESS
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum_positive += numbers[i];
        }
    }
    // HIỂN THỊ KẾT QUẢ
    domID('tinhTongSoDuong').innerHTML = 'Tổng số dương: ' + sum_positive;
};

// <!-- =================================================================== -->
// Bài 2: Hàm đếm số nguyên dương
domID('btnDemSoDuong').onclick = function () {
    // OUTPUT
    var count_positive = 0;
    // PROGRESS
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count_positive++;
        }
    }
    // HIỂN THỊ KẾT QUẢ
    domID('demSoDuong').innerHTML = 'Số lượng số dương: ' + count_positive;
};

// <!-- =================================================================== -->
// Bài 3: Hàm tìm số nhỏ nhất
domID('btnTimSoNhoNhat').onclick = function () {
    // OUTPUT
    var min = numbers[0];
    // PROGRESS
    if (numbers.length === 0) {
        return 0; // Trả về 0 nếu mảng rỗng
    }
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    // HIỂN THỊ KẾT QUẢ
    domID('timSoNhoNhat').innerHTML = 'Số nhỏ nhất: ' + min;
};

// <!-- =================================================================== -->
// Bài 4: Hàm tìm số dương nhỏ nhất
domID('btnTimSoDuongNhoNhat').onclick = function () {
    // OUTPUT
    var min_positive = null;// Giả sử không có số dương
    // PROGRESS
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            if (min_positive === null || numbers[i] < min_positive) {
                min_positive = numbers[i];
            }
        }
    }
    // HIỂN THỊ KẾT QUẢ
    if (min_positive !== null) {
        domID('timSoDuongNhoNhat').innerHTML = 'Số dương nhỏ nhất: ' + min_positive;
    } else {
        domID('timSoDuongNhoNhat').innerHTML = 'Không có số dương nhỏ nhất';
    }
};

// <!-- =================================================================== -->
// Bài 5: Hàm tìm số chẵn cuối cùng
domID('btnTimSoChanCuoiCung').onclick = function () {
    // OUTPUT
    var last_even = null; // Giả sử không có số chẵn
    // PROGRESS
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            last_even = numbers[i];
        }
    }
    // HIỂN THỊ KẾT QUẢ
    if (last_even !== null) {
        domID('timSoChanCuoiCung').innerHTML = 'Số chẵn cuối cùng: ' + last_even;
    } else {
        domID('timSoChanCuoiCung').innerHTML = 'Không có số chẵn';
    }
};

// <!-- =================================================================== -->
// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
domID('btnDoiCho').onclick = function () {
    // INPUT
    var position1 = Number(domID('nhapViTriSo1').value);
    var position2 = Number(domID('nhapViTriSo2').value);
    // PROGRESS 
    if (position1 >= 0 && position1 < numbers.length && position2 >= 0 && position2 < numbers.length) {
        swapValues(position1, position2, numbers);
        // HIỂN THỊ KẾT QUẢ
        displayArray('doiCho', numbers);
        domID('doiCho').innerHTML = 'Mảng sau khi đổi chỗ: ' + domID('doiCho').innerHTML;
    } else {
        alert('Vị trí không hợp lệ');
    }
};

// <!-- =================================================================== -->
// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
domID('btnSapXepTangDan').onclick = function () {
    sortArray(numbers);
    // HIỂN THỊ KẾT QUẢ:
    displayArray('sapXepTangDan', numbers);
    domID('sapXepTangDan').innerHTML = 'Mảng sau khi sắp xếp: ' + domID('sapXepTangDan').innerHTML;
};

// <!-- =================================================================== 
// Bài 8: Tìm số nguyên tố đầu tiên trong mảng
domID('btnTimSoNguyenToDauTien').onclick = function () {
    //OUTPUT
    var primeNumberFound = false;
    var firstPrimeNumber;
    //PROGRESS
    for (var i = 0; i < numbers.length; i++) {
        var isPrime = true;

        for (var j = 2; j <= Math.sqrt(numbers[i]); j++) {
            if (numbers[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && numbers[i] > 1) {
            primeNumberFound = true;
            firstPrimeNumber = numbers[i];
            break;
        }
    }
    //HIỂN THỊ KẾT QUẢ
    if (primeNumberFound) {
        domID('timSoNguyenToDauTien').innerHTML = 'Số nguyên tố đầu tiên: ' + firstPrimeNumber;
    } else {
        domID('timSoNguyenToDauTien').innerHTML = 'Không có số nguyên tố';
    }
};

// <!-- =================================================================== --> 
// Bài 9: Nhập mảng số thực và đếm số nguyên
var realNumbers = [];
// Thêm Số Thực hoặc số Nguyên
domID('btnThemSoNguyen').onclick = function () {
    // INPUT
    var nhapSoNguyen = Number(domID('nhapSoNguyen').value);
    realNumbers.push(nhapSoNguyen);
    // // HIỂN THỊ KẾT QUẢ
    displayArray('themSoNguyen', realNumbers);
    domID('themSoNguyen').innerHTML = 'Mảng mới chứa số thực: ' + domID('themSoNguyen').innerHTML;

};

// Đếm Số Nguyên
domID('btnDemSoNguyen').onclick = function () {
    var integerCount = 0;
    for (var i = 0; i < realNumbers.length; i++) {
        if (Number.isInteger(realNumbers[i])) {
            integerCount++;
        }
    }
    domID('demSoNguyen').innerHTML = 'Số lượng số nguyên: ' + integerCount;
};

// <!-- =================================================================== -->
// Bài 10: So sánh số lượng số dương và số lượng số âm
domID('btnSoSanh').onclick = function () {
    var positiveCount = 0;
    var negativeCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        }
    }
    if (positiveCount > negativeCount) {
        domID('soSanh').innerHTML = 'Số lượng số dương nhiều hơn số lượng số âm';
    } else if (positiveCount < negativeCount) {
        domID('soSanh').innerHTML = 'Số lượng số âm nhiều hơn số lượng số dương';
    } else {
        domID('soSanh').innerHTML = 'Số lượng số dương bằng số lượng số âm';
    }
};

