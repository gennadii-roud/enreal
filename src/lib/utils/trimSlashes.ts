export default function trimSlashes(str: string) {
	return str?.replace(/^\/|\/$/g, '') || '';
}
