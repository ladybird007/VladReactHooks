import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GithubContext } from '../context/github/githubContext';

export const Profile = () => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = useParams();

  useEffect(() => {
    getUser(urlName.name); 
    getRepos(urlName);
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading...</h3>
  } 

  const {
    name, company, avatar_url, 
    location, bio, blog, login, 
    html_url, followers, following,
    public_repos, public_gists
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">Back to Home</Link>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="text-center">
            <img src={avatar_url} alt={name} />
            <h2>{name}</h2>
            {location && <p><strong>Location:</strong> {location}</p>}
            {bio && <p><strong>BIO:</strong> {bio}</p>}
            <a href={html_url} className="btn btn-link">Open profile</a>
            {login && <p><strong>Username:</strong> {login}</p>}
            {company && <p><strong>Company:</strong> {company}</p>}
            {blog && <p><strong>Blog:</strong> {blog}</p>}

            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-primary">Following: {following}</div>
            <div className="badge badge-primary">Public repos: {public_repos}</div>
            <div className="badge badge-primary">Public gists: {public_gists}</div>
          </div>
        </div>
      </div>
    </>
  )
}