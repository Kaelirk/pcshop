const StoreBar = () => {
    return (
        <div className="static top-0 left-20 h-screen w-screen m-0
                        flex flex-col
                        bg-gray-500 text-white shadow-lg">
          
          <form className="pc-component-list">
            <div className="form-row">
                <label>Select your component(s)</label>
            </div>
          </form>
        </div>
    );
};


export default StoreBar;