/* eslint no-new-wrappers: 0 */
import test from 'ava';
import jolo from './';

test(t => {
	t.true(jolo());
});