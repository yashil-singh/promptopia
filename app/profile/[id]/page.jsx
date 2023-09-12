"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";
import { faIR } from "date-fns/locale";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      const dataLength = await data.length;
      if (dataLength === 0) {
        setIsEmpty(true);
      }
      setUserPosts(data);
    };

    if (params?.id) {
      fetchPosts();
      setIsLoading(false);
    }
  }, [params.id]);

  return (
    <Profile
      name={userName + "'s"}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
      isLoading={isLoading}
      isEmpty={isEmpty}
    />
  );
};

export default UserProfile;
