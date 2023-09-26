<script>
  import "../../../app.css";

  let products = [
    {
      name: "Bay",
      path: "/6mm/Bay.JPG",
      type: "6mm"
    },
    {
      name: "High Park",
      path: "/6mm/HighPark.JPG",
      type: "6mm"
    },
    {
      name: "Kipling",
      path: "/6mm/Kipling.JPG",
      type: "6mm"
    },
    {
      name: "Spadina",
      path: "/6mm/SPADINA.JPG",
      type: "6mm"
    },
    {
      name: "Summer Hill",
      path: "/6mm/Summerhill.JPG",
      type: "6mm"
    },
    {
      name: "Union",
      path: "/6mm/Union.JPG",
      type: "6mm"
    },
    {
      name: "Wellesley",
      path: "/6mm/Wellesley.JPG",
      type: "6mm"
    },
    {
      name: "Wynford",
      path: "/6mm/Wynford.JPG",
      type: "6mm"
    },
    {
      name: "Changi",
      path: "/7mm/CHANGI.JPG",
      type: "7mm"
    },
    {
      name: "Dubai",
      path: "/7mm/Dubai.JPG",
      type: "7mm"
    },
    {
      name: "Hamad",
      path: "/7mm/Hamad.JPG",
      type: "7mm"
    },
    {
      name: "Haneda",
      path: "/7mm/HANEDA.JPG",
      type: "7mm"
    },
    {
      name: "lncheon",
      path: "/7mm/lncheon.JPG",
      type: "7mm"
    },
    {
      name: "Long Beach",
      path: "/7mm/LongBeach.jpeg",
      type: "7mm"
    },
    {
      name: "Meilan",
      path: "/7mm/Meilan.JPG",
      type: "7mm"
    },
    {
      name: "Pearson",
      path: "/7mm/Pearson.JPG",
      type: "7mm"
    },
  ];
</script>

<style>
  div {
    color: white;
  }

  /* .scene:hover { */
  /*   opacity: 0; */
  /* } */

  /* .scene:focus + .flooring { */
  /*   display: none; */
  /* } */

</style>

<div>
  <div class="grid sm:grid-cols-3 grid-cols-1 gap-8 justify-items-center m-4">
    {#each products as product}
      <div class="card w-96 h-96 glass shadow-md shadow-gray-800" >
	<figure > 
	  <img src={product.path} alt={product.name} />
	</figure>
	
	<div class="card-body">
	  <h2 class="card-title">
	    {product.name}
	    <div class="badge badge-info">NEW</div>
	  </h2>
	  <p>If a dog chews shoes whose shoes does he choose?</p>
	  <div class="card-actions justify-end">
	    <div class="badge badge-outline">{product.type}</div> 
	    <div class="badge badge-outline">Products</div>
	  </div>
	</div>
      </div>
    {/each}
  </div> 
</div>
