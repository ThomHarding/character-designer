export function makeStatsString(headCount, middleCount, bottomCount) {
    if (headCount === 1) {
        headCount += ' time';
    } else {
        headCount += ' times';
    } if (middleCount === 1) {
        middleCount += ' time';
    } else {
        middleCount += ' times';
    } if (bottomCount === 1) {
        bottomCount += ' time';
    } else {
        bottomCount += ' times';
    }
    return 'You clicked on the head ' + headCount + ', on the middle ' + middleCount + ', and on the bottom ' + bottomCount + '. And everybody loves your character\'s catchphrases.';
}