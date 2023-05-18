<section>
  <div class="container">
    <h2>Boost your links today</h2>
    <button>Get Started</button>
  </div>
</section>

<!-- 
Unless those elements are present, 
vite will not bundle in the app the necessary classes and images
-->
<img hidden src="images/bg-boost-desktop.svg" alt="" />
<img hidden src="images/bg-boost-mobile.svg" alt="" />

<style>
  section {
    position: relative;
    background-color: var(--color-primary-dark-violet);
    background-image: url('https://shortly.nicolaegrosu.me/images/bg-boost-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    flex-direction: column;
    padding: 120px 0;
  }

  h2 {
    font-size: 2.5rem;
    color: white;
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

  @media (max-width: 680px) {
    h2 {
      font-size: 2rem;
    }

    section {
      background-image: url('https://shortly.nicolaegrosu.me/images/bg-boost-mobile.svg');
    }
  }
</style>
