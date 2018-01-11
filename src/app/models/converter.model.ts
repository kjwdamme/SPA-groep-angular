import {EnergyValue} from './energyvalue.model';

export class Converter {

  private _serialNumber: string;
  private _deviceName: string;
  private _online: boolean;
  private _location: string;
  private _deviceModel: string;
  private _displaySoftwareVersion: string;
  private _masterControlSoftwareVersion: string;
  private _slaveControlVersion: string;
  private _energyValues: EnergyValue[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


  get serialNumber(): string {
    return this._serialNumber;
  }

  set serialNumber(value: string) {
    this._serialNumber = value;
  }

  get deviceName(): string {
    return this._deviceName;
  }

  set deviceName(value: string) {
    this._deviceName = value;
  }

  get online(): boolean {
    return this._online;
  }

  set online(value: boolean) {
    this._online = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get deviceModel(): string {
    return this._deviceModel;
  }

  set deviceModel(value: string) {
    this._deviceModel = value;
  }

  get displaySoftwareVersion(): string {
    return this._displaySoftwareVersion;
  }

  set displaySoftwareVersion(value: string) {
    this._displaySoftwareVersion = value;
  }

  get masterControlSoftwareVersion(): string {
    return this._masterControlSoftwareVersion;
  }

  set masterControlSoftwareVersion(value: string) {
    this._masterControlSoftwareVersion = value;
  }

  get slaveControlVersion(): string {
    return this._slaveControlVersion;
  }

  set slaveControlVersion(value: string) {
    this._slaveControlVersion = value;
  }

  get energyValues(): EnergyValue[] {
    return this._energyValues;
  }

  set energyValues(value: EnergyValue[]) {
    this._energyValues = value;
  }
}
