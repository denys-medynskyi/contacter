import { useState } from "react";

export default (initialState) => {
  const [tags, setTags] = useState(initialState);
  const suggestedTags = [
    { id: 3, name: "Bananas" },
    { id: 4, name: "Mangos" },
    { id: 5, name: "Lemons" },
    { id: 6, name: "Apricots" }
  ];

  return {
    tags,
    suggestedTags,
    addTag: tag => {
      // do not allow to add tag with the same name
      if (tags.some(tagsEl => tagsEl.name === tag.name)) {
        return null;
      }

      const updatedTags = [].concat(tags, tag);
      setTags(updatedTags);
    },

    removeTag: i => {
      const updatedTags = tags.slice(0);
      updatedTags.splice(i, 1);
      setTags(updatedTags);
    }
  };
}
