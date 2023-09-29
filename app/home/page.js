import Link from 'next/link';

import s from './page.module.scss';

export default function Home() {
  return (
    <main className={s.home}>
      <div className={s.container}>
        <h1>Домашняя страница</h1>
        <p>Здесь пока что ничего нет {':('}</p>
        <Link href="./test">Проверить тестовый редусер</Link>
      </div>
    </main>
  );
}
