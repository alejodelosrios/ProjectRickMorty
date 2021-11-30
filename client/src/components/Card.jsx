import styles from "../css/card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, species, gender, episode, status, image }) {
  return (
    <Link to={`/names/${id}`} style={{ textDecoration: "none" }}>
      <div className={styles.card}>
        <img className={styles.cardImg} src={image} alt={name} />
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <h3>{name}</h3>
            <div>
              <span>
                {status} - {species}
              </span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div>
              <span>Gender:</span>
              <p>{gender}</p>
            </div>
            <div>
              <span>Episodes:</span>
              <p>{episode}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
