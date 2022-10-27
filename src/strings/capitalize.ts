export const capitalize = (str: string) => {
    return str.split(" ").map(s => {
        const [f, ...rest] = s;
        return [f.toUpperCase(), ...rest].join("");
    }).join(" ");
};

export const uppercase = (s: string) => s.toUpperCase();