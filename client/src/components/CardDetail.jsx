import styles from "../css/card-detail.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clean_input, filter_characters } from "../redux/actions";

function CardDetail() {
  const { id } = useParams();
  const characters = useSelector((state) => state.characters);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clean_input());
    dispatch(filter_characters(null));
  }, [dispatch]);

  var character = characters.filter(function (elem) {
    return elem.id === parseInt(id);
  })[0];
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h3>{character.name}</h3>
          <div>
            <span>
              {character.status} - {character.species}
            </span>
          </div>
        </div>
        <div className="card-content">
          <div>
            <span>Gender:</span>
            <p>{character.gender}</p>
          </div>
          <div>
            <span>Episodes:</span>
            <p>{character.episode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
