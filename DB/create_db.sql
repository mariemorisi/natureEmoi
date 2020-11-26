-- Plants

DROP TABLE IF EXISTS "plants";

CREATE TABLE IF NOT EXISTS "plants" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "category" TEXT, -- REAL correspond à "nombre à virgule"
  "price" REAL NOT NULL,
  "css_class" TEXT
);

INSERT INTO "plants"("id","name", "description", "category", "price", "css_class") VALUES
(1,'Calathea', 'Belle plante verte en pot. Pot de 22cm de diamètre. Aime le soleil.', 'meilleure vente', 22,'1'),
(2,'Pilea', 'Petite plante verte en pot. Pot de 12cm de diamètre. Aime l''ombre.', 'meilleure vente', 18, '2'),
(3,'Ficus', 'Belle plante verte en pot. Pot de 18cm de diamètre. Aime le soleil et a besoin de beaucoup d''eau.','meilleure vente', 14, '3'),
(4,'Monstera', 'Superbe plante verte et son pot en céramique de 22cm de diamètre. A besoin de soleil.', 'meilleure vente', 34, '4'),
(5,'Bonzai', 'Belle plante verte en pot. Pot de 22cm de diamètre. Aime le soleil.', 'nouveauté', 9, '5'),
(6,'Cactus', 'Belle plante verte en pot. Pot de 15cm de diamètre. Aime le soleil et la chaleur, ne pas trop l''arroser !.', 'nouveauté', 23, '6');
