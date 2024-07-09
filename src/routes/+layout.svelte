<script>
    import Navbar from '$lib/nav.svelte';
  
    const links = [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Discover', url: '/discover'},
      { text: 'Profile', url: '/profile'}
    ];
  </script>
  
  
  <Navbar {links} />
  
  <slot />
  