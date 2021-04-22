export function getLetterColName(colNum: number, upperCase = true): string {
    const topLimit = 25;
    const isNumber = typeof(colNum) === 'number';
    if (!isNumber || !isFinite(colNum) || colNum < 0 || colNum > topLimit) {
        return '';
    }
    
    const charCodeDelta = 65; // 65: "A", 90: "Z"

    const normalizedLetterNumber = colNum + charCodeDelta;
    const resultColName =  String.fromCharCode(normalizedLetterNumber);

    if (!upperCase) {
        return resultColName.toLowerCase();
    }

    return resultColName;
}