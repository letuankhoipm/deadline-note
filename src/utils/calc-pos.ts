export default function calcPosition(prevPos: string, nextPos: string): string {
    let p = 0;
    let n = 0;
    let pos: number;
    let str: string;
    for (pos = 0; p === n; pos++) {
        p = pos < prevPos.length ? prevPos.charCodeAt(pos) : 96;
        n = pos < nextPos.length ? nextPos.charCodeAt(pos) : 123;
    }

    str = prevPos.slice(0, pos - 1);
    if (p === 96) {
        while (n === 97) {
            n = pos < nextPos.length ? nextPos.charCodeAt(pos++) : 123;
            str += 'a';
        }
        if (n === 98) {
            str += 'a';
            n = 123;
        }
    } else if (p + 1 === n) {
        str += String.fromCharCode(p);
        n = 123;
        while ((p = pos < prevPos.length ? prevPos.charCodeAt(pos++) : 96) === 122) {
            str += 'z';
        }
    }
    return str + String.fromCharCode(Math.ceil((p + n) / 2));
}