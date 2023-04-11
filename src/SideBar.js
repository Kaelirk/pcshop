import {FaPlug, FaFire, FaSave, FaMicrochip, FaRecycle, FaImage} from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">

          <SideBarIcon icon={<FaPlug size ="30" />} />
          <SideBarIcon icon={<FaFire size ="30" />} />
          <SideBarIcon icon={<FaSave size ="30" />} />
          <SideBarIcon icon={<FaMicrochip size ="30" />} />
          <SideBarIcon icon={<FaRecycle size ="30" />} />
          <SideBarIcon icon={<FaImage size ="30" />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'Tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;
