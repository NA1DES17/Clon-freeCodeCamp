import "../hojas-de-estilo/Testimonio.css";
import PropTypes from "prop-types";

const imagenes = import.meta.glob("../imagenes/*.png", {eager: true});

function Testimonio(props) {
  return (
    <div className="contenedor-tesimonio">
      <img
        className="imagen-testimonio"
        src={imagenes[`../imagenes/testimonio-${props.imagen}.png`]?.default}
        alt={`Imagen de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">&quot;{props.testimonio}&quot;</p>
      </div>
    </div>
  );
}

Testimonio.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
};

export default Testimonio;
