import { validateSync } from "class-validator";
import { FieldsErrors, ValidatorFieldsInterface } from "./validator-fields.interface";

export abstract class ClassValidatorFields<PropsValidated> implements ValidatorFieldsInterface<PropsValidated>{

  errors: FieldsErrors = null;
  validateData: PropsValidated = null;

  validate(data: any): boolean {
    const errorsReceived = validateSync(data);

    if(errorsReceived.length){
      this.errors = {};

      for(const error of errorsReceived){
        const field = error.property;
        this.errors[field] = Object.values(error.constraints);
      }
    } else {
      this.validateData = data;
    }

    return !errorsReceived.length;
  }
}
