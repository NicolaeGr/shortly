<script lang="ts">
  import axios from 'axios';

  import { onMount } from 'svelte';
  import ShortenedLinkComponent from './ShortenedLinkComponent.svelte';

  import type ShortenedLink from './sharedLink';

  let formInput: HTMLInputElement;
  let warningMessage: HTMLParagraphElement;

  $: shortenedLinks = [] as ShortenedLink[];

  const validateUrl = (url: string): boolean => {
    const expression: RegExp =
      /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    return expression.test(url);
  };

  const submitUrl = async (event: Event) => {
    event.preventDefault();

    if (!formInput) return;

    if (validateUrl(formInput.value)) {
      try {
        const response = await axios.get('https://api.shrtco.de/v2/shorten', {
          params: {
            url: formInput.value
          }
        });

        const data = response.data as ShortenedLink;

        if (!data) return;

        shortenedLinks.push(data);
        shortenedLinks = shortenedLinks;

        localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks));
      } catch (err) {
        console.error('Error shortening link:', err);
      }

      formInput.value = '';
    } else {
      formInput.classList.add('form_failed');
      warningMessage.classList.add('form_failed');

      setTimeout(() => {
        formInput.classList.remove('form_failed');
        warningMessage.classList.remove('form_failed');

        formInput.value = '';
      }, 2000);
    }
  };

  onMount(() => {
    let storedLinks = localStorage.getItem('shortenedLinks');
    if (storedLinks) {
      shortenedLinks = JSON.parse(storedLinks);
    }
  });
</script>

<section>
  <div class="container">
    <form action="POST">
      <label>
        <input bind:this={formInput} name="url" type="text" placeholder="Shorten a link here..." />
        <p bind:this={warningMessage}>Please add a link!</p>
      </label>
      <button on:click={submitUrl} on:submit={submitUrl}> Shorten it! </button>
    </form>

    {#each shortenedLinks as shortenedLink}
      <ShortenedLinkComponent {shortenedLink} />
    {/each}
  </div>
</section>

<label hidden>
  <input hidden class="form_failed" />
  <p hidden class="form_failed" />
</label>

<style>
  section {
    position: relative;
  }

  section::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eff1f7;
    opacity: 0.9;
    z-index: -1;
  }

  .container {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding-bottom: 120px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 48px;

    background-color: var(--color-primary-dark-violet);
    background-image: url('images/bg-shorten-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 160px;
    border-radius: 12px;
  }

  form label {
    flex: 1 0 60%;

    position: relative;
  }

  form input {
    height: 58px;
    width: 100%;

    border: none;
    outline: none;
    border-radius: 8px;
    padding: 12px;

    font-size: 1rem;
    font-weight: 500;
    color: var(--color-neutral-grayish-violet);
  }

  input.form_failed {
    border: 3px solid var(--color-secundary-red);
  }

  form button {
    color: white;
    font-size: 1rem;
    font-weight: 700;

    padding: 16px 32px;

    border: none;
    border-radius: 8px;
    background-color: var(--color-primary-cyen);
  }

  label p {
    display: none;
  }

  label p.form_failed {
    display: inline;
    position: absolute;
    left: 0px;
    bottom: -44px;

    font-style: italic;
    color: var(--color-secundary-red);
  }
</style>
