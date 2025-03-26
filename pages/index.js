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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-10">🔧 ALUWOOD RECHNER</h1>

      <div className="grid gap-4 w-full max-w-xl">
        <input
          type="number"
          placeholder="Breite (m)"
          className="p-4 rounded text-black"
          value={breite}
          onChange={(e) => setBreite(e.target.value)}
        />
        <input
          type="number"
          placeholder="Höhe (m)"
          className="p-4 rounded text-black"
          value={hoehe}
          onChange={(e) => setHoehe(e.target.value)}
        />
        <select
          className="p-4 rounded text-black"
          value={farbe}
          onChange={(e) => setFarbe(e.target.value)}
        >
          <option value="braun">Braun</option>
          <option value="braun geölt">Braun geölt</option>
          <option value="schwarz">Schwarz</option>
          <option value="grau">Grau</option>
        </select>
        <button
          className="p-4 bg-white text-black font-bold rounded hover:bg-gray-300"
          onClick={berechne}
        >
          Berechnen
        </button>
      </div>

      {ergebnis && (
        <div className="mt-10 bg-white text-black p-6 rounded shadow w-full max-w-xl space-y-2">
          <p><strong>Anzahl Paneele:</strong> {ergebnis.anzahlPaneele}</p>
          <p><strong>Einzelpreis:</strong> {ergebnis.einzelpreis} €</p>
          <p><strong>Gesamtpreis:</strong> {ergebnis.gesamtpreis} €</p>
          <p><strong>Fläche:</strong> {ergebnis.flaeche} m²</p>
          <p><strong>Preis pro m²:</strong> {ergebnis.preisProM2} €</p>
        </div>
      )}
    </div>
  );
}

   
