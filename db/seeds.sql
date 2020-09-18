INSERT INTO user (username, email, password)
VALUES 
  ("marlon", "marlon.guandique@gmai.com", "apple123”);

INSERT INTO post (title, post_text, user_id, created_at, updated_at)
VALUES 
  ("test link for", "https://safr.chulopapi.com", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES 
  ("Comments for this test!",", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
