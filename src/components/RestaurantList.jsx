const RestaurantList = () => {
  return (
    <table class="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Restaurant</th>
          <th scope="col">Location</th>
          <th scope="col">Price Range</th>
          <th scope="col">Ratings</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td >Mark</td>
          <td >Otto</td>
          <td >@mdo</td>
          <td >0.5</td>
          <td><button className="btn btn-warning btn-sm">Edit</button></td>
          <td><button className="btn btn-danger btn-sm">delete</button></td>
        </tr>
      </tbody>
    </table>
  );
};
export default RestaurantList;
