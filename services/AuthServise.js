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

  static async logout(email, password) {
    return $api.post('./logout');
  }

  static async checkAuth(token) {
    return $api.post('./checkToken', { token });
  }
}

export { AuthServise };
