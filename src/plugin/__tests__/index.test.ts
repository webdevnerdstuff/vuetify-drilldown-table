import { describe, it, expect } from 'vitest';
import { createVDrilldownTable } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VDrilldownTable = createVDrilldownTable();

			expect('install' in VDrilldownTable).toBe(true);
		});
	});
});
