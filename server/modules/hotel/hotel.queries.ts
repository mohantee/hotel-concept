export const GET_HOTELS = `
  SELECT
    hotel.id AS hotel_id,
    hotel.name AS hotel_name,
    country.id AS country_code,
    country.name AS country_name,
    city.id AS city_code,
    city.name AS city_name
  FROM
    hotel
  JOIN
    city ON hotel.city_code = city.id
  JOIN
    country ON hotel.country_code = country.id;
`;

export const ADD_HOTEL = `
  INSERT INTO hotel (id, name, city_code, country_code)
  VALUES (?, ?, ?, ?);
`;

export const DELETE_HOTEL = `
  DELETE FROM hotel
  WHERE id = ?
`;

export const GET_LATEST_HOTEL_CODE = `
  SELECT id FROM hotel ORDER BY created_at desc limit 1
`;
