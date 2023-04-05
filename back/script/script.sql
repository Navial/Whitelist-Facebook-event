DROP SCHEMA IF EXISTS whitelistFbEvent CASCADE;
CREATE SCHEMA whitelistFbEvent;

CREATE TABLE whitelistFbEvent.guests
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    status VARCHAR(15),
    is_in BOOLEAN DEFAULT false,
    is_banned BOOLEAN DEFAULT false
);
