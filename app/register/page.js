'use client';

import { InputLabel } from '@/components';
import s from './page.module.scss';
import { useState } from 'react';
import { inputs } from './inputs';

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  return (
    <main className={s.register}>
      <section className={s.topBlock}>Верхняя секция</section>
      <form className={s.form}>
        <div className={s.topForm}>
          <h2>Регистрация</h2>
          <div className={s.inputs}>
            {inputs.map(({ name, placeholder, type }) => (
              <InputLabel
                style="1/5"
                name={name}
                key={name}
                placeholder={placeholder}
                type={type}
                value={form[name]}
                setValue={(value) =>
                  setForm((form) => ({ ...form, [name]: value }))
                }
              />
            ))}
          </div>
          <label className={s.checkLabel}>
            <input type="checkbox" />
            <span>Я согласен на обработку персональных данных</span>
          </label>
          <a className={s.loginLink}>Уже есть аккаунт? Войдите!</a>
        </div>
        <button className={s.registerButton}>Регистрация</button>
      </form>
    </main>
  );
}
