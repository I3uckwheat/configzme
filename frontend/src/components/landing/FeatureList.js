import React from "react";

class FeatureList extends React.Component {
  render() {
    return (
      <ul>
        {Object.values(this.props.features).map((feature, key) => (
          <li key={key} index={key}>
            {feature.name}
            {feature.command}
          </li>
        ))}
      </ul>
    );
  }
}

export default FeatureList;
