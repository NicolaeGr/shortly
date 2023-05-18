<section>
  <div class="container">
    <div class="header">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </div>

    <div class="card_wrapper">
      <div class="card c1">
        <div class="img_wrp">
          <img src="images/icons/icon-brand-recognition.svg" alt="" />
        </div>
        <h3 class="name">Brand Recognition</h3>
        <p class="descript">
          Boost your brand recognition with each click. Generic links don't mean a thing. Branded
          links help instil confidence in your content.
        </p>
      </div>
      <div class="card c2">
        <div class="img_wrp">
          <img src="images/icons/icon-detailed-records.svg" alt="" />
        </div>
        <h3 class="name">Detained Records</h3>
        <p class="descript">
          Gain insight into who is clicking your links. Knowing when and where people engage in your
          content helps inform better decisions.
        </p>
      </div>
      <div class="card c3">
        <div class="img_wrp">
          <img src="images/icons/icon-fully-customizable.svg" alt="" />
        </div>
        <h3 class="name">Fulls Costumizable</h3>
        <p class="descript">
          Inprove brand awareness with content discoverability through costumizable links,
          supercharging audience engagement.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    padding-bottom: 128px;
    background-color: #eff1f7;
  }

  .container,
  .header,
  .card {
    flex-direction: column;
    z-index: 1;
  }

  .header h2 {
    font-size: 2.5rem;
    margin: 0px;
  }

  .header p {
    color: var(--color-neutral-grayish-violet);
    width: 75%;
    text-align: center;
  }

  .card_wrapper {
    position: relative;

    justify-content: center;
    align-items: start;
    gap: 64px;

    margin-top: 72px;
  }

  .card_wrapper::after {
    content: '';
    position: absolute;
    height: 8px;
    width: 100%;
    margin: auto;
    top: 50%;
    background-color: var(--color-primary-cyen);
    opacity: 0.9;
    z-index: 0;
  }

  .card {
    position: relative;

    flex: 1 0;
    align-items: start;
    gap: 16px;

    padding: 32px;
    padding-top: 64px;

    background-color: white;
    border-radius: 8px;
  }

  .card.c1 {
    margin-top: 44px;
  }

  .card.c2 {
    margin-top: 88px;
  }

  .card.c3 {
    margin-top: 132px;
  }

  .img_wrp {
    position: absolute;
    background-color: var(--color-primary-dark-violet);
    padding: 24px;

    border-radius: 50%;

    left: 32px;
    top: -44px;
  }

  .card .name {
    margin: 0px;
  }

  .card .descript {
    margin: 0px;
    font-size: 0.9rem;
    color: var(--color-neutral-grayish-violet);
  }

  @media (max-width: 880px) {
    .header h2 {
      font-size: 2rem;
      margin: 0px;
    }

    .card_wrapper {
      flex-direction: column;
    }

    .card_wrapper::after {
      width: 8px;
      height: calc(100% - 88px);
      margin: auto;
      top: 88px;
      left: 50%;
      background-color: var(--color-primary-cyen);
      opacity: 0.9;
      z-index: 0;
    }

    .card,
    .card.c1,
    .card.c2,
    .card.c3 {
      max-width: 400px;
      margin-top: 88px;
    }
  }
</style>
