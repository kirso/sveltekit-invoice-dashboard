<script lang="ts">
	import { MoveRight } from 'lucide-svelte';
</script>

<main class="flex min-h-screen flex-col p-6">
	<header class="flex h-20 shrink-0 items-end rounded-lg bg-primary-500 p-4 md:h-52" />

	<div class="mt-4 flex grow flex-col gap-4 md:flex-row">
		<div
			class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"
		>
			<p class="font-serif text-xl text-gray-800 md:text-3xl md:leading-normal">
				<strong>Welcome to Acme.</strong> This is the example for the <!-- -->
				<a href="https://johnnify.com/learn/nextjs-to-sveltekit/" class="text-primary-500">
					SvelteKit Learn Course</a
				>, by Johnny.
			</p>
			<a
				class="self-start rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 md:text-base hover:no-underline hover:text-white"
				href="/login"
				>Log in
				<MoveRight /></a
			>
		</div>
		<div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
			<picture class="md:hidden">
				<enhanced:img
					alt="Screenshots of the dashboard project showing desktop version"
					src="$lib/assets/hero-mobile.png"
				/>
			</picture>
			<picture class="hidden md:block">
				<enhanced:img
					alt="Screenshots of the dashboard project showing desktop version"
					src="$lib/assets/hero-desktop.png"
				/>
			</picture>
		</div>
	</div>
</main>
