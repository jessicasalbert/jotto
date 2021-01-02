import { getLetterMatchCount } from '../index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count in 0 case', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    })

    test('returns correct count in matching letters case', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    })

    test('returns correct count in duplicate letter case', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    })
})