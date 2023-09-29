import Link from 'next/link';

import s from './page.module.scss';

export default function Login() {
  return (
    <main className={s.login}>
      <div className={s.container}>
        <h1>Вход</h1>
        <p>Здесь пока что ничего нет {':('}</p>
        <Link href="./test">Проверить тестовый редусер</Link>
      </div>
    </main>
  );
}
