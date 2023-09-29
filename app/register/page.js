import Link from 'next/link';

import s from './page.module.scss';

export default function Register() {
  return (
    <main className={s.register}>
      <div className={s.container}>
        <h1>Регистрация</h1>
        <p>Здесь пока что ничего нет {':('}</p>
        <Link href="./test">Проверить тестовый редусер</Link>
      </div>
    </main>
  );
}
