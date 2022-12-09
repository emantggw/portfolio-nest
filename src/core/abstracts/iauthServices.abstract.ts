export abstract class IAuthServices {
  abstract validate(username: string, password: string): Promise<any>;
}
