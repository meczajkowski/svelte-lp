<script lang="ts">
	type Props = {
		links: { label: string; href: string }[];
	};

	let { links }: Props = $props();

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav>
	<div class="navbar-container">
		<div class="logo">
			<a href="/">
				<span class="company-name">Brand</span>
			</a>
		</div>

		<button class="mobile-menu-button" onclick={toggleMenu} aria-label="Menu">
			<span class="hamburger" class:open={isMenuOpen}></span>
		</button>
		<ul class="nav-links" class:open={isMenuOpen}>
			{#each links as item}
				<li>
					<a href={item.href} onclick={() => (isMenuOpen = false)}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 1rem 0;
		background-color: white;
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.logo a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.company-name {
		font-size: 1.5rem;
		font-weight: 700;
		color: #333;
		margin-left: 0.5rem;
	}

	.nav-links {
		display: flex;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;
	}

	.nav-links a {
		color: var(--text-color);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
		font-size: 0.95rem;
	}

	.nav-links a:hover {
		color: var(--primary-color-dark);
	}

	.mobile-menu-button {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger {
		display: block;
		width: 24px;
		height: 2px;
		background-color: var(--text-color);
		position: relative;
		transition: background-color 0.3s;
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 24px;
		height: 2px;
		background-color: var(--text-color);
		transition: transform 0.3s;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.open {
		background-color: transparent;
	}

	.hamburger.open::before {
		transform: rotate(45deg);
		top: 0;
	}

	.hamburger.open::after {
		transform: rotate(-45deg);
		bottom: 0;
	}

	@media (max-width: 768px) {
		nav {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1000;
		}

		.mobile-menu-button {
			display: block;
			z-index: 1001;
		}

		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background-color: var(--background-color);
			z-index: 999;
			padding: 1.5rem;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			gap: 1.5rem;
			max-height: 0;
			overflow: hidden;
			opacity: 0;
			pointer-events: none;
			transition:
				max-height 0.3s,
				opacity 0.3s,
				padding 0.3s;
			padding-top: 0;
			padding-bottom: 0;
		}

		.nav-links.open {
			max-height: none;
			opacity: 1;
			pointer-events: auto;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}
	}
</style>
