import {Info} from './info.model';

export class EnergyValue {

  private _id: string;
  private _converterId: string;
  private _timestamp: Date;
  private _info: Info;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get converterId(): string {
    return this._converterId;
  }

  set converterId(value: string) {
    this._converterId = value;
  }

  get timestamp(): Date {
    return this._timestamp;
  }

  set timestamp(value: Date) {
    this._timestamp = value;
  }

  get info(): Info {
    return this._info;
  }

  set info(value: Info) {
    this._info = value;
  }
}
