export default class RandomService {
  _apiBase = 'https://randomuser.me/api/?results=50';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  /**
   * @param {string} gender - enumerator: male, female
   */
  getGender = async (gender) => {
    const search = gender.male ? 'male' : 'female'

    const res = await this.getResource(`&gender=${search}`);
    return res.results
      .map(this._transformPerson);
  }

  /**
   *
   * @param {string} nat - enumerator : AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US
   */
  getNationality = async (nat = 'US') => {
    const res = await this.getResource(`&nat=${nat}`);
    return res.results
      .map(this._transformPerson);
  }

  /**
   *
   * @param {string} gender - enumerator: male, female
   * @param {string} nat - enumerator : AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US
   */
  getPeopleByGN = async (gender = 'female', nat = 'US') => {
    const res = await this.getResource(`&gender=${gender}&nat=${nat}`);
    return res.results
      .map(this._transformPerson);
  }

  getPeople = async (filter) => {

    let requestString = '';

    if (filter) {
      const mode = {
        male: filter.gender.male ? '&gender=male' : false,
        female: filter.gender.female ? '&gender=female' : false,
        nationality: filter.nat ? `&nat=${filter.nat}` : false,
      }

      requestString = Object.keys(mode)
        .reduce((baseStr, key) => {
          if (mode[key]) {
            return baseStr + mode[key]
          }
          return baseStr;
        }, "")

    }

    const res = await this.getResource(requestString)

    return res.results
      .map(this._transformPerson);
  }

  date = new Date().getTime();

  _transformPerson = (person) => {
    return {
      id: `${person.login.uuid}`,
      name: `${person.name.first} ${person.name.last}`,
      title: person.name.title,
      age: person.dob.age,
      phone: person.cell,
      email: person.email,
      username: person.login.username,
      address: `${person.location.country} ${person.location.city}`,
      nationality: person.nat,
      gender: person.gender,
      img: {
        large: person.picture.large,
        medium: person.picture.medium,
        small: person.picture.thumbnail
      }
    }
  }
}