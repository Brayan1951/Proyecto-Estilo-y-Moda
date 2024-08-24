import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'

export default function DatosCliente() {
  const {
    changeForm,resetForm, ...datos } = useForm({
      email: "",
      documento: "",
      celular: "",
      nombre: "",
      apellido: "",
      tarjeta: "",
      tarjeta_nombre: "",
      tarjeta_apellido: "",
      tarjeta_vencimiento_mes: "",
      tarjeta_vencimiento_anio: "",
      tarjeta_codigo: "",
      entrega:""
    })

  const [errors, setErrors] = useState({})
  const ValidarForm = () => {
    let formError = {}

    const { email,
      documento,
      celular,
      nombre,
      apellido,
      tarjeta,
      tarjeta_nombre,
      tarjeta_apellido,
      tarjeta_vencimiento_mes,
      tarjeta_vencimiento_anio,
      tarjeta_codigo,entrega } = datos


    if (!email
      || !documento
      || !celular
      || !nombre
      || !apellido
      || !tarjeta
      || !tarjeta_nombre
      || !tarjeta_apellido
      || !tarjeta_vencimiento_mes
      || !tarjeta_vencimiento_anio
      || !tarjeta_codigo || !entrega
    ) {
      formError.datos = "Por favor completar todos los datos"
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    const documentoRegex = /^\d{8,10}$/;
    const celularRegex = /^\d{9}$/;
    const tarjetaRegex = /^\d{16}$/;




    
    if (!entrega) {
      
      formError.entrega = "Debes seleccionar una dirección de entrega";
    }
    if (!emailRegex.test(email)) {
      formError.email = "El correo electrónico no es válido";
    }
    if (!documento) {
      formError.documento = "El documento es obligatorio";
    } else if (!documentoRegex.test(documento)) {
      formError.documento = "El documento debe tener entre 8 y 10 dígitos";
    }

    // Validar número de celular
    if (!celular) {
      formError.celular = "El número de celular es obligatorio";
    } else if (!celularRegex.test(celular)) {
      formError.celular = "El celular debe tener 9 dígitos";
    }

    // Validar tarjeta de crédito
    if (!tarjeta) {
      formError.tarjeta = "El número de tarjeta es obligatorio";
    } else if (!tarjetaRegex.test(tarjeta)) {
      formError.tarjeta = "El número de tarjeta debe tener 16 dígitos";
    }














    setErrors(formError)
    return Object.keys(formError).length === 0;

  }

  const VerificarDatos = () => {
    if (ValidarForm()) {
      console.log("Formulario válido:", datos);
      // resetForm()
      // Realiza la acción deseada, por ejemplo, enviar los datos
    } else {
      console.log("Errores en el formulario:", errors);
    }




  }
  const GuardaDatos = () => {
    // console.log(datos);
    VerificarDatos()
    // ValidarForm()


  }


  return (
    <div className="carrito-datos">
      <div action="">

        <div className="form-group-all">

          <label>Correo Electronico</label>
          <input name='email' onChange={changeForm} type="email" />
            {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nro DNI/Pasaporte/Cedula</label>
            <input name='documento' onChange={changeForm} type="text" />
            {errors.documento && <span className="error-message">{errors.documento}</span>}
          </div>
          <div className="form-half">
            <label>Nro Celular</label>
            <input name='celular' onChange={changeForm} type="text" />
            {errors.celular && <span className="error-message">{errors.celular}</span>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nombre</label>
            <input name='nombre' onChange={changeForm} type="text" />
          </div>
          <div className="form-half">
            <label>Apellido</label>
            <input name='apellido' onChange={changeForm} type="text" />
          </div>
        </div>
        <div className="form-selects">
          <label>Puntos de Entrega</label>
          <select name='entrega' className="select-box"  onChange={changeForm}>
            <option value="" disabled selected hidden>Seleccionar punto de entrega</option>

            <option value="puente pienda">Puente Piedra</option>
            <option value="los olivos">Los Olivos</option>
            <option value="chorrillos">Chorrilos</option>
          </select>
          {errors.entrega && <span className="error-message">{errors.entrega}</span>}
        </div>

      </div>
      <div>

        <div className="form-group-all">

          <label>Nro de Tarjeta</label>
          <input name='tarjeta' onChange={changeForm} type="text" />
          {errors.tarjeta && <span className="error-message">{errors.tarjeta}</span>}

        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nombre</label>
            <input name='tarjeta_nombre' onChange={changeForm} type="text" />
          </div>
          <div className="form-half">
            <label>Apellido</label>
            <input name='tarjeta_apellido' onChange={changeForm} type="text" />
          </div>
        </div>





        <div className="form-group">
          <div className="form-half">
            <label>Fecha de vencimiento de la tarjeta</label>
            <input name='tarjeta_vencimiento_mes' onChange={changeForm} type="text" />
          </div>
          <div className="form-half">
            <label>(MM/YY)</label>
            <input name='tarjeta_vencimiento_anio' onChange={changeForm} type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Codigo de seguridad</label>
            <input name='tarjeta_codigo' onChange={changeForm} type="text" />
          </div>
        </div>

        <div className="general-error-message">
          {errors.datos && <span className="error-message">{errors.datos}</span>}
        </div>
      </div>


      <button onClick={() => GuardaDatos()} className='submit-button'>Guardar</button>

    </div>
  )
}
