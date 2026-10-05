CREATE TABLE IF NOT EXISTS votes (
  session    TEXT    NOT NULL,
  device     TEXT    NOT NULL,
  stars      INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (session, device)
);
