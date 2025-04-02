export interface EducationItemData {
  titulo: string;
  periodo: string;
  descripcion: string;
  certificado: boolean;
  urlCertificado?: string;
}

export const educationList: EducationItemData[] = [
  {
    titulo: "Ingenieria en Ciencias de la Computación",
    periodo: "2023-actualidad",
    descripcion:
      "Estudio la carrera de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala, actualmente cursando mi 3er año de la carrera",
    certificado: false,
  },
  {
    titulo: "Bachillerato en Computación",
    periodo: "2021-2022",
    descripcion:
      "Estudie el bachillerato en computación en el Colegio Blaise Pascal.",
    certificado: true,
    urlCertificado: "/",
  },
];
