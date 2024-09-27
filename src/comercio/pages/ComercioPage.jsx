import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { ComercioLayout } from '../layout/ComercioLayout'
import { loadNumeros } from '../../store/numeros/thunks';

export const ComercioPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( loadNumeros() );
  }, [])

  return (
    <ComercioLayout>
      
    </ComercioLayout>
  )
}
