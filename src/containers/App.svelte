<script>
    import { onMount } from 'svelte';
    import Header from './../components/Header.svelte';
    import Main from './../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from './../components/Sidebar.svelte';
    import Card from '../components/Card.svelte';


    let data = {};
    const API = 'https://kittygram-api-lg7jjtvfh.now.sh';

    onMount(async ()=>{
        const response = await fetch(API);
        data = await response.json();
        //TEMP: Quirk to fix missing pic
        data.posts[0].avatar = 'https://media.kidadl.com/5fca609558f6ce3b7edd362e_cats_jokes_can_bring_you_oodles_of_laughter_e349432cab.jpeg';
        data.posts[0].photo = 'https://media.kidadl.com/5fca609558f6ce3b7edd362e_cats_jokes_can_bring_you_oodles_of_laughter_e349432cab.jpeg';
        console.log('app:' + data.user);
        console.log('app.svelte: nickname :'+ data.user.nickname);
        console.log('app.svelte: name :'+ data.user.name);
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    

    :global(body){
        background-color: #fafafa;
        color: rgba(38, 38, 38, 0.7);
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }
    :global(h1, h2, h3){
        margin: 0;
        padding: 0;
    }
    
</style>

<Header />
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user}/>
</Main>

