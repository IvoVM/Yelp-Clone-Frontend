const AddRestaurant = () => {
  return (
    <div className="mb-4 p-4">
      <form >
        <div className="row ">
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <select className="form-select  mr-sm-2">
                <option selected>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col ">
            <button className="btn btn-outline-success  w-50">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
