<script lang="ts">
	import { v4 as uuid } from 'uuid';

  interface Props {
	  inputType?: any;
	  label?: string;
	  className?: string;
    value?: string;
	  required?: boolean;
    error?: boolean;
	  placeholder?: string;
  }

  let { inputType, label, className, placeholder, value = $bindable(''), required, error }: Props = $props();

  const type = $derived(inputType?.toLowerCase());
  const visible = $derived(type && ['text', 'email', 'textarea'].includes(type))

	const id = uuid();
</script>

{#if visible}
	<div class={`field ${className} ${error ? 'error' : ''}`}>
    {#if label}
      <label class="field__label" for={id}>{@html label}{required ? ' *' : ''}</label>
    {/if}
    {#if type === 'textarea'}
      <textarea
				{id}
				bind:value={value}
				class="field__textarea"
				{placeholder}
			></textarea>
    {:else}
      <input
        {id}
				{type}
				bind:value={value}
        class="field__input"
        {required}
				{placeholder}
      />
    {/if}
  </div>
{/if}

<style lang="scss">
  .field {
    width: 100%;

		&.half-width {
			@include media(tablet-up) {
        width: calc(50% - .7rem);
			}
		}

		&__label {
      display: inline-block;
      line-height: 1;
      margin-bottom: .9rem;

			:global(i) {
        //font-family: 'Libertinus Serif', serif;
			}

			.error & {
        color: var(--error);
			}
		}

		&__input,
		&__textarea {
      border: 1px solid currentColor;
      border-radius: .5rem;
      display: block;
      padding: 1.8rem 1.3rem;
      width: 100%;

			&:focus {
				box-shadow: none;
				outline: none;
			}

			&::placeholder {
				color: #9E9E9E;
			}
		}

		&__input {
			-moz-appearance: textfield;
			height: 5.7rem;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				appearance: none;
				margin: 0;
			}

      .error & {
        color: var(--error);
      }
		}

		&__textarea {
			height: 13.9rem;
			overflow: auto;
			resize: none;
      padding-top: 1.3rem;
		}
	}
</style>