 To-Do List
 Om projektet

Det här projektet är en enkel To-Do List-applikation byggd med HTML, CSS och JavaScript.

Applikationen låter användaren lägga till uppgifter, söka bland dem, markera uppgifter som klara och radera uppgifter. 
Använder även Local Storage för att spara uppgifter lokalt i webbläsaren samt hämtar användarlista från ett externt API.

Funktioner:

- Lägga till uppgifter: Användaren kan skriva in och lägga till nya uppgifter i listan.
- Validering: Ett felmeddelande visas om användaren försöker lägga till en tom uppgift.
- Markera som klar:  Uppgifter kan flyttas från To Do-listan till Done-listan.
- Radera uppgifter: Användaren kan ta bort uppgifter från listan.
- Sökfunktion:  Filtrerar uppgifter baserat på användarens söktext.
- Local Storage:  Sparar uppgifter i webbläsaren så att de finns kvar vid omladdning av sidan.
- API-anrop:  Hämtar en uppgift från JSONPlaceholder API och visar resultatet i en separat lista.

Projektet är byggt med:

- HTML5 – för applikationens struktur.
- CSS – för styling och visuell presentation.
- JavaScript (ES6+) – för funktionalitet och interaktivitet.
  
- Local Storage – för lokal datalagring.
- Fetch API – för att hämta data från ett externt API.
- JSONPlaceholder – för testdata från ett externt API.

API

Projektet använder [JSONPlaceholder](https://jsonplaceholder.typicode.com/) för att hämta testdata.

API-endpoint:
https://jsonplaceholder.typicode.com/todos/1

När användaren klickar på knappen Hämta API skickas ett asynkront anrop med `fetch()`. Den hämtade uppgiftens titel visas sedan i API-listan.

 Installation och användning

1. Klona repositoryt:

   ```bash
   git clone <repository-url>
   ```

2. Öppna projektmappen.

3. Öppna filen `index.html` i en webbläsare.

4. Börja lägga till och hantera dina uppgifter!

Ingen installation av externa bibliotek eller paket krävs.

## Projektstruktur

```text
To-Do-List/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

Lärdomar

Genom projektet har jag fått praktisk erfarenhet av:

- DOM-manipulation med JavaScript.
- Event listeners och användarinteraktion.
- Hantering av arrayer och objekt.
- Array-metoder som `filter()` och `push()`.
- Asynkron JavaScript med `async/await`.
- API-anrop med Fetch API.
- Lagring och hämtning av data med Local Storage.
- Grundläggande felhantering med `try/catch`.

## Framtida förbättringar

Möjliga vidareutvecklingar av projektet:

- Förbättra sparningen av avklarade uppgifter.
- Lägga till en funktion för att rensa hela listan.
- Förbättra designen och göra applikationen responsiv.
- Lägga till möjlighet att redigera befintliga uppgifter.
