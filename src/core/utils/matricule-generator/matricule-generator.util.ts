import * as crypto from 'crypto';

const CODE_LENGTH = 10;

export class MatriculeGenerate {
  generate(prefix = '', length: number = CODE_LENGTH) {
    const alpha = this.#alpha();
    const numeric = this.#numeric();

    const characters = alpha.concat(numeric);

    const code = this.#generateCodeFromArray(characters, length);

    if (prefix != null) {
      return `${prefix}${code}`;
    }

    return code;
  }

  #alpha() {
    return Array.from(Array(26), (_, index) => String.fromCharCode(65 + index));
  }
  #numeric() {
    return Array.from(Array(10), (_, index) => index.toString());
  }

  #generateCodeFromArray(characters: string[], length: number) {
    return Array.from(Array(length), () => {
      const randomIndex = crypto.randomBytes(1)[0] % characters.length;
      return characters[randomIndex];
    }).join('');
  }

  getCodeUnique(code: string, chain: string) {
    const mots = chain.split(' ');

    if (mots.length === 1) {
      const consonants = chain.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '');
      return `${code}-${consonants.toUpperCase()}`;
    } else {
      const initials = mots.map((mot) => mot[0]).join('');
      return `${code}-${initials.toUpperCase()}`;
    }
  }
}
