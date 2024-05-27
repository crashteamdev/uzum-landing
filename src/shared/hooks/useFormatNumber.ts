export const formatNumber = (number: number | undefined) => {
    return number?.toLocaleString("ru-RU", {
        maximumFractionDigits: 0,
    });
};