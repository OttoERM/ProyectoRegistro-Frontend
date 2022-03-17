/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Alumnos, 'IDAlumno'>, schemaOptions: { title: 'NewAlumnos', exclude: [ 'IDAlumno' ] })
 */
export interface NewAlumnos {
  IDClase: string;
  IDMatricula: string;
  apellido: string;
  nombre: string;
  sexo: string;
}
