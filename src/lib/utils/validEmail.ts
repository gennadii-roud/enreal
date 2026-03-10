export default (email: string | null | undefined): boolean => {
	if (!email) return false;

	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
