export type KoreaRegions = {
	[region: string]: string[];
};

export async function fetchKoreaRegionsJson() {
	try {
		const response = await fetch('/json/KoreaRegions.json');
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed to load KoreaRegions.json', error);
		return null;
	}
}
