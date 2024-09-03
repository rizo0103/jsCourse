"use strict";

// 1;
function calculateVolumeAndArea(val) {
    if (typeof(val) === 'number' && Math.round(val) === val && val > 0) {
        return `Объем куба: ${val * val * val}, площадь всей поверхности: ${6 * val * val}`; 
    } else {
        return 'При вычислении произошла ошибка';
    }
}

// 2;

function getCoupeNumber(number) {
    if (number === 0 || number > 36) {
        return "Таких мест в вагоне не существует";
    } else if (number < 0 || typeof(number) != 'number' || Math.round(number) != number) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else {
        return Math.ceil(number / 4);
    }
}

