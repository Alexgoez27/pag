import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
import BarraBusqueda from './BarraBusqueda';
import tenisuno from '../icons/tenisuno.jpg';
import tenisdos from '../icons/tenisdos.jpg';
import tenistres from '../icons/tenistres.jpg';
import teniscuatro from '../icons/teniscuatro.jpg';




function Inicio() {
  return (
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={tenisuno} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={tenisdos} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={tenistres} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={teniscuatro} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Inicio;