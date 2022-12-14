import { useEffect, useState } from "react";

function Avatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} width="40%" />}
    </div>
  );
}

export default Avatar;
