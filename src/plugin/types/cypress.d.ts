/// <reference types="cypress" />

import { mount } from 'cypress/vue';
import type { Page } from './';


declare global {
	namespace Cypress {
		interface Chainable {
			baseIconClass(icon: string): string;
			cloneArray(array: any[]): any[];
			getBaseStepperElements(excluded?: string[]): Chainable;
			getDataCy(value: string): Chainable<JQuery<HTMLElement>>;
			mount: typeof mount;
			mountComponent(options: any): Chainable;
			navigationMountComponent(options: any): MountStepperForm;
			navigationGetButtons(): Chainable;
			checkedEnabledDisabledHeaderItems: Cypress.CheckedEnabledDisabledHeaderItems;
		}

		interface MountStepperForm {
			(
				options?: {
					editable?: boolean,
					jumpAhead?: boolean,
					pages: Page[],
					validationSchema?: unknown,
				}
			): Chainable;
		}

		interface CheckedEnabledDisabledHeaderItems {
			(
				{ enabled, disabled, pages }: {
					enabled: number[],
					disabled: number[],
					pages: Page[],

				}
			): void;
		}
	}
}
