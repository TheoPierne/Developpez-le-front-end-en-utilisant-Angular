import { IParticipation } from "./Participation";

export type Olympics = ICountry[] | undefined | null;

export interface ICountry {
  id: number;
  country: string;
  participations: IParticipation[];
}
