<script>
    import { fetchGet, fetchPost } from "../../util/fetchUtil.js";
    import { onMount } from "svelte";

    let restaurants;

    onMount(async () => {
       restaurants = (await fetchGet('/api/restaurants')).data
    });
</script>

<h1>Restaurants</h1>

{#each restaurants as restaurant}
    <h4>{restaurant}</h4>
{/each}
