import React, { useState, useEffect, useMemo } from "react";

function PoliticianCard({ name, image, position, biography }) {



  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        <strong>Posizione: {position}</strong>
      </p>
      <p>{biography}</p>
    </div>
  );
}

const MemoizedPoliticinaCard = React.memo(PoliticianCard)

export default function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/politicians`)
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politician) => {
      const isInName = politician.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const isInDesc = politician.description
        .toLowerCase()
        .includes(search.toLowerCase());
      return isInName || isInDesc;
    });
  }, [politicians, search]);

  return (
    <div>
      <h1>Lista politici</h1>
      <input
        type="text"
        placeholder="Cerca per nome o biografia"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="politicinas">
        {filteredPoliticians.map((politician) => (
          <MemoizedPoliticinaCard key={politician.id} {...politician} />
        ))}
      </div>
    </div>
  );
}

// 📌 Milestone 1: Recuperare e visualizzare i dati
// Effettua una chiamata API a
// https://boolean-spec-frontend.vercel.app/freetestapi/politicians
// Salva la risposta in uno stato React (useState).
// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:
// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)
// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.
