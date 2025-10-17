import { UserDataBuilder } from "@/users/domain/entities/testing/helpers/user-data-builder";
import { UserRules, UserValidator, UserValidatorFactory } from "@/users/domain/entities/validators/user.validator";

let sut: UserValidator

describe ('UserValidator unit tests', () => {
  beforeEach(()=>{
    sut = UserValidatorFactory.create();
  });

  describe('Name field', () => {

    //Teste dos casos invalidos
    it('Invalidation cases for name field', () => {
      let isValid = sut.validate(null as any);

      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(
        [
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters'
      ],
      )

      isValid = sut.validate({
        ... UserDataBuilder({}),
        name: '' as any,
      });

      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(
        ['name should not be empty'],
      )

      isValid = sut.validate({
        ... UserDataBuilder({}),
        name: 10 as any,
      });

      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(
        ['name must be a string', 'name must be shorter than or equal to 255 characters'],
      )

      isValid = sut.validate({
        ... UserDataBuilder({}),
        name: 'a'.repeat(256),
      });

      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(
        ['name must be shorter than or equal to 255 characters'],
      )
    })

    //Teste dos casos validos
    it('Valid case for name field', () => {
      const props = UserDataBuilder({});

      const isValid = sut.validate(props);

      expect(isValid).toBeTruthy();
      expect(sut.validateData).toStrictEqual(new UserRules(props));

    })
  });

})
