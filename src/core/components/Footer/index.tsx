const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{' '}
          <a
            href="https://github.com/joaopaulu"
            target="_blank"
            rel="noreferrer"
          >
            João Paulo Lima
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Disciplina Arquitetura JavaScript - React</strong>
            <br />
            Prof: Raphael Gomide
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
