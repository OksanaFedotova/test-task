CREATE TABLE data_test (
  ID SERIAL PRIMARY KEY,
  date VARCHAR(255),
  name VARCHAR(255),
  amount VARCHAR(255),
  distance VARCHAR(255)
);
INSERT INTO data_test (date, name, amount, distance)
  VALUES ('1703', 'Saint-Petersburg', '4991000', '703,8');
