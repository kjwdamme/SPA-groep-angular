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

  get energyvalue(): number {
    return this._energyValue;
  }

  set energyvalue(value: number) {
    this._energyValue = value;
  }

  get alert_info(): string {
    return this._alertInfo;
  }

  set alert_info(value: string) {
    this._alertInfo = value;
  }
}
