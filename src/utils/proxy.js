export default class ProxyDB {
  constructor(DB_URL) {
    this.DB_URL = DB_URL;
  }

  async getAllData() {
    const requestUrl = this.DB_URL;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async getData(id) {
    const requestUrl = `${this.DB_URL}/${id}`;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async post(data) {
    const requestUrl = this.DB_URL;
    const method = 'POST';
    let response;

    await fetch(requestUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async put(data, id) {
    const requestUrl = `${this.DB_URL}/${id}`;
    const method = 'PUT';
    let response;

    await fetch(requestUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async delete(id) {
    const requestUrl = `${this.DB_URL}/${id}`;
    const method = 'DELETE';

    let response;

    await fetch(requestUrl, {
      method,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }
}
