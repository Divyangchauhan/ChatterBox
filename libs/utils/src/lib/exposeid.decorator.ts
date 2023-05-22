import { ExposeOptions, Transform, TransformFnParams } from "class-transformer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ExposeId = (options?: ExposeOptions) =>
((target: object, propertyKey: string) => {
  Transform((params: TransformFnParams) => params.obj[propertyKey])(target, propertyKey);
});