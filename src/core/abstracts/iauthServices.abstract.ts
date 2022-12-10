export abstract class IAuthServices {
  abstract validate(email: string, password: string): Promise<any>;
  abstract login(userId: string): Promise<any>;
}
