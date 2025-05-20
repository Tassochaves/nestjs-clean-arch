import { UserDataBuilder } from '@/users/domain/entities/testing/helpers/user-data-builder';
import { UserProps, UserEntity } from '@/users/domain/entities/user.entity';
import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
}
//classe dublê
class StubEntity extends Entity<StubProps>{}

describe('Entity unit tests', ()=>{

  it('Should set props and id', ()=>{
    const props = { prop1: 'value1', prop2: 15};
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  })

  it('Should accept a valid uuid', ()=>{
    const props = { prop1: 'value1', prop2: 15};
    const id = '43503e8f-a854-4fcc-9f3a-6f347faf28e9';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  })

})
