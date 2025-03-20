import { MatriculeGenerate } from "./matricule-generator.util";

describe('MatriculeGenerate', () => {
  let matriculeGenerator: MatriculeGenerate;

  beforeEach(() => {
    matriculeGenerator = new MatriculeGenerate();
  });

  describe('generate', () => {
    it('should generate a matricule with the specified prefix and length', () => {
      const prefix = 'ABC';
      const length = 8;

      const result = matriculeGenerator.generate(prefix, length);

      expect(result).toContain(prefix);
      expect(result).toHaveLength(length + prefix.length);
    });

    it('should generate a matricule with default length and no prefix', () => {
      const result = matriculeGenerator.generate();

      expect(result).toHaveLength(10);
    });
  });

  describe('getCodeUnique', () => {
    it('should generate a unique code based on input code and chain', () => {
      const inputCode = '123';
      const inputChain = 'John Doe';

      const result = matriculeGenerator.getCodeUnique(inputCode, inputChain);

      expect(result).toContain(inputCode);
      expect(result).toContain('JD');
    });

    it('should handle single-word chain correctly', () => {
      const inputCode = '456';
      const inputChain = 'Alice';

      const result = matriculeGenerator.getCodeUnique(inputCode, inputChain);

      expect(result).toContain(inputCode);
      expect(result).toContain('456-LC');
    });

    it('should handle empty chain correctly', () => {
      const inputCode = '789';
      const inputChain = '';

      const result = matriculeGenerator.getCodeUnique(inputCode, inputChain);

      expect(result).toContain(inputCode);
      expect(result).toHaveLength(inputCode.length + 1); // Code + '-'
    });
  });
});
