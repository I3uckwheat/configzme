import React from "react";

class FeatureList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="get-started">
          <p><span className="name">Run</span>:<span className="command">curl https://configz.me</span></p>
        </div>
        <div className="features">
          <div className="feature">
            <p><span className="name">Register</span>: <span className="command">curl -u &lt;username&gt; -X POST https://configz.me</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Uploading Files</span>: <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Getting Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Listing Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/files</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Updating Files</span>: <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;/update</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Deleting Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;/destroy</span></p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeatureList;
