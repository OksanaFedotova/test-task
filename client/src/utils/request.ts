class Request {
  host: string;
  constructor() {
    this.host = 'http://localhost:8080';
  }
  getCities = async () => {
    return await fetch(`${this.host}/cities`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  getCity = async (id: string) => {
    return await fetch(`${this.host}/cities/${id}`).then((res) => res.json());
  };
  createCity = async (data: string) => {
    return await fetch(`${this.host}/cities`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  updateCity = async (data: string, id: string) => {
    return await fetch(`${this.host}/cities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  deleteCity = async (id: string) => {
    return await fetch(`${this.host}/cities/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  };
}

const request = new Request();
export default request;
