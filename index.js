const randomNumberGenerator = (min=0, max=100) => {
    return Math.round(Match.random() * (max-min) + max);
}

export default randomNumberGenerator;