// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // production: false
  production: false,
  enableDebug : true,
  assetPreLoader : '',
  APP : 'Workport',
  // BASE_URL: 'http://localhost:5000/api/v1',
  BASE_URL : 'https://backend-ksarfo.onrender.com/api/v1'
  // BASE_URL : 'https://workport-api.herokuapp.com/api/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
