
<script>
    const { countdownFrom } = $props();

    let count = $state(countdownFrom);

    function decreateCount(){
        count -= 1;
    }
</script>


<h3>Counter </h3>
<h4>{count}</h4>


<button onclick={decreateCount}>Decrease</button>