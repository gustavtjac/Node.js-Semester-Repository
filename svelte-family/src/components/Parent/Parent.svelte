<script>
    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let { name, children } = $props();

    console.log(children)

    function handleShowLove(name) {
        console.log(name + ' Loves you' )
    }
    function handleStealCookie(name) {
        cookieJar.pop();
        console.log(name + ' Stole a cookie')
    }


    const cookieJar = $state(['🍪', '🍪', '🍪', '🍪','🍪', '🍪', '🍪', '🍪'])
    const monsterFridge = $state(['🍾','🍾','🍾','🍾','🍾','🍾','🍾','🍾','🍾'])

</script>

<button onclick={fridgeMessages.wipe}>Wipe fridge</button>

<h1>My name is {name}.</h1>

{#each cookieJar as cookie}

<div>{cookie}</div>
    
{/each}

{#each monsterFridge as drink}
    <div>{drink}</div>
{/each}

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onStealCookie={handleStealCookie} monsterFridge={monsterFridge}/>
{/each}