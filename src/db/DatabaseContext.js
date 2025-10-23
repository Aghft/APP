import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initDatabase, fetchCourses, fetchLessonsForCourse, fetchNotifications } from './database';

const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const [db, setDb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function bootstrap() {
      try {
        const instance = await initDatabase();
        if (!isMounted) return;
        setDb(instance);
        const [coursesData, notificationData] = await Promise.all([
          fetchCourses(instance),
          fetchNotifications(instance),
        ]);
        if (!isMounted) return;
        setCourses(coursesData);
        setNotifications(notificationData);
      } catch (error) {
        console.error('Failed to initialize database', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    bootstrap();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      db,
      loading,
      courses,
      notifications,
      async getLessons(courseId) {
        if (!db) return [];
        return fetchLessonsForCourse(db, courseId);
      },
      async refreshCourses() {
        if (!db) return;
        const updated = await fetchCourses(db);
        setCourses(updated);
      },
    }),
    [courses, db, loading, notifications],
  );

  return <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>;
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used inside DatabaseProvider');
  }
  return context;
}
