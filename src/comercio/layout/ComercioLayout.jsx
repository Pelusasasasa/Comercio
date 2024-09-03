import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { checking, startLogin } from "../../store/auth";

export const ComercioLayout = ({ children }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verificarUsuario = async(e) => {
    const section = e.target.parentNode.id;
    
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
        if (section === 'cliente') {
          navigate('/cliente/lista');
        }else{
          navigate('/servicio/lista');
        }
      }else{
        await Swal.fire('Error', 'Contraseña incorrecta', 'error');
      }

    };
  };

  return (
    <section className="container  hover:cursor-pointer flex justify-around w-full bg-orange-300 h-full">

        <div className="flex flex-col border border-black h-min p-2"  onClick={verificarUsuario} id="cliente">
            <img src="/clientes.jpg" alt="" className="w-52" />
            <h3 className="text-center font-bold text-2xl">Clientes</h3>
        </div>    

        <div className="flex flex-col border-black border h-min p-2" onClick={verificarUsuario} id="servicio">
            <img src="/Servicio.jpeg" alt="" className="w-52"/>
            <h3 className="text-center font-bold text-2xl">Servicio</h3>
        </div>    

    {children}

    </section>
  )
}
