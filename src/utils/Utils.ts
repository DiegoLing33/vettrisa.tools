export function getPix(s: string | number | undefined | null) {
	if (s === undefined || s === null) return s;
	if (typeof s === "number") return `${s}px`;
	return s;
}