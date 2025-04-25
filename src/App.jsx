import { useState, useEffect } from "react";

export default function App() {
  const [politicians, setPoliticians] = useState([])
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