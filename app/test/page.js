'use client';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/testSlice';

import s from './page.module.scss';

export default function Test() {
  const { value } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return (
    <main className={s.test}>
      <div className={s.container}>
        <h1>Тестовый счётчик</h1>
        <span className={s.count}>{value}</span>
        <div className={s.btns}>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </main>
  );
}
