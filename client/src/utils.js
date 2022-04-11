const showPennies = (num) => {
    if (num === 0) return '0';
    const numStr = num + '';
    const firstStr = numStr.slice(0, numStr.length - 2);
    const secondStr = numStr.slice(numStr.length - 2);
    return `${firstStr}.${secondStr}`;
}

export {
    showPennies
}
