<script>
  import { onMount } from 'svelte';
  export let text;

  let invisible = text;
  let visibile = '';
  let time = 0;
  let next;

  function getText(string) {

    for (let i = 0; i < string.length; i++) {
      setTimeout(function() {
        let char = string.charAt(i);
        visibile += char;
        invisible = text.substr(i + 1, text.length);
        
      }, timer(string.charAt(i - 1)));
    }
  }

  function timer(next) {
    time += 1;
    return time;
  }

  onMount(() => {
    text = text.replace(' ', ',');
    getText(text);
  })
</script>

<style>

  @font-face {
    src: url('UbuntuMono-Bold.woff2') format('woff2'),
          url('UbuntuMono-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-family: 'Ubuntu Mono';
  }

  @font-face {
    font-family: 'Press Start 2P';
    src: url('PressStart2P-Regular.woff2') format('woff2'),
        url('PressStart2P-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .terminal {
    background-color: black;
    font-family: 'Ubuntu Mono';
    display: flex;
    width: 100%;
    z-index: 100;
    overflow: hidden;
  }

  .invisible {
    color: black;
    background-color: black;
    font-family: 'Ubuntu Mono';
    /* flex: 1; */
    /* width: fit-content; */
    width: 100%;
    font-size: 0.52vw;
    /* line-height: 0.2em; */
  }

  .visible {
    color: rgb(255,62,0);
    background-color: black;
    /* flex: 1; */
    font-family: 'Ubuntu Mono';
    /* width: fit-content; */
    width: 100%;
    font-size: 0.52vw;
    /* line-height: 0.2em; */
  }
</style>

<div class="terminal">
  <span class="visible">{ visibile }</span>
</div>