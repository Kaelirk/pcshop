import {FaPlug, FaFire, FaSave, FaMicrochip, FaRecycle, FaImage, FaHome} from "react-icons/fa";


const SideBar = () => {
    return (
        <div className="relative top-0 left-0 h-screen w-20 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-">

          <SideBarIcon icon={<FaHome size ="30" />} text={"Home Page"} tabName={"home"}/>
          <Spacer />
          <SideBarIcon icon={<FaPlug size ="30" />} text={"PSUs"} tabName={"psu"}/>
          <SideBarIcon icon={<FaFire size ="30" />} text={"MoBos"} tabName={"mobo"}/>
          <SideBarIcon icon={<FaMicrochip size ="30" />} text={"CPUs"} tabName={"cpu"}/>
          <SideBarIcon icon={<FaRecycle size ="30" />} text={"RAM"} tabName={"ram"}/>
          <SideBarIcon icon={<FaImage size ="30" />} text={"GPUs"} tabName={"gpu"}/>
          <SideBarIcon icon={<FaSave size ="30" />} text={"HDDs & SSDs"} tabName={"hddssd"}/>

        </div>
    );
};
/*The on click had to be passed instead of called, which is why it became onClick={()=> changeTab(text)}
instead of onclick={changeTab(text)}*/
const SideBarIcon = ({ icon, text, tabName, isActive}) => (
    <b className="sidebar-icon group" onClick={()=> changeTab(text)}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100 select-none">
            {text}
        </span>
    </b>
);

const Spacer = () => <hr className="sidebar-hr h-5" />;

function changeTab (tabName) {
    console.log(tabName)
}

export default SideBar;
