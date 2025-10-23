import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const database_name = 'learning_app.db';
const database_version = '1.0';
const database_displayname = 'Learning App Offline Store';
const database_size = 200000;

export const TABLES = {
  COURSES: 'courses',
  LESSONS: 'lessons',
  NOTIFICATIONS: 'notifications',
};

export async function openDatabase() {
  return SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size,
  );
}

export async function initDatabase() {
  const db = await openDatabase();
  await db.executeSql('PRAGMA foreign_keys = ON;');

  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS ${TABLES.COURSES} (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      category TEXT,
      progress INTEGER,
      color TEXT,
      description TEXT
    );`,
  );

  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS ${TABLES.LESSONS} (
      id INTEGER PRIMARY KEY NOT NULL,
      course_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      duration TEXT,
      FOREIGN KEY(course_id) REFERENCES ${TABLES.COURSES}(id) ON DELETE CASCADE
    );`,
  );

  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS ${TABLES.NOTIFICATIONS} (
      id INTEGER PRIMARY KEY NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    );`,
  );

  const [courses] = await db.executeSql(`SELECT COUNT(*) as count FROM ${TABLES.COURSES};`);
  const count = courses.rows.item(0).count;

  if (count === 0) {
    await seedDatabase(db);
  }

  return db;
}

async function seedDatabase(db) {
  const courses = [
    {
      id: 1,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      progress: 65,
      color: '#FF8B6A',
      description:
        'Learn how to create intuitive interfaces with research-driven design systems.',
      lessons: [
        { title: 'User Research Basics', duration: '12:48' },
        { title: 'Wireframes & Flows', duration: '10:02' },
        { title: 'Design Tokens & Accessibility', duration: '16:34' },
      ],
    },
    {
      id: 2,
      title: 'React Native Advanced',
      category: 'Development',
      progress: 30,
      color: '#61DAFB',
      description:
        'Ship high-performance mobile apps with animations, native modules, and testing.',
      lessons: [
        { title: 'Navigation Patterns', duration: '11:11' },
        { title: 'Reanimated Gestures', duration: '14:45' },
        { title: 'Offline First Data', duration: '19:01' },
      ],
    },
    {
      id: 3,
      title: 'Productivity for Creators',
      category: 'Productivity',
      progress: 82,
      color: '#7B61FF',
      description:
        'Build sustainable routines, focus blocks, and accountability workflows.',
      lessons: [
        { title: 'Planning Sprints', duration: '09:35' },
        { title: 'Async Collaboration', duration: '08:55' },
        { title: 'Deep Work Frameworks', duration: '13:17' },
      ],
    },
  ];

  const notifications = [
    { id: 1, message: '🎉 32% more consistent this week. Keep going!', created_at: new Date().toISOString() },
    { id: 2, message: '🔥 New live session for React Native Advanced tomorrow.', created_at: new Date().toISOString() },
  ];

  await db.transaction(async (tx) => {
    for (const course of courses) {
      await tx.executeSql(
        `INSERT INTO ${TABLES.COURSES} (id, title, category, progress, color, description) VALUES (?, ?, ?, ?, ?, ?);`,
        [course.id, course.title, course.category, course.progress, course.color, course.description],
      );

      for (const lesson of course.lessons) {
        await tx.executeSql(
          `INSERT INTO ${TABLES.LESSONS} (course_id, title, duration) VALUES (?, ?, ?);`,
          [course.id, lesson.title, lesson.duration],
        );
      }
    }

    for (const notification of notifications) {
      await tx.executeSql(
        `INSERT INTO ${TABLES.NOTIFICATIONS} (id, message, created_at) VALUES (?, ?, ?);`,
        [notification.id, notification.message, notification.created_at],
      );
    }
  });
}

export async function fetchCourses(db) {
  const [results] = await db.executeSql(`SELECT * FROM ${TABLES.COURSES};`);
  const courses = [];
  for (let i = 0; i < results.rows.length; i += 1) {
    courses.push(results.rows.item(i));
  }
  return courses;
}

export async function fetchLessonsForCourse(db, courseId) {
  const [results] = await db.executeSql(
    `SELECT * FROM ${TABLES.LESSONS} WHERE course_id = ?;`,
    [courseId],
  );
  const lessons = [];
  for (let i = 0; i < results.rows.length; i += 1) {
    lessons.push(results.rows.item(i));
  }
  return lessons;
}

export async function fetchNotifications(db) {
  const [results] = await db.executeSql(`SELECT * FROM ${TABLES.NOTIFICATIONS} ORDER BY created_at DESC;`);
  const list = [];
  for (let i = 0; i < results.rows.length; i += 1) {
    list.push(results.rows.item(i));
  }
  return list;
}
