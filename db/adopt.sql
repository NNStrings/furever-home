CREATE TABLE pet_adoption (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_type VARCHAR(255) NOT NULL,
    pet_photo_url VARCHAR(255) NOT NULL,
    pet_description TEXT,
    contact_info VARCHAR(255) NOT NULL,
    pet_location VARCHAR(255) NOT NULL,
    adopted BOOLEAN NOT NULL DEFAULT FALSE
);