import React, { Component } from 'react';
import Loadable from 'react-loadable';
import PostList from '../post-list';
import Loader from '../loader';
import posts from '../../dummy-posts';

const AsyncPostEditor = Loadable({
  loader: () => import('../post-editor' /* webpackChunkName: "post-editor" */),
  loading: Loader,
});

export default class PostsPage extends Component {
  state = {
    editorVisible: false,
  };

  showEditor = () => this.setState({ editorVisible: true });

  hideEditor = () => this.setState({ editorVisible: false });

  render() {
    const { editorVisible } = this.state;

    return (
      <div>
        <h1>Posts Page</h1>

        <PostList posts={posts} />

        {editorVisible ? (
          <AsyncPostEditor onCancel={this.hideEditor} />
        ) : (
          <button onClick={this.showEditor}>Create post</button>
        )}
      </div>
    );
  }
}
