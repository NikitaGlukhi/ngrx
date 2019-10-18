import { IConfig } from '../../interfaces/config.interface';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
