import React, { useContext } from "react";
import { Search } from "../components/Search";
import { Card } from "../components/Card";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext);

  // generate array with 15 items (for test)
  /*const cards = new Array(15)
    .fill('')
    .map((_, i) => i);*/
  
  return (
    <>
      <Search />
      <div className="row pt-4">
        {loading 
          ? <h4 className="text-center">loading...</h4>
          : users.map((user) => (
              <div className="col col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            ))
        }
      </div>
    </>
  )
}