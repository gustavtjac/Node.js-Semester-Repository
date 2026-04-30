<script>
    import { BASE_URL } from "../../stores/generalStore.js";
    import { nickname } from "../../stores/nicknameStore.js";
    let nicknameInput = $state("");


    async function submitNickname() {
       const response = await fetch(`${$BASE_URL}/nicknames`,{
            credentials: 'include',
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({ nickname: nicknameInput })
        })

        const result = await response.json();
        console.log(result);

        nickname.set(result.data);

        localStorage.setItem('nickname', result.data)
    }   


</script>

<input bind:value={nicknameInput}  placeholder="Nickname...">
<button onclick={submitNickname} type="submit">Submit</button>


