import Link from 'next/link';

import s from './not-found.module.scss';

export default function NotFound() {
  return (
    <main className={s.notFound}>
      <div className={s.container}>
        <h1>404 Страница не найдена!</h1>
        <p>Вероятно, вы потерялись</p>
        <Link href="./home">Перейти на главную страницу</Link>
      </div>
    </main>
  );
}
