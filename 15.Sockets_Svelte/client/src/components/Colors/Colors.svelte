<script>
    import { onMount } from 'svelte';

    import { BASE_URL } from '../../stores/generalStore.js';

    import io from 'socket.io-client';

    

    let socket = $state();

    let colorInput =  $state("#0000ff");

    onMount(() => {
        socket = io($BASE_URL, {
            withCredentials: true
        });

        socket.on("server-sends-color", (data) => {
            // dont do this, this is DOM MANIPULATION, do it svelte way
            document.body.style.backgroundColor = data.data;
        });

    });

    
function submitColor() {
    socket.emit("client-sends-color",{ data : colorInput})
    
}


</script>


<h1>Colors</h1>
<!-- <svelte:body style:background-color={"#ff0000"}/> -->
<input type="color" bind:value={colorInput}>
<button type="submit" onclick={submitColor}> Submit color</button>
