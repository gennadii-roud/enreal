import { getContext, setContext } from 'svelte';

class UIState {
  // darkHeader: boolean = $state(false);
  // navigationHidden: boolean = $state(false);
}

export function createUiState() {
  const uiState = new UIState();
  setContext('uiState', uiState);
  return uiState;
}

export function useUiState(): UIState  {
  return getContext('uiState')
}
