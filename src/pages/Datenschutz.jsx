import Footer from "../components/Footer";

function Datenschutz() {
  return (
    <div className="position-relative">
      <div className="container-fluid bg-no-repeat bg-cover position-relative background-container">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div
            id="datenschutz"
            className="d-flex flex-column align-items-center justify-content-center m-5 position-relative text-container-two col-4"
          >
            <h2>Datenschutzerklärung</h2>
            <p className="mt-5">
              <h4>Datenschutz</h4>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
            </p>
            <p>
              SSl-Verschlüsselung Diese Seite nutzt aus Gründen der Sicherheit
              und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden,
              eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von "http://" auf
              "https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile. Wenn die SSL Verschlüsselung aktiviert ist, können
              die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>

            <p>
              <h4>Recht auf Auskunft, Löschung, Sperrung</h4>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden.
            </p>

            <p>
              <h4>Widerspruch Werbe-Mails</h4>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </div>
        </div>
        <div className="position-relative mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;
