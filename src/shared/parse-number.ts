export const parseNumber = (value: any, def?: number): number => {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return def !== undefined ? def : 0;
    } else {
        return parsedValue;
    }
};
