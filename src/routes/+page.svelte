<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { productsData } from '../store';

	let hiddenElements = [];
	let isMobile = false;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});

		isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

		// @ts-ignore
		hiddenElements = document.querySelectorAll('.hide');
		hiddenElements.forEach((el) => observer.observe(el));
	});

	$: products = $productsData.filter((product) => 'mobile' in product);
</script>

<div>
	{#if isMobile}
		<section class="m-4 show">
			<div class="text-3xl font-bold">Welcome to</div>
			<div class="text-4xl font-bold">Flooring Terminal</div>
			<img class="w-full" src="/7mm/Changi_Scene.jpg" alt="view" />
			<div class="text-lg">Explore Our Collections</div>
			<a class="text-md link" href="/products/all">Explore All -></a>
		</section>
		<section class="m-4">
			<div class="carousel rounded-box">
				{#each products as product, i}
					<div class="carousel-item w-full relative flex items-end justify-center">
						<img src={product.mobile} class="w-full h-full object-cover" alt={product.name} />
						<div class="absolute flex items-center justify-center m-1">
							{#each Array(8) as _, j}
								{#if i == j}
									<div
										class="w-2 h-2 m-1 rounded-full border border-white relative flex items-center justify-center shadow"
									>
										<div class="w-1 h-1 rounded-full bg-white absolute" />
									</div>
								{:else}
									<div class="w-2 h-2 m-1 rounded-full border border-white shadow" />
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{:else}
		<section class="hide flex relative mx-8 items-center show">
			<div class="z-30">
				<div class="text-4xl">Explore Our Collections</div>
				<br />
				<div class="text-6xl font-bold">Welcome to Flooring Terminal</div>
				<br />
				<a class="text-3xl link" href="/products/all">Explore All -></a>
			</div>

			<img class="h-4/5 absolute right-0" src="/7mm/Changi_Scene.jpg" alt="view" />
		</section>
		<section class="hide m-8">
			<div class="carousel w-full">
				<div id="slide1" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/Changi_Scene.jpg" alt="Changi" class="h-full w-auto" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide6" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide2" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/Changi.JPG" alt="CHANGI" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">CHANGI</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/Dubai_Scene.jpg" class="h-full w-auto" alt="Dubai" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide1" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide3" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/Dubai.JPG" alt="Dubai" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">DUBAI</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/Gatwick.jpg" class="h-full w-auto" alt="Gatwick" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide2" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide4" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/Gatwick.jpg" alt="Gatwick" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">HAMAD</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/lncheon_Scene.jpg" class="h-full w-auto" alt="Lncheon" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide3" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide5" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/lncheon.JPG" alt="lncheon" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">LNCHEON</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="slide5" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/Meilan_Scene.jpg" class="h-full w-auto" alt="Meilan" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide4" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide6" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/Meilan.JPG" alt="Meilan" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">MEILAN</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="slide6" class="carousel-item relative w-full">
					<div class="flex items-center justify-center w-full h-full bg-black">
						<img src="/7mm/Pearson_Scene.jpg" class="h-full w-auto" alt="Pearson" />
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide5" class="btn btn-circle btn-primary">❮</a>
						<a href="#slide1" class="btn btn-circle btn-primary">❯</a>
					</div>
					<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
						<div class="dropdown dropdown-left dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label
								tabindex="0"
								class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"
							/>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<div
								tabindex="0"
								class="dropdown-content z-[1] card w-96 glass shadow text-primary-content"
							>
								<figure><img src="/7mm/Pearson.JPG" alt="Pearson" loading="lazy" /></figure>
								<div class="card-body">
									<h2 class="card-title">PEARSON</h2>
									<ul class="font-['Arial']">
										<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
										<li><p><strong>Wear layer:</strong> 20mil</p></li>
									</ul>
									<div class="card-actions justify-end">
										<div class="badge badge-outline">7mm</div>
										<div class="badge badge-outline">Waterproof</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>

{#if isMobile}
	<style>
		div {
			color: white;
		}

		section {
			display: grid;
			height: 100vw;
		}

		.hide {
			opacity: 0;
			filter: blur(5px);
			transform: translateX(-100%);
			transition: all 1s;
		}

		.show {
			opacity: 1;
			filter: blur(0);
			transform: translateX(0);
			transition: all 1s;
		}
	</style>
{:else}
	<style>
		div {
			color: white;
		}

		section {
			display: grid;
			height: 100vh;
		}

		.hide {
			opacity: 0;
			filter: blur(5px);
			transform: translateX(-100%);
			transition: all 1s;
		}

		.show {
			opacity: 1;
			filter: blur(0);
			transform: translateX(0);
			transition: all 1s;
		}
	</style>
{/if}
