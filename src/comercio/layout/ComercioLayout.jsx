import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { checking, startLogin } from "../../store/auth";

export const ComercioLayout = ({ children }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verificarUsuario = async() => {

    dispatch( checking() );

    const {isConfirmed, value} = await Swal.fire({
      title: 'Contraseña?',
      input: 'password',
      inputPlaceholder: 'Ingrese su contraseña',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
    });

    if( isConfirmed ){

      const { nombre } = await dispatch( startLogin( value ) );

      if (nombre) {
        navigate('/cliente/lista');
      }else{
        await Swal.fire('Error', 'Contraseña incorrecta', 'error');
      }

    };
  };

  return (
    <section className="border container border-black w-40 hover:cursor-pointer">

        <div className="flex flex-col" onClick={verificarUsuario}>
            <img src="/clientes.jpg" alt="" />
            <h3 className="text-center font-bold text-2xl">Clientes</h3>
        </div>    

    {children}

    </section>
  )
}
