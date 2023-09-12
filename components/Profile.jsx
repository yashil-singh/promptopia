import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  isLoading,
  isEmpty,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>{" "}
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="my-12 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      {isLoading ? (
        <h1 className="text-santoshi text-xl text-gray-700 text-center">
          Loading...
        </h1>
      ) : (
        isEmpty && (
          <h1 className="text-santoshi text-xl text-gray-700 text-center">
            It's a little empty here...
          </h1>
        )
      )}
    </section>
  );
};

export default Profile;
