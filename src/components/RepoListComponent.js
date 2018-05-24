import React from "react";
import Table from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    accessor: "url",
    Cell: props => <a href={props.value}>{props.original.name}</a>
  },
  {
    Header: "Description",
    accessor: "description"
  },
  {
    Header: "Forks",
    accessor: "forks_count"
  },
  {
    Header: "Watchers",
    accessor: "watchers_count"
  }
];

export default class RepoListComponent extends React.Component {
  render() {
    const { repos } = this.props;
    return <Table data={repos} columns={columns} />;
  }
}
