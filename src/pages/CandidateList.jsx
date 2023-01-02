import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../redux/candidate.functions";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CandidateList.scss'
import { useNavigate } from "react-router-dom";
const CandidateList = () => {
  const dispatch = useDispatch();

  const { candidates, loading, error } = useSelector(
    (state) => state.candidates
  );

  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  const navigateTo = useNavigate();


  return (
    <div className="cont-table">
    <div className="cont-title">
    <h2>Lista de Candidatos</h2>
    <button onClick={()=>navigateTo('/')}>Inicio</button>
    </div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => {
            return (
              <tr key={candidate._id}>
                <td>{candidate.name}</td>
                <td>{candidate.lastName}</td>
                <td>+34 {candidate.phone}</td>
                <td>{candidate.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
