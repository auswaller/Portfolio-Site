import Container from 'react-bootstrap/Container';

function PageNav() {
  return (
    <Container>
      <footer class="d-flex flex-wrap justify-content-between align-items-center my-3 border-top">
        <p class="col-md-4 mb-0 text-body-secondary ">&copy; Austin Waller</p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="https://github.com/auswaller" class="nav-link px-2 text-body-secondary">GitHub</a></li>
          <li class="nav-item"><a href="https://www.linkedin.com/in/austin-waller-54870011/" class="nav-link px-2 text-body-secondary">LinkedIn</a></li>
        </ul>
      </footer>
    </Container>
  );
}

export default PageNav;