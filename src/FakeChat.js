import { useEffect, useState } from "react";
const lessons = [
  { id: 1, name: "ABC" },
  { id: 2, name: "ABCD" },
  { id: 3, name: "ABCDE" },
];

function FakeChat() {
  const [lessonId, setLesson] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLesson(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeChat;
