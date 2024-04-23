export async function* generateBlockRanges(startBlock: number, endBlock: number, step: number = 10000) {
    let fromBlock = startBlock;
    let toBlock = fromBlock + step;

    while(fromBlock < endBlock) {
        yield { fromBlock, toBlock: Math.min(toBlock, endBlock) };
        fromBlock = toBlock + 1;
        toBlock += step;
    }
}

export function scientificToDecimal(scientificNotation: number) {
    const parts = scientificNotation.toString().split('e+');
    const base = parts[0].replace('.', '');
    const power = parseInt(parts[1], 10);

    let result = base;
    for (let i = 0; i < power; i++) {
        result += '0';
    }

    return result;
}

const scientificNotation = 4.256019729263741e+22;
const stringNumber = scientificToDecimal(scientificNotation);