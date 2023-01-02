import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../shared/services/api";
import { fileUpload } from "../shared/services/apiFile";
import "./AddCandidate.scss";
import { FaUpload } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AddCandidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    const result = await API.post("candidates/create", formData);
    console.log(result);
  };

  const [files, setFiles] = useState("");
  const addFiles = (e) => {
    setFiles(e.target.files[0]);
  };

  const uploadFile = async () => {
    const newForm = new FormData();
    newForm.append("file", files);
    await fileUpload(newForm);
    console.log(" new form ", newForm);
  };

  const navigateTo = useNavigate();

  return (
    <div className="cont-form">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="cont-title">
        <h2>Añadir Candidato</h2>
        <button onClick={()=>navigateTo('/')}>Inicio</button>
      </div>
        
        <div className="cont-inputs">
          <div >
            <p>Nombre Candidato</p>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Introduce tu nombre, por favor",
                minLength: {
                  value: 2,
                  message: "El nombre tiene que ser mas largo",
                },
              })}
            />
          </div>
          <div>
            <p>Apellidos Candidato</p>
            <input
              type="text"
              name="lastName"
              {...register("lastName", {
                required: "Introduce tu apellido, por favor",
                minLength: {
                  value: 2,
                  message: "El apellido tiene que ser mas largo",
                },
              })}
            />
          </div>
        </div>
        <div className="cont-inputs">
          <div>
            <p>Teléfono Candidato</p>
            <input
              type="tel"
              name="phone"
              pattern="[67]{1}[0-9]{8}"
              {...register("phone", {
                required: "Introduce tu numero de telefono, por favor",
                
              })}
            />
          </div>
          <div>
            <p>Mail Candidato</p>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              {...register("email", {
                required: "Introduce tu email, por favor",
                minLength: {
                  value: 2,
                  message: "El email tiene que ser mas largo",
                },
              })}
            />
          </div>
        </div>

        <div className="cont-input-file">
          <p>CV Candidato</p>
          <input className="file" type="file" name="file" onChange={(e) => addFiles(e)}/>
          <label>Subir Archivo <FaUpload/></label>
        </div>
        <div className="cont-button">
          <button onClick={() => uploadFile()}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;
