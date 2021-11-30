import styles from "../css/cards.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { get_characters } from "../redux/actions";

function Cards({ data }) {
  const dispatch = useDispatch();
  let characters = useSelector((state) => state.characters);
  let filterCharacters = useSelector((state) => state.filterCharacters);
  if (filterCharacters.length > 0) {
    characters = filterCharacters;
  }

  useEffect(() => {
    dispatch(get_characters(data));
  }, [data, dispatch]);

  return (
    <div className={styles.container}>
      {characters.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          name={e.name}
          species={e.species}
          gender={e.gender}
          episode={e.episode}
          status={e.status}
          image={e.image}
        />
      ))}
    </div>
  );
}
export default Cards;
