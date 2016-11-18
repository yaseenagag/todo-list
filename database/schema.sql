DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_array INTEGER[]
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(512),
  completed BOOLEAN DEFAULT false,
  tab_id SERIAL
);
