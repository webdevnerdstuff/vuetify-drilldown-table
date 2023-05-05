import { LevelColorResponse, LoadedDrilldown } from '../../types';
import { ThemeInstance } from 'vuetify';
/**
 * Gets the colors for the current drilldown level
 */
export declare function useGetLevelColors(loadedDrilldown: LoadedDrilldown, themeColors: ThemeInstance, prop?: string, type?: string | null): LevelColorResponse;
