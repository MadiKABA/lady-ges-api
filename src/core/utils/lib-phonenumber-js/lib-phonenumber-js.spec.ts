import { IsPhoneNumberConstraint } from './lib-phonenumber-js';

describe('IsPhoneNumberConstraint', () => {
  it('should be defined', () => {
    expect(new IsPhoneNumberConstraint()).toBeDefined();
  });
});
