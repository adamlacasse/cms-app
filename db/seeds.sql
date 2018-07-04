USE kigelia;

INSERT INTO users (name, password, permCU, permCUD, createdAt, updatedAt)
VALUES ('Adam', 'abc123', TRUE, TRUE, NOW(), NOW()),
('Ty', 'abc123', TRUE, TRUE, NOW(), NOW()),
('Howard', 'abc123', TRUE, TRUE, NOW(), NOW()),
('Bowden', 'abc123', TRUE, TRUE, NOW(), NOW());

INSERT INTO cards (title, image, text, list_group1, list_group2, list_group3, createdAt, updatedAt)
VALUES ('card one', 'foo.jpg', 'this is the text field', 'this is the group one field', 'this is the group two field', 'this is the group three field', NOW(), NOW()),
('card two', 'foo.jpg', 'this is the text field', 'this is the group one field', 'this is the group two field', 'this is the group three field', NOW(), NOW()),
('card three', 'foo.jpg', 'this is the text field', 'this is the group one field', 'this is the group two field', 'this is the group three field', NOW(), NOW());
