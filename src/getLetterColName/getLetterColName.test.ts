import { getLetterColName as sut } from './getLetterColName'

describe('getLetterColName', () => {
    it('should return A for 0 number', () => {
        expect(sut(0)).toBe('A');
    });

    it('should return Z for 25 number', () => {
        expect(sut(25)).toBe('Z');
    });

    describe('when invalid input', () => {
        it('should return empty string for not number value', () => {
            expect(sut(null)).toBe('');
        });

        it('should return empty string for NaN', () => {
            expect(sut(NaN)).toBe('');
        });
    
        it('should return empty string for Infinity', () => {
            expect(sut(Infinity)).toBe('');
        });
    
        it('should return empty string for -Infinity', () => {
            expect(sut(-Infinity)).toBe('');
        });

        it('should return empty string for negative value', () => {
            expect(sut(-1)).toBe('');
        });

        it('should return empty string for negative value', () => {
            expect(sut(-1)).toBe('');
        });

        it('should return empty string for values more than top limit', () => {
            expect(sut(26)).toBe('');
        });
    });

    describe('when loweCase', () => {
        let upperCase: boolean;

        beforeEach(() => {
            upperCase = false;
        });

        it('should return Z for 25 number', () => {
            expect(sut(25, upperCase)).toBe('z');
        });
    });

    it('fail', () => {
        expect(true).toBe(false);
    });

});