import {useState , useEffect} from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    const [selectedTheme, setSelectedTheme] = useState(
        sessionStorage.getItem("theme") || "light"
    );

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", selectedTheme);
        sessionStorage.setItem("theme",selectedTheme);
    },[selectedTheme]);
  return (
    <>
    <div>
      <nav className="bg-primary text-primary-content flex justify-between items-center px-7 py-5 s/ticky top-0 shadow-lg ">
        <div className="flex items-center gap-3">
         
          <span className="text-4xl font-medium cursor-pointer font-serif tracking-tight ">ChatApp</span>
        </div>
        <div className="flex gap-6 text-[20px] font-serif  items-center">
          <Link to="/" className="hover:bg-secondary hover:text-secondary-content px-3 py-2 rounded transition">Home</Link>
          <Link to="/about" className="hover:bg-secondary hover:text-secondary-content px-3 py-2 rounded transition">About</Link>
          <Link to="/contact" className="hover:bg-secondary hover:text-secondary-content px-3 py-2 rounded transition">Contact</Link>
          <Link to="/services" className="hover:bg-secondary hover:text-secondary-content px-3 py-2 rounded transition">Services</Link>
          <Link to="/login" className="hover:bg-secondary hover:text-secondary-content px-3 py-2 rounded transition">Login</Link>
          <select
            name="theme"
            value={selectedTheme}
            onChange={(e) => {
              setSelectedTheme(e.target.value);
              document.documentElement.setAttribute(
                "data-theme",
                e.target.value
              );
              sessionStorage.setItem("theme", e.target.value);
            }}
            className="select select-bordered border-2 border-secondary bg-base-100 text-base-content focus:ring-2 focus:ring-secondary rounded-lg shadow-sm px-2 py-1"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="pastel">Pastel</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="spotify">Spotify</option>
            <option value="valorant">Valorant</option>
            <option value="vscode">VS Code</option>
          </select>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
