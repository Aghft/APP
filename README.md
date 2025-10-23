# Learning App (React Native)

Această aplicație demonstrează un dashboard mobil pentru o platformă de cursuri, construit în React Native. Interfața respectă cerințele din design: un bottom navigation bar transparent cu butonul central evidențiat pentru profil, layout-uri dedicate pentru Home, My Account și Search, precum și pagini secundare accesibile din cont.

## Caracteristici principale

- **Bottom navigation personalizat** cu trei tab-uri (Home, My Account, Search) și accent pe butonul central.
- **Ecran Home** cu carduri animate pentru cursuri și notificări recente.
- **Ecran My Account** cu imagine de fundal, butoane către sub-layout-uri (Profil, Certificate, Setări, Suport, Log out).
- **Ecran Search** cu filtrare în timp real după titlu și categorie.
- **Layout-uri secundare** pentru detalii de curs (cu listă de lecții), profil, setări, suport și certificate.
- **Bază de date locală SQLite** inițializată și populată la prima rulare, gestionată printr-un context React.
- **Animații subtile** de fade & slide-in pentru cardurile de curs și lecții.

## Structură

```
App.js                # Setup navigator principal (stack + bottom tabs)
src/
  components/         # Carduri reutilizabile, search bar, etc.
  db/                 # Inițializare și acces la SQLite + context
  hooks/              # Hook animat reutilizabil
  navigation/         # Configurarea bottom tab bar-ului personalizat
  screens/            # Ecranele principale și secundare
  styles/             # Paletă de culori globală
```

## Rulare

1. Instalează dependențele: `npm install`
2. Pornește Metro bundler: `npm start`
3. Rulează pe Android (emulator/dispozitiv): `npm run android`

> Pentru a rula pe Android Studio, deschide proiectul generat de React Native (folderul `android/` după ce rulezi `npx react-native init`). Codul din repo poate fi copiat într-un proiect React Native existent sau folosit ca punct de pornire.

## Dependențe cheie

- `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`
- `react-native-linear-gradient`
- `react-native-sqlite-storage`
- `react-native-vector-icons`
- `react-native-reanimated`

Aplicația folosește modul dark și un design inspirat din UI-ul furnizat, cu accent pe accesibilitate și reutilizare.
