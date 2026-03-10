import { inView as inViewMotion } from 'motion';
import type { Attachment } from 'svelte/attachments';

export function inView(callback?: () => void, options?: any): Attachment {
  let _callback: Function | null | undefined = callback;

  return (element) => {
		const stopWatch = inViewMotion(
			element,
			() => {
				if (typeof window === 'undefined') return;

				_callback?.();
				element.classList.add('in-view');
				element.dispatchEvent(new CustomEvent('inview'));
			},
			options
		);

    return stopWatch;
  };
}
