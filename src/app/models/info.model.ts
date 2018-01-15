export class Info {

  private _id: string;
  private _energyValue: number;
  private _alertInfo: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get energyValue(): number {
    return this._energyValue;
  }

  set energyValue(value: number) {
    this._energyValue = value;
  }

  get alertInfo(): string {
    return this._alertInfo;
  }

  set alertInfo(value: string) {
    this._alertInfo = value;
  }
}
