// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_cadastro: 'http://localhost:3000/',
  API_catalogo: 'http://localhost:3000/',
  // API_cadastro: 'http://localhost:8087/restoke/api/internal/v1/',
  // API_catalogo: 'http://localhost:8088/catalogo/api/internal/v1/',

  imagePerfil: '../../../../../../../assets/Image_Perfil_Default.png',
  // imagePerfil:'../../../../../../../assets/vitor.png',
  imageDefault: '../../../../../../../assets/sem_Imagem.jpg',
  imagevitor: '../../../../../../../assets/vitor.png',
  imageFundo: '../../../../../../../assets/imgBackgroung/imgBackgroung-site-azul-scaled.jpg',

  primeiracor: 'rgb(77, 40, 140)',


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
