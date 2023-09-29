import Link from 'next/link';

import s from './NoAuth.module.scss';

const NoAuth = () => {
  return (
    <main className={s.noAuth}>
      <div className={s.container}>
        <h1>Пользователь не авторизован!</h1>
        <Link href="./login">Войти</Link>
        <Link href="./register">Зарегестрироваться</Link>
      </div>
    </main>
  );
};

export { NoAuth };
