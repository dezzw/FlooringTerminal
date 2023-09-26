<script>
  import { onMount } from 'svelte';
  import "../app.css";

  let hiddenElements = [];
  
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

    hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.observe(el));
  });
</script>

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

<div> 
  <section class="hide flex relative mx-8 items-center show">
    <div class="z-30"> 
      <div class="text-4xl">Explore Our Collections</div>
      <br/>
      <div class="text-6xl font-bold">Welcome to Flooring Terminal</div>
      <br/>
      <a class="text-3xl underline underline-offset-8" href="/products/all">Explore All -></a>
    </div>

    <img class="h-4/5 absolute right-0" src="/7mm/CHANGI_Scence.jpg" alt="view">
  </section>

  <!-- <section class="hide relative m-8"> -->
    <!--   <div class="absolute relative left-1/3 top-16"> -->
      <!--     <img class="absolute h-3/5" src="/LongBeach_Scene.jpeg" alt="0" loading="lazy"> -->
      <!--     <img class="absolute h-1/4 top-[45%] -left-[10%]" src="/LongBeach.jpeg" alt="0" loading="lazy"> -->
      <!--   </div> -->
    <!--   <div class="absolute top-[70%]">  -->
      <!--     <div class="text-9xl" >Find your favourite</div> -->
      <!--     <br/> -->
      <!--     <div class="text-4xl underline underline-offset-8">Click Here -></div> -->
      <!--   </div> -->
    <!-- </section> -->

  <section class="hide">
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/CHANGI_Scence.jpg" alt="Changi" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide4" class="btn btn-circle btn-primary ">❮</a> 
	  <a href="#slide2" class="btn btn-circle btn-primary	">❯</a>
	</div>
	<div class="absolute transform -translate-y-1/2 top-[80%] left-1/2">
	  <div class="dropdown dropdown-left dropdown-end">
	    <label tabindex="0" class="btn btn-circle btn-outline text-black border-4 p-0 min-h-0 w-4 h-4 m-1"></label>
	    <div tabindex="0" class="dropdown-content z-[1] card w-96 glass p-2 shadow text-primary-content">
	      <figure><img src="/7mm/CHANGI.JPG" alt="CHANGI"/></figure>
	      <div class="card-body">
		<h2 class="card-title">CHANGI</h2>
		<p>How to park your car at your garage?</p>
	      </div>
	    </div>
	  </div>
	</div>
      </div> 
      <div id="slide2" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/DUBAI_Scene.jpg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide1" class="btn btn-circle btn-primary	">❮</a> 
	  <a href="#slide3" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div> 
      <div id="slide3" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/HAMAD_Scene.jpg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide2" class="btn btn-circle btn-primary">❮</a> 
	  <a href="#slide4" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div> 
      <div id="slide4" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/lncheon_Scence.jpg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide3" class="btn btn-circle btn-primary">❮</a> 
	  <a href="#slide5" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div>
      <div id="slide5" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/LongBeach_Scene.jpeg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide4" class="btn btn-circle btn-primary">❮</a> 
	  <a href="#slide6" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div>
      <div id="slide6" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/Meilan_Scence.jpg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide5" class="btn btn-circle btn-primary">❮</a> 
	  <a href="#slide7" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div>
      <div id="slide7" class="carousel-item relative w-full">
	<div class="flex items-center justify-center w-full h-full bg-black">
	  <img src="/7mm/Pearson_Scence.jpg" class="h-full w-auto">
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
	  <a href="#slide6" class="btn btn-circle btn-primary">❮</a> 
	  <a href="#slide1" class="btn btn-circle btn-primary">❯</a>
	</div>
      </div>
    </div>
  </section>
</div>
