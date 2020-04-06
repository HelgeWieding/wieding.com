<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  export let text;
  export let speed = 1;

  const dispatch = createEventDispatcher();

  let invisible = text;
  let visibile = '';
  let time = 0;
  let next;
  let baseTime = 10;
  let spaceTime = 20;
  let dotTime = 150;
  let commaTime = 100;

  function getText(string) {

    for (let i = 0; i < string.length; i++) {
      setTimeout(function() {
        let char = string.charAt(i);
        visibile += char;
        invisible = text.substr(i + 1, text.length);
        
        if (i === string.length - 1) {
          done();
        }
        
      }, timer(string.charAt(i - 1)));
    }
  }

  function done() {
		dispatch('message', {
			done: true
		});
	}

  function timer(next) {
    
    let add;
    switch(next) {
      case ' ':
        add = spaceTime;
        break;
      case ',':
        add = commaTime;
        break;
      case '.':
        add = dotTime;
        break;
      default:
        add = baseTime;
    }

    time += Math.random() * 5 + speed + add;
    return time;
  }

  onMount(() => {
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
    font-size: 1em;
  }

  .visible {
    color: rgb(255,62,0);
    background-color: black;
    /* flex: 1; */
    font-family: 'Ubuntu Mono';
    /* width: fit-content; */
    width: 100%;
    font-size: 1em;
  }
</style>

<div class="terminal">
  <span class="visible">{ visibile }</span><span class="invisible">{ invisible }</span>
</div>