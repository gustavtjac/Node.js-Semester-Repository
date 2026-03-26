<script>
    let { name, familySheep, isGirl, onShowLove, onStealCookie, monsterFridge = $bindable() } = $props();

import { fridgeMessages } from "../../stores/fridgeStore.js";

let fridgeMessageInput = $state("");

function handleSubmitFridgeMessage(){
const fridgeMessageToCreate = {
    name,
    message: fridgeMessageInput
}
    $fridgeMessages.push(fridgeMessageToCreate)
    fridgeMessages.set($fridgeMessages)
    fridgeMessageInput = "";
}

</script>



<div
    class={familySheep || "notASheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    >
    
    <h3>Im a child and my name is { name } </h3>
    <button onclick={() => onShowLove(name)}>Shows love:</button>
    <button onclick={() => onStealCookie(name)}>Steal cookie:</button>
     <button onclick={() => monsterFridge.pop()}>Drink a monster:</button>
</div>


<input bind:value={fridgeMessageInput} placeholder="Type your message">

<button onclick={handleSubmitFridgeMessage}>Submit message</button>


<style>

    div {
        color: white;
    }
    .black-sheep{
        background-color: black;
    }
    .grey-sheep{
        background-color: rgb(94, 94, 94);
    }
    .notASheep{
        background-color: red;
    }

    .is-girl{
        border: 3px dashed palegoldenrod;
    }



    .is-boy{

    }

</style>