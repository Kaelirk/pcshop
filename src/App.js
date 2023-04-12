import ShopBasket from './ShopBasket';
import SideBar from './SideBar';
import StoreBar from './StoreBar';

function App() {
  return (
    <div className="flex">
     <SideBar />
     <StoreBar />
     <ShopBasket />
    </div>

  );
}


export default App;
