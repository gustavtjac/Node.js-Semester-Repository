
<script>
import { fetchGet, fetchPost } from "../../util/fetchUtil.js";
import { onMount } from "svelte";

let visitorsCount;

onMount( async () => {
    visitorsCount = (await fetchGet('/api/visitors')).data;
});


async function visitRestaurant() {
   visitorsCount = (await fetchPost('/api/visitors')).data;     
}

</script>



<h1>Visitors</h1>

<h3>{visitorsCount}</h3>


<button onclick={visitRestaurant}>Visit</button>