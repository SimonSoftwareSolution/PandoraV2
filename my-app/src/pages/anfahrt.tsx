import anfahrt from './../images/anfahrt.png'

export default function Anfahrt() {
    return (
      <div className='container App'>
        <div className="card mt-5">
          <img className="img-fluid" src={anfahrt} alt='Logo'/>
          <div className="card-body mb-5">
            <h5 className="card-title">Lets go</h5>
            <p className="card-text">
            Wer sein Rad dabei hat kommt damit tagsüber auch ganz gut an den Strand :-)<br/>
            Aber beachtet die aktuell z.T. bedingte Mitnahmemöglichkeit im ÖPNV...<br/>
            Bezüglich der Anfahrt: die Zielhaltestelle selbst heißt Brodersdorf und wird von der
            Buslinie 14 von Kiel aus bedient. Von dort aus lauft ihr noch ca. 15-20 Min. bis zum
            Gelände (dünne rote Linie). Falls ihr schon gebucht habt, wären Laboe/ Röbsdorf,
            Probsteierhagen etc. auch nicht ganz falsch. Alternativ mit dem Schnellbus bis
            Laboe, Brodersdorfer Weg, dafür solltet ihr aber abgesprochen haben, dass euch
            jemensch abholt, sonst lauft ihr ein bisschen länger.<br/>
            Außerdem gilt für stilvolles Anreisen: es gibt es den Fördedampfer von Kiel nach
            Laboe.<br/>
            Wenn mensch gerne abgeholt werden möchte - bietet es sich an, in
            Fahrgemeinschaften zu kommen, auch dafür wird es über die Website nochmal ein
            <a href='https://docs.google.com/spreadsheets/d/1Mhqwb4y6DHsK6bwsYZF0l2rPQ-wbOZMow2vKAd4jLdk/edit#gid=0'> Portal</a> geben, auch Autofahrer sind hier gebeten ihre Plätze nach Möglichkeit zur
            Verfügung zu stellen. Auf ein gutes Gelingen und mit ganz viel Vorfreude auf unser
            Abenteuer &quot;Pandora&quot;!
            Liebe Grüße 🍀
            </p>
          </div>
      </div>
      </div>
    );
  }