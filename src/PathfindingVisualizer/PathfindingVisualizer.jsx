import React, { Component } from "react";
import Node from "./Node/Node";

import "./PathfindingVisualizer.css";

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let col = 0; col < 50; col++) {
      const currentCol = [];
      for (let row = 0; row < 20; row++) {
        const currentNode = {
          col,
          row,
          isStart: col === 5 && row === 10,
          isFinish: col === 15 && row === 10,
        };
        currentCol.push([]);
      }
      nodes.push(currentCol);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => (
                <Node
                  key={nodeIdx}
                  isStart={isStart}
                  isFinsh={isFinish}
                  test={"foo"}
                  test={"kappa"}
                ></Node>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}
