<section>
  <div class="container">
    <div class="content">
      <h1>More then just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
      <button>Get Started</button>
    </div>
    <div class="image_wrapper">
      <img src="images/illustration-working.svg" alt="" />
    </div>
  </div>
</section>

<style>
  section {
    margin: 32px 0px 64px;
  }

  .container > * {
    flex: 1 0 55%;
  }

  .content {
    flex-direction: column;
    align-items: start;
    gap: 24px;
  }

  h1 {
    color: var(--color-neutral-very-dark-violet);
    font-size: 5rem;
    margin: 0px;
    line-height: 5rem;
  }

  p {
    color: var(--color-neutral-grayish-violet);
    font-size: 1.5rem;
    margin: 0px;
  }

  button {
    color: white;
    font-size: 1rem;
    font-weight: 700;

    padding: 16px 32px;

    border: none;
    border-radius: 32px;
    background-color: var(--color-primary-cyen);
  }

  .image_wrapper {
    padding-left: 120px;
  }

  @media (max-width: 1080px) {
    .content {
      flex: 1 0 60%;
    }

    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }

    p {
      font-size: 1.3rem;
    }

    .image_wrapper {
      padding: 32px;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .container {
      flex-direction: column-reverse;
      gap: 32px;
    }

    .content {
      align-items: center;
    }

    .content > * {
      text-align: center;
    }

    .image_wrapper {
      position: relative;
      justify-content: end;
      padding: 0px;
      padding-bottom: 320px;
      width: 100%;
    }

    .image_wrapper img {
      position: absolute;
      left: 10%;
      top: 0px;
      bottom: 0px;
      height: 100%;
      width: unset;
      aspect-ratio: 733 / 482;
    }

    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
</style>
