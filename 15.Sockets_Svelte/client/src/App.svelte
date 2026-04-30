<script>
  import { onMount } from "svelte";
  import { nickname } from "./stores/nicknameStore.js";
  import Colors from "./components/Colors/Colors.svelte";
  import Register from "./components/Register/Register.svelte";


  onMount(()=>{
    const lsNickname = localStorage.getItem('nickname')
    
    if(lsNickname){
      nickname.set(lsNickname);
    }

  });
</script>


{#if !$nickname}
<Register/>
{:else}
 <Colors/>
{/if}


