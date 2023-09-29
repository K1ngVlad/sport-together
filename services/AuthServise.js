import { $api } from '@/http';

class AuthServise {
  static async login(email, password) {
    return $api.post('./login', { email, password });
  }

  static async register(
    firstName,
    secondName,
    email,
    password,
    repeatPassword
  ) {
    return $api.post('./register', {
      firstName,
      secondName,
      email,
      password,
      repeatPassword,
    });
  }

  static async logout() {
    return $api.post('./logout');
  }

  static async checkAuth() {
    return $api.get('./checkToken');
  }
}

export { AuthServise };
