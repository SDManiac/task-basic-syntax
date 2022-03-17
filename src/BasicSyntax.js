export function romanToInteger(str) {
    let result = 0;
    let a = 0;
    let b = 0;
    let a2;
    for (let i = 0; i < str.length; i++) {
        a2 = a;
        switch (str[i]) {
            case 'I':
                a = 1;
                break;
            case 'V':
                a = 5;
                break;
            case 'X':
                a = 10;
                break;
            case 'L':
                a = 50;
                break;
            case 'C':
                a = 100;
                break;
            case 'D':
                a = 500;
                break;
            case 'M':
                a = 1000;
                break;
        }
        if (a > a2) b = -2 * a2;
        result = result + b + a;
        b = 0;
    }
    return result;
}
