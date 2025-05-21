import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../../testing/helpers/user-data-builder';

describe('UserEntity unit tests', ()=>{

  let props: UserProps;
  let sut: UserEntity;

  beforeEach(()=>{
    props = UserDataBuilder({});

    sut = new UserEntity(props);
  });

  //Teste do construtor
  it('Constructor method', ()=>{
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  })

  //Testes dos Getters e Setters
  it('Getter of name field', ()=>{
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  })

  it('Setter of name field', ()=>{
    sut['name'] = 'other name';

    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  })

  it('Getter of email field', ()=>{
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  })

  it('Getter of password field', ()=>{
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  })

  it('Setter of name field', ()=>{
    sut['password'] = '12345';

    expect(sut.props.password).toEqual('12345');
    expect(typeof sut.props.password).toBe('string');
  })

  it('Getter of createdAt field', ()=>{
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  })

  //Testes dos metodos do comportamento de dominio
  it('Should update a user', ()=>{
    sut.update('other name');

    expect(sut.props.name).toEqual('other name');
  })

  it('Should update the password field', ()=>{
    sut.updatePassword('12345');

    expect(sut.props.password).toEqual('12345');
  })
})
