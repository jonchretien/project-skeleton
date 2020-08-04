const getThat = (...args) => args.reduce((a, b) => Number(a) + Number(b), 0);

export { getThat };
