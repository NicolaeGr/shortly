<script lang="ts">
  import type ShortenedLink from './sharedLink';

  export let shortenedLink: ShortenedLink;

  let isCopied = false;

  const copyLink = () => {
    navigator.clipboard
      .writeText(shortenedLink.result.full_short_link)
      .then(() => {
        isCopied = true;

        setTimeout(() => {
          isCopied = false;
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<div class="link_card">
  <span class="full_link">{shortenedLink.result.original_link}</span>
  <div>
    <div class="shortened_link">{shortenedLink.result.full_short_link}</div>
    <button class:clicked={isCopied} on:click={copyLink}>{isCopied ? 'Copied!' : 'Copy'}</button>
  </div>
</div>

<style>
  .link_card {
    justify-content: space-between;

    width: 100%;
    height: 64px;

    padding: 24px;

    background-color: white;
    border-radius: 8px;

    font-size: 1rem;
  }

  .link_card > div {
    gap: 24px;
  }

  .shortened_link {
    color: var(--color-primary-cyen);
  }

  button {
    color: white;
    font-size: 1rem;
    font-weight: 700;

    padding: 6px 0;
    width: 108px;

    border: none;
    border-radius: 8px;
    background-color: var(--color-primary-cyen);
  }

  button.clicked {
    background-color: var(--color-neutral-very-dark-violet);
  }
</style>
