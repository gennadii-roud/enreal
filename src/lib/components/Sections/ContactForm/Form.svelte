<script lang="ts">
	import Field from '$lib/components/Field.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import preventDefault from '$lib/utils/preventDefault';
	import validEmail from '$lib/utils/validEmail';
	import { error } from '@sveltejs/kit';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';

	import requestData from '$lib/stores/requestData';

	let date: string = $state('');
	let email: string = $state('');
	let name: string = $state('');
	let location: string = $state('');
	let message: string = $state('');

	let errors: string[] = $state([]);
	let errorMessage: string = $state('');
	let successMessage: string = $state('');
	let processing: boolean = $state(false);

	const submitUrl = '/contact';

	const validate = () => {
		errors = [];

		if (date.trim() === '') {
			errors.push('date');
		}

		if (email.trim() === '' || !validEmail(email.trim())) {
			errors.push('email');
		}

		if (name.trim() === '') {
			errors.push('name');
		}
	};

	const resetForm = () => {
		date = '';
		email = '';
		name = '';
		location = '';
		message = '';
		errors = [];
	};

	const handleSubmit = async () => {
		if (processing) return;

		processing = true;
		errorMessage = '';
		successMessage = '';

		validate();

		const formData = $derived({
			date: date.trim(),
			email: email.trim(),
			name: name.trim(),
			location: location.trim(),
			message: message.trim(),
			requestData: {
				description: $requestData.description,
				totalPrice: $requestData.totalPrice,
				coverage: $requestData.coverage,
				additionalFeatures: $requestData.additionalFeatures
			}
		});

		console.log('Form data:', formData);

		try {
			const response = await fetch(submitUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					date: date.trim(),
					email: email.trim(),
					name: name.trim(),
					location: location.trim(),
					message: message.trim()
				})
			});

			if (!response.ok) {
				error(response.status, 'Failed to submit form');
			}

			successMessage = 'Thank you. Your message has been sent';
			resetForm();

			setTimeout(async () => {
				await goto('/thank-you');
			}, 1000);

		} catch (err) {
			errorMessage = 'An error occurred while sending your message. Please try again.';
		} finally {
			processing = false;
		}

		onDestroy(() => {
			requestData.set({
				description: null,
				totalPrice: null,
				coverage: null,
				additionalFeatures: []
			});
		});
	};
</script>

<div class="form">
	<div class="form__info">
		{#if $requestData.description}
			<div>{$requestData.description} - €{$requestData.totalPrice.toLocaleString('en-US')}</div>
			{$requestData.coverage.number}h coverage
			{#if $requestData.additionalFeatures.length},{/if}
			{#if $requestData.additionalFeatures.length}
				{$requestData.additionalFeatures.map(f => f.name).join(', ')}
			{/if}
		{:else}
			<div>Tell us a bit about your plans using the form below - or just send us an email to <a
				href="mailto:hi@etats.studio" aria-label="Send email to hi@etats.studio">hi@etats.studio</a></div>
		{/if}
	</div>

	<form class="form__main" novalidate>
		<div class="form__fields">
			<Field
				inputType="text"
				label="Wedding date"
				placeholder="Your wedding date"
				bind:value={date}
				error={errors.includes("date")}
				required
			/>
			<Field
				inputType="email"
				label="Email Address"
				placeholder="Email"
				bind:value={email}
				error={errors.includes("email")}
				required
			/>
			<Field
				inputType="text"
				label="Name"
				className="half-width"
				placeholder="Your full name"
				bind:value={name}
				error={errors.includes("name")}
				required
			/>
			<Field
				inputType="text"
				label="Venue / City <i>(optional)</i>"
				className="half-width"
				placeholder="Wedding location"
				bind:value={location}
				error={errors.includes("location")}
			/>
			<Field
				inputType="textarea"
				label="Message <i>(optional)</i>"
				placeholder="Message"
				bind:value={message}
			/>
		</div>
		<div class="form__bottom">
			{#if processing}
				<Loader />
			{/if}
			<button
				class="form__button"
				type="submit"
				disabled={processing}
				onclick={preventDefault(handleSubmit)}
			>
				<span class="form__button-label">
					Send request
				</span>
			</button>
		</div>
		{#if errorMessage}
			<div class="form__error-message" transition:slide>
				{errorMessage}
			</div>
		{/if}
		{#if successMessage}
			<div class="form__success-message" transition:slide>
				{successMessage}
			</div>
		{/if}
	</form>
</div>

<style lang="scss">
  .form {

    &__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 3rem;
      max-width: 47.3rem;

      :global(a) {
        font-style: italic;
        line-height: 1.3;
        text-decoration: underline;
      }
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      gap: 2.2rem 1.4rem;
      justify-content: space-between;
    }

    &__bottom {
      align-items: center;
      display: flex;
      gap: 2rem;
      justify-content: flex-end;
      padding-top: 2.2rem;
    }

    &__error-message,
    &__success-message {
      font-size: 1.5rem;
      padding: 1rem;
      text-align: center;
    }

    &__error-message {
      color: var(--error);
    }

    &__success-message {
      color: var(--success);
    }

    &__button {
      align-items: center;
      appearance: none;
      background-color: var(--black);
      border: 1px solid currentColor;
      border-radius: .5rem;
      box-shadow: none;
      color: var(--white);
      cursor: pointer;
      display: inline-flex;
      font: 500 1.6rem / 1 'Google Sans Flex', sans-serif;
      justify-content: center;
      max-width: 100%;
      min-height: 4.2rem;
      min-width: 21.5rem;
      outline: none;
      overflow: hidden;
      padding: 1.1rem 1.3rem;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s ease-out, background-color .2s, color .2s;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        opacity: .15;
        pointer-events: none;
        visibility: hidden;
      }

      &:not(:disabled),
      &:not(.disabled) {
        &:hover,
        &:focus {
          &::before {
            visibility: visible;
          }
        }
      }

      &:disabled {
        opacity: .5;
        pointer-events: none;
      }
    }

    &__button-label {
      position: relative;
      z-index: 1;
    }
  }
</style>


