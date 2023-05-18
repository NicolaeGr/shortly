<script lang="ts">
  import '../app.css';
</script>

<header>
  <div class="container">
    <div class="right">
      <img class="logo" src="images/logo.svg" alt="Shortly" />
      <nav>
        <div class="link">Features</div>
        <div class="link">Pricing</div>
        <div class="link">Resources</div>
      </nav>
    </div>
    <div class="left">
      <button class="login">Login</button>
      <button class="signup">Sign Up</button>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<footer>
  <div class="container">
    <img class="logo" src="images/logo.svg" alt="" />
    <nav>
      <div class="link_category">
        <span class="title">Features</span>
        <span class="link">Link Shortening</span>
        <span class="link">Branded Links</span>
        <span class="link">Analysis</span>
      </div>
      <div class="link_category">
        <span class="title">Resources</span>
        <span class="link">Blog</span>
        <span class="link">Developers</span>
        <span class="link">Support</span>
      </div>
      <div class="link_category">
        <span class="title">Company</span>
        <span class="link">About</span>
        <span class="link">Our Team</span>
        <span class="link">Career</span>
        <span class="link">Contact</span>
      </div>
      <div class="socials">
        <img src="images/icons/icon-facebook.svg" alt="" class="social" />
        <img src="images/icons/icon-twitter.svg" alt="" class="social" />
        <img src="images/icons/icon-pinterest.svg" alt="" class="social" />
        <img src="images/icons/icon-instagram.svg" alt="" class="social" />
      </div>
    </nav>
  </div>
</footer>

<style>
  header > .container,
  footer > .container {
    justify-content: space-between;
    font-weight: 700;
    color: var(--color-neutral-grayish-violet);
    height: 120px;
  }

  header nav {
    display: flex;
    gap: 24px;

    margin: 24px;
  }

  .logo {
    height: 32px;
    margin-right: 16px;
  }

  header .left {
    gap: 32px;
  }

  header button {
    font-weight: 700;
    font-size: 1rem;
  }

  header .login {
    color: var(--color-neutral-grayish-violet);

    background-color: unset;
    border: none;
  }

  header .signup {
    padding: 8px 16px;

    color: white;
    border-radius: 32px;

    background-color: var(--color-primary-cyen);
    border: 1px solid var(--color-primary-cyen);
  }

  footer {
    background-color: var(--color-neutral-very-dark-violet);
  }

  footer > .container {
    height: unset;
    padding: 80px 0;
  }

  footer .logo {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(0deg) brightness(104%) contrast(101%);
    margin-bottom: auto;
  }

  footer nav {
    display: flex;
    gap: 80px;
  }

  footer .link_category {
    align-items: start;
    flex-direction: column;
    gap: 8px;
  }

  footer .link_category .title {
    color: white;
    padding-bottom: 12px;
  }

  footer .link_category .link {
    font-weight: 500;
  }

  footer .socials {
    gap: 24px;
    align-items: start;
  }
</style>
