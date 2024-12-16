import RoscaInclinada from "/src/assets/RoscaInclinada.jpg";
import RoscaMartelo from "/src/assets/RoscaMartelo.jpg";
import RoscaScott from "/src/assets/RoscaScott.webp";
import TricepsBarra from "/src/assets/TricepsBarra.jpg";
import TricepsMergulho from "/src/assets/TricepsMergulho.jpg";
import TricepsCorda from "/src/assets/TricepsCorda.jpg";

export type TreinoTuplaType = [string, string, number, number, number];

export const TREINO: TreinoTuplaType[] = [
  ["RoscaScott", "Rosca Scott com barra W", 4, 8, 10],
  ["TricepsCorda", "Extensão de tríceps com corda", 4, 8, 10],
  ["RoscaMartelo", "Rosca martelo", 3, 10, 12],
  ["TricepsBarra", "Tríceps com barra reta", 3, 10, 12],
  ["RoscaInclinada", "Rosca inclinada com halter", 3, 10, 12],
  ["TricepsMergulho", "Tríceps mergulho no aparelho", 3, 10, 12],
];

export const IMAGES: { [key: string]: string } = {
  RoscaScott,
  TricepsCorda,
  RoscaMartelo,
  TricepsBarra,
  RoscaInclinada,
  TricepsMergulho,
};
