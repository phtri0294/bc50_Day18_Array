// Hàm: Dom tới thẻ
function domID(id) {
    return document.getElementById(id);
};

// Hàm: hiển thị mảng trong thẻ
function displayArray(id, array) {
    // // OUTPUT
    var outPut = '';
    // // PROGRESS
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            outPut += array[i];
        }
        else {
            outPut += ', ' + array[i];
        }
    }
    // HIỂN THỊ KẾT QUẢ
    domID(id).innerHTML = '[' + outPut + ']';
};

// Hàm: đổi chỗ hai giá trị trong mảng
function swapValues(index1, index2, array) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

// Hàm: sắp xếp trên 1 hàng tăng dần trong mảng
function sortArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swapValues(j, j + 1, array);
            }
        }
    }
};

