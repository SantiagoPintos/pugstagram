<script>
    import Profile from './Profile.svelte';
    import Stories from './Stories.svelte';
    import Footer from './Footer.svelte';

    export let nicknanme;
    export let name;

    console.log('sidebar nickname' + nicknanme);
    console.log('sidebar name '+ name);
</script>

<style>
    .Sidebar {
      position: relative;
      padding: 4.5em 0 0 0;
    }
    .Sidebar-container {
      position: fixed;
    }
</style>

<div class="Sidebar">
    <div class="Sidebar-container">
        <Profile {nicknanme} {name} />
        <Stories />
        <Footer />
    </div>
</div>