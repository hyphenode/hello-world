export const mostRepeated = (arr: number[]) => {
    const map: Record<number, number> = {};
    for (const x of arr) {
        if (!map[x]) {
            map[x] = 1;
        } else {
            map[x]++;
        }
    }

    let [y_key, y_value] = [0, 0];
    for (const [key, value] of Object.entries(map)) {
        if (value > y_value) {
            y_key = +key;
        }
    }

    return y_key;
}; 