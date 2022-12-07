export abstract class IEnviromentConfigService {
  abstract getDatabaseType(): any;
  abstract getDatabaseConnString(): string;
  abstract getDatabaseName(): string;
  abstract getDatabasePort(): number;
  abstract getDatabasePassword(): string;
  abstract getDatabaseUsername(): string;
}
