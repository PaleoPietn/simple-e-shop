import { faClock, faCompass, faGear, faHeart, faHome, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <div className="h-screen p-4 flex flex-col">

      <SidebarButton label="Home" icon={faHome} route="/" />
      <SidebarButton label="Explore" icon={faCompass} route="/explore" />
      <SidebarButton label="Saved" icon={faHeart} route="/favorites" />
      <SidebarButton label="Profile" icon={faUser} route="/profile" />
      <SidebarButton label="History" icon={faClock} route="/history" />
      <SidebarButton label="Contact" icon={faMessage} route="/contact" />
      <SidebarButton label="Settings" icon={faGear} route="/settings" />
    </div>
  )
}
