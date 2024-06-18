<script>
	import { Lightbox } from 'svelte-lightbox';
	import '../../../app.css';
	import { productsData } from '../../../store';
	// Read the array from the store
	$: products = $productsData;

	let isMobile = false;

	$: {
		isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
	}
</script>

<div>
	<div class="grid sm:grid-cols-3 grid-cols-1 gap-8 justify-items-center m-4">
		{#each products as product}
			<div class="card w-96 h-96 glass shadow-md shadow-gray-800">
				{#if isMobile}
					<div class="carousel w-full rounded-t-lg">
						<figure class="carousel-item w-full relative">
							<div class="flex absolute top-0 left-0">
								<div
									class="w-2 h-2 m-1 rounded-full border border-white relative flex items-center justify-center shadow"
								>
									<div class="w-1 h-1 rounded-full bg-white absolute" />
								</div>
								<div class="w-2 h-2 my-1 rounded-full border border-white shadow" />
							</div>
							<Lightbox>
								<img src={product.path} alt={product.name} />
							</Lightbox>
						</figure>
						<figure class="carousel-item w-full relative">
							<div class="flex absolute top-0 left-0">
								<div class="w-2 h-2 m-1 rounded-full border border-white shadow" />
								<div
									class="w-2 h-2 my-1 rounded-full border border-white relative flex items-center justify-center shadow"
								>
									<div class="w-1 h-1 rounded-full bg-white absolute" />
								</div>
							</div>
							<Lightbox>
								<img src={product.scene} alt={product.name} />
							</Lightbox>
						</figure>
					</div>
				{:else}
					<figure class="card">
						<Lightbox>
							<img src={product.path} alt={product.name} />
						</Lightbox>
						<Lightbox>
							<img src={product.scene} alt={product.name} class="img-top" loading="lazy" />
						</Lightbox>
					</figure>
				{/if}

				<div class="card-body">
					<h2 class="card-title">
						{product.name}
						<div class="badge badge-info">NEW</div>
					</h2>
					{#if product.type == '6mm'}
						<ul class="font-['Arial']">
							<li><p><strong>Dimensions:</strong> 7.2"x48"x6mm (24.04 sqft/box)</p></li>
							<li><p><strong>Wear layer:</strong> 12mil</p></li>
						</ul>
					{:else}
						<ul class="font-['Arial']">
							<li><p><strong>Dimensions:</strong> 7.2”x60”x7mm (24.35 sqft/box)</p></li>
							<li><p><strong>Wear layer:</strong> 20mil</p></li>
						</ul>
					{/if}
					<div class="card-actions justify-end">
						<div class="badge badge-outline">{product.type}</div>
						<div class="badge badge-outline"><p>Waterproof</p></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	div {
		color: white;
	}
</style>
