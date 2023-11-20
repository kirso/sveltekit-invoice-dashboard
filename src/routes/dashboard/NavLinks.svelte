<script lang="ts">
	import { Home, Files, Users2, Power } from 'lucide-svelte';
	import { page } from '$app/stores';
	const links = [
		{ label: 'Home', href: '/dashboard', icon: Home },
		{ label: 'Invoices', href: '/dashboard/invoices', icon: Files },
		{ label: 'Customers', href: '/dashboard/customers', icon: Users2 }
	];
</script>

<div class="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
	{#each links as link}
		<a
			aria-label={link.label}
			class="flex hover:no-underline h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-primary-100 md:flex-none md:justify-start md:p-2 md:px-3 bg-gray-50"
			class:active={$page.url.pathname === link.href}
			href={link.href}
		>
			<svelte:component this={link.icon} size="15" />
			<p class="hidden md:block">{link.label}</p></a
		>
	{/each}
	<div class="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
	<form action="" method="POST">
		<input type="hidden" name="" /><button
			class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-100 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-3"
		>
			<Power size="15" />
			<div class="hidden md:block">Sign Out</div></button
		>
	</form>
</div>

<style>
	.active {
		@apply bg-primary-50 text-primary-500;
	}
</style>
