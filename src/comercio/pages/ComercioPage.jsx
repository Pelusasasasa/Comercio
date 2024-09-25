import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ComercioLayout } from '../layout/ComercioLayout'
import { loadNumeros } from '../../store/numeros/thunks';

export const ComercioPage = () => {
  const state = useSelector( state => state );
  console.log(state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( loadNumeros() );
  }, [])

  return (
    <ComercioLayout>
      
    </ComercioLayout>
  )
}
