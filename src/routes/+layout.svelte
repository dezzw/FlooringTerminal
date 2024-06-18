<script>
	// @ts-nocheck

	import '../app.css';
</script>

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
/>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-100">
			<div class="navbar-start">
				<label for="my-drawer-3" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
			</div>
			<div class="navbar-center">
				<a class="btn btn-ghost normal-case text-xl" href="/">
					<picture>
						<source srcset="/logo-dark.svg" media="(prefers-color-scheme: dark)" />
						<img class="h-12" src="/logo-dark.svg" alt="Terminal Flooring" />
					</picture>
				</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>
		</div>
		<!-- Page content here -->
	</div>
	<div class="drawer-side z-50">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-2 w-80 min-h-full bg-base-200 text-lg">
			<!-- Sidebar content here -->
			<li><a href="/">Homepage</a></li>
			<li>
				<div class="collapse bg-base-200 p-0">
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Products</div>
					<div class="collapse-content">
						<ul>
							<li><a href="/products/all">All</a></li>
							<li>
								<a href="/products/6mm"
									><p class="text-[#c79a6d]">STATION SERIES</p>
									6MM SPC</a
								>
							</li>
							<li>
								<a href="/products/7mm"
									><p class="text-[#c79a6d]">TERMINAL SERIES</p>
									7MM SPC</a
								>
							</li>
						</ul>
					</div>
				</div>
			</li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
</div>

<slot />

<footer class="footer p-10 bg-base-200 text-base-content">
	<nav>
		<i class="bi bi-truck" />
		<header class="footer-title">Orders</header>
		<p>To order please email or call:</p>
		<a class="link" href="mailto:info@pureluxgroup.com" title="mailto:info@pureluxgroup.com"
			>info@pureluxgroup.com</a
		>
		<p>+1(905)-238-8885</p>
	</nav>
	<nav>
		<i class="bi bi-box-seam" />
		<header class="footer-title">Pickup</header>
		<div>Hours: Mon - Fir 9:00am - 5:00pm</div>
		<div>1200 Kamato Rd, Mississauga, ON L4W 1Y1</div>
	</nav>
	<nav>
		<i class="bi bi-arrow-repeat" />
		<header class="footer-title">Returns</header>
		<p><strong>To initiate the return process, please contact us at: </strong></p>
		<a class="link" href="mailto:info@pureluxgroup.com" title="mailto:info@pureluxgroup.com"
			>info@pureluxgroup.com</a
		>
		<p>
			Please check the <a class="link" href="/return_policy" title="Return Policy">return policy</a
			>.
		</p>
	</nav>
	<form>
		<header class="footer-title">Newsletter</header>
		<fieldset class="form-control w-80">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Enter your email address</span>
			</label>
			<div class="relative">
				<input
					type="text"
					placeholder="username@site.com"
					class="input input-bordered w-full pr-16"
				/>
				<button class="btn btn-primary absolute top-0 right-0 rounded-l-none" disabled="true"
					>Comming Soon</button
				>
			</div>
		</fieldset>
	</form>
</footer>

<style>
	footer i {
		@apply text-4xl;
	}
</style>
