export const require = (values) => {
    if (values) return undefined;

    return 'required';
}

export const maxLengthSymbols = (max) => (values) => {
    if (values && values.length > max) return `maximum is ${max}`;

    return undefined
}
