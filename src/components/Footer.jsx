import '../App.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='container'>
      <p className="subheading">Built in React</p>
      <p className="subheading">© {currentYear} Rey Isaac Jr.</p>
    </footer>
  );
}
