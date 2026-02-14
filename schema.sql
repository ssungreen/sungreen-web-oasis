DROP TABLE IF EXISTS cases;

CREATE TABLE cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT,
  date TEXT,
  imageUrl TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial dummy data for testing
INSERT INTO cases (title, description, location, date, imageUrl) VALUES 
('주택용 태양광 3kW', '경기도 용인시 전원주택 설치 사례입니다.', '경기도 용인시', '2023-11-15', 'https://placehold.co/600x400/264653/ffffff?text=Solar+Home'),
('상업용 태양광 50kW', '인천 남동공단 공장 지붕 설치 사례.', '인천광역시 남동구', '2023-10-20', 'https://placehold.co/600x400/2a9d8f/ffffff?text=Factory+Solar');
