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

    overflow: hidden;
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

  @media (max-width: 680px) {
    .link_card {
      flex-direction: column;
      height: unset;
      max-width: 400px;
      padding: 16px;
    }

    .full_link,
    .shortened_link,
    button {
      width: 100%;
    }

    .link_card > div {
      position: relative;
      flex-direction: column;
      width: 100%;
      gap: 8px;

      margin-top: 16px;
    }

    .link_card > div ::before {
      content: '';
      position: absolute;
      width: calc(100% + 32px);
      height: 1px;
      top: -4px;
      left: -16px;
      right: -16px;
      background-color: var(--color-neutral-grayish-violet);
    }

    button {
      padding: 8px 0px;
    }
  }
</style>
