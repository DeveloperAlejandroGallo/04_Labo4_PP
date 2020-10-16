// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlPaises: 'https://restcountries.eu/rest/v2/region/americas',
  jugadores: 'https://api.mocki.io/v1/75aa447e',
  firebaseConfig : {
    apiKey: "AIzaSyBCXgFPybYchlOgC_XMPUKoCiFcvYcZYZY",
    authDomain: "labo4-aleg.firebaseapp.com",
    databaseURL: "https://labo4-aleg.firebaseio.com",
    projectId: "labo4-aleg",
    storageBucket: "labo4-aleg.appspot.com",
    messagingSenderId: "621586958811",
    appId: "1:621586958811:web:461d4875ba6fb80a34fffe"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
