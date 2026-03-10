const preventDefault = (fn: (e: MouseEvent) => void) =>
	(event: MouseEvent) => {
		event.preventDefault();
		fn(event);
	};

export default preventDefault;

