'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '@/store/authSlice';
import { NoAuth } from '@/components';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  // const { isAuth } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     dispatch(checkAuth());
  //   }
  // }, [dispatch]);
  return <>{children}</>;
  // return <>{isAuth ? children : <NoAuth />}</>;
};

export { AuthLayout };
