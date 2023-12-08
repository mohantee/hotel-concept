export const USER_BY_USERNAME = `
  SELECT * FROM user WHERE username = ?;
`;

export const USER_BY_EMAIL = `
  SELECT * FROM user WHERE email = ?;
`;

export const CREATE_USER = `
  INSERT INTO user (email, username, password) VALUES (?, ?, ?); 
`;
