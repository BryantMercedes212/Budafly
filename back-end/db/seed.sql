\c bud_dev;

INSERT INTO products (name, description, price, image, user_id) 
VALUES
('Wedding Cake','Wedding Cake, is a potent type of indica-hybrid marijuana strain made by crossing Triangle Kush with Animal Mints.', 42, 'https://leaf.expert/wp-content/uploads/2018/04/image3-1.jpeg', 2),
('Gelato', 'Gelato, is an evenly-balanced hybrid marijuana strain made from a crossing of Sunset Sherbet and Thin Mint Girl Scout Cookies.', 52, 'https://www.potvalet.com/wp-content/uploads/2018/05/Gelato-Cannabis-Strain.jpg', 6),
('Dosidos', 'Dosidos, is an indica-dominant hybrid marijuana.', 52, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JsD7Cg9HgNTqSC2HQtTIVQHaEo%26pid%3DApi&f=1', 4),
('Ice','Ice is a hybrid marijuana strain made by combining multiple strains into one seed line: Skunk #1, Afghani, Northern Lights, and Shiva.', 42, 'https://www.mailorder-marijuana.com/wp-content/uploads/2020/07/ice-cream-weed-strain.jpg', 1);


INSERT INTO users (firstname, lastname, email, phone_number)
VALUES 
('Seller', 'One', 'ymail1@ymail.com', '212-111-1111'),
('Seller', 'Two', 'ymail2@ymail.com', '212-111-1112'),
('Seller', 'Three', 'ymail3@ymail.com', '212-111-1113'),
('Seller', 'Four', 'hmail4@ymail.com', '212-111-1114'),
('Seller', 'Five', 'imail5@ymail.com', '212-111-1115'),
('Seller', 'Six', 'jmail6@ymail.com', '212-111-1116');
