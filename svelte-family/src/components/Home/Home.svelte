<script>
import { fridgeMessages } from '../../stores/fridgeStore.js'

</script>


{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.name || "Household"}: {fridgeMessage.message}</p>
{/each}

<h1>Home</h1>



<slot></slot>

<div id="welcome-mat">
    <p>Go Away</p>
</div>



<style>
    #welcome-mat{
        font-weight: bolder;
        color: rgb(195, 202, 202);
        background-color: brown;
        padding: 2em;
        margin: 0 2em 0 20em;
        border-radius: 0 0 2em 2em ;
    }
</style>