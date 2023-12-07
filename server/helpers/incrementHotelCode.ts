export function incrementHotelCode(id: string) {
  let integer = parseInt(id.slice(2));
  integer++;

  const nextHotelCode = "EL" + integer.toString().padStart(3, "0");
  return nextHotelCode;
}
