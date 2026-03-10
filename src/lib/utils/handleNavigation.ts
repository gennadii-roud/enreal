import openPopupForm from '$lib/stores/openPopupForm';

export const handleNavigation = (event: MouseEvent, link: any) => {
	if (link.type === 'popup') {
		event.preventDefault();
		openPopupForm.set(true);
	}
}