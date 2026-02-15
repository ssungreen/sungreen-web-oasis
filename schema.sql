DROP TABLE IF EXISTS cases;

CREATE TABLE cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  location TEXT,
  date TEXT,
  imageUrl TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial dummy data for testing
INSERT INTO cases (title, description, location, date, imageUrl, content) VALUES 
('주택용 태양광 3kW', '경기도 용인시 전원주택 설치 사례입니다.', '경기도 용인시', '2023-11-15', 'https://placehold.co/600x400/264653/ffffff?text=Solar+Home', '<p>경기도 용인시에 위치한 전원주택에 3kW 태양광 시스템을 설치했습니다.</p><p>고객님의 월 평균 전기 사용량을 분석하여 최적의 용량을 제안드렸고, 지붕 방향과 경사각을 고려한 맞춤 설계를 진행했습니다.</p>'),
('상업용 태양광 50kW', '인천 남동공단 공장 지붕 설치 사례.', '인천광역시 남동구', '2023-10-20', 'https://placehold.co/600x400/2a9d8f/ffffff?text=Factory+Solar', '<p>인천 남동공단에 위치한 제조업체 공장 지붕에 50kW 규모의 태양광 시스템을 설치한 사례입니다.</p><p>넓은 지붕 면적을 활용하여 발전 효율을 극대화했습니다.</p>');
