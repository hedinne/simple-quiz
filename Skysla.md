# Lokaverkefni: Vefforritun 2016

Höfundur:
Héðinn Eiríksson - hee34@hi.is

Slóð:
https://leikur.herokuapp.com

## Um verkefnið

Ég ákvað að búa til síðu sem heitir SimpleQuiz og er einfaldur spurningar leikur. Skilyrðin sem ég setti mér í sambandi við val á verkefni voru aðalega tvö. Api sem ég hafði ekki notað áður og hægt væri að gera "dínamíska" síðu með honum. Allt of margir apar buða bara upp á "single-page" síðu.
Ég er með þó nokkrar hugmundir af breytingu og viðbótum sem ég mun hugsanlega dunda mér við að bæta við um jólin.
Það komu ekki upp nein stórvægileg vandamál við gerð síðunar. Einna helst var það að api'inn skilaði gögnunum encode'uðum á leiðinlega hátt þánnig að það fór mikill tími að finna fall eða forritasafn sem gat þýtt þetta fyrir mig.
Ég skrifaði alla stílana mobile-first. Ég skrifaði ekki neitt fyrir ofan 768px fyrr en allir mobile stílarnir voru tilbúnir. Þetta var í fyrsta skipti sem gerði síðu 100% mobile-first og það var frekar skrítið að skrifa desktop útgáfuna eftir á.  


## Stakkurinn

* Bakendinn er skrifaður í Express.
* Framendinn er skrifaður í Pug.
* Stílarnir skrifaðir í Less með BEM-stílnum.


Less skrárnar mínar eru þýddar með middleware og þarf því ekki Gulp. Ég nota alltaf ESlint og StylLint í ritlinum mínum og hafði þar af leiðandi lítil not fyrir það í gegnum Gulp.
Ég ákvað að nota ekki Babel þar sem verkefnið tekur fram að eingöngu þarf að styðja nýjustu útgáfur af Chrome og Firefox. Ég bætti inn línu í package.json til að vera viss um að Heroku noti Node.js 7.0.0. (Lýðnetið verður líka á einhverjum tímapunkti að byrja að nota ES6 í production.)
Það kom mér á óvart hvað ég þurfti lítið af föllum. Því voru einingaprófanirnar mínar frekar litlar. Ég notaði Chai As Promised til að gera prófanirnar á þetta eina fall sem ég þurfti.


## Prófanir
HTML og CSS á allt að vera snyrtilegt, merkingafræðilega rétt.
Ég keyrði síðuna í gegnum HTML, CSS og accessibility prófanir og það voru engar villur.


## Skriptur


#### Uppseting

```
$ yarn
```

#### Eða

```
$ npm install
```

#### Aðrar skriptur í boði
```
$ npm start
$ npm run test
$ npm run lint
$ npm coverage
```



Kv. Héðinn Eiríksson

p.s. takk fyrir áfangann. Hann var lærdómsríkur og skemmtilegur.
