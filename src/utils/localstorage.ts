'use client';
import { UserPartial } from '@/type/user';
// key
export const LOCAL_KEY_ME = 'me';

export const setLocalItem = (key: string, value: string): void => {
	localStorage.setItem(key, value);
};

export const getLocalItem = (key: string): string | null =>
	localStorage.getItem(key);

export const removeLocalItem = (key: string): void => {
	localStorage.removeItem(key);
};

export const setMe = (user: UserPartial) =>
	setLocalItem(LOCAL_KEY_ME, JSON.stringify(user));

export const getMe = () => {
	const meValue = getLocalItem(LOCAL_KEY_ME);
	if (!meValue) {
		return null;
	}
	const storedUser: UserPartial = JSON.parse(meValue);
	return storedUser;
};
export const removeMe = () => {
	removeLocalItem(LOCAL_KEY_ME);
};
