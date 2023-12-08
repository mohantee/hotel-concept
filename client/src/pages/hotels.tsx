import { useGetHotels } from "../api/hotel/get-hotels";
import { AddHotelDialog } from "../components/add-hotel-dialog";
import { useAuthContext } from "../context/auth";

import "./hotels.css";

export function Hotels() {
  const { logout } = useAuthContext();
  const { data: hotels } = useGetHotels();

  return (
    <div className="container">
      <div className="hotel__header">
        <h1>Hotel List</h1>
        <div className="btn-group">
          <AddHotelDialog />
          <button onClick={() => logout()} className="btn">
            Logout
          </button>
        </div>
      </div>
      <table className="hotel__table">
        <thead>
          <tr>
            <th>Hotel Code</th>
            <th>Hotel Name</th>
            <th>City Code</th>
            <th>City Name</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {hotels?.map((hotel) => {
            return (
              <tr key={hotel.hotel_id}>
                <td>{hotel.hotel_id}</td>
                <td>{hotel.hotel_name}</td>
                <td>{hotel.city_code}</td>
                <td>{hotel.city_name}</td>
                <td>{hotel.country_code}</td>
                <td>{hotel.country_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
