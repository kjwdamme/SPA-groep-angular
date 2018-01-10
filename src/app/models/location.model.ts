import {Converter} from './converter.model';
export class Location {

  public _id: string;
  private _name: string;
  private _street: string;
  private _houseNumber: number;
  private _city: string;
  private _zipCode: string;
  private _country: string;
  private _owner: string;
  private _installationDate: Date;
  private _installer: string;
  private _contactPerson: string;
  private _location: Converter[];


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  // get id(): string {
  //   return this._id;
  // }
  //
  // set id(value: string) {
  //   this._id = value;
  // }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get houseNumber(): number {
    return this._houseNumber;
  }

  set houseNumber(value: number) {
    this._houseNumber = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }

  get installationDate(): Date {
    return this._installationDate;
  }

  set installationDate(value: Date) {
    this._installationDate = value;
  }

  get installer(): string {
    return this._installer;
  }

  set installer(value: string) {
    this._installer = value;
  }

  get contactPerson(): string {
    return this._contactPerson;
  }

  set contactPerson(value: string) {
    this._contactPerson = value;
  }

  get location(): Converter[] {
    return this._location;
  }

  set location(value: Converter[]) {
    this._location = value;
  }
}
