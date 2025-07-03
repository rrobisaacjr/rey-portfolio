import '../App.css';

export default function HeaderName() {
  return (
      <header className="container">
      <div class="profile-name">
        <img
          src="/loq.png"
          alt="Profile"
          className="avatar2"
        />

        <div class="name-and-job">
          <p className="subheading bold">Reynaldo Isaac Jr.</p>
          <p className="subheading">AI Developer | Software Engineer</p>
        </div>
      </div>
    </header>
  );
}