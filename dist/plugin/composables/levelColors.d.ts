import { ThemeInstance } from 'vuetify';
import { UseGetLevelColors } from '../types';
/**
 * Converts single color
 */
export declare const getSingleColor: (color: string, theme: ThemeInstance) => string;
/**
 * Gets the colors for the current drilldown level
 */
export declare const useGetLevelColors: UseGetLevelColors;
