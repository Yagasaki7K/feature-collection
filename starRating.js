function starRating(number) {
    const rating = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
    return rating(number);
}

export default starRating;