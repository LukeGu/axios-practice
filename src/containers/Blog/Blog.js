import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts/:id" exact component={FullPost} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
