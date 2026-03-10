import type { Attachment } from 'svelte/attachments';

export function clickOutside(callback: () => void): Attachment {
  let _callback: Function | null | undefined = callback;

  return (element) => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (element.contains(event.target as Node) || element.isSameNode(event.target as Node)) return;
      _callback?.();
    };

    function addEventListener() {
      document.addEventListener('click', handleDocumentClick, { passive: true, capture: true });
    }

    function removeEventListener() {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    }

    if (_callback) {
      addEventListener();
    }
    return removeEventListener;
  };
}
