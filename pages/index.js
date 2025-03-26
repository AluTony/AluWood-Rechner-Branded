import { useState } from "react";

export default function Home() {
  const [breite, setBreite] = useState("");
  const [hoehe, setHoehe] = useState("");
  const [farbe, setFarbe] = useState("braun geölt");
  const [ergebnis, setErgebnis] = useState(null);

  const farbpreise = {
    braun: 167.14,
    "braun geölt": 180.59,
    schwarz: 180.59,
    grau: 180.59,
  };

  const berechne = () => {
    const b = parseFloat(breite);
    const h = parseFloat(hoehe);
    const paneelBreite = 0.425;
    const standardLaenge = 2.4;

    if (!b || !h || !farbe || !(farbe in farbpreise)) return;

    const anzahlPaneele = Math.ceil(b / paneelBreite);
    const einzelpreis = parseFloat(
      ((h / standardLaenge) * farbpreise[farbe]).toFixed(2)
    );
    const gesamtpreis = parseFloat((anzahlPaneele * einzelpreis).toFixed(2));
    const flaeche = +(b * h).toFixed(2);
    const preisProM2 = +(gesamtpreis / flaeche).toFixed(2);

    setErgebnis({
      anzahlPaneele,
      einzelpreis,
      gesamtpreis,
      flaeche,
      preisProM2,
    });
  };

  return (
   
