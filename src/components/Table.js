import React from "react";
import reqwest from "reqwest";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

const associateColors = [
  { type: "TV", color: "geekblue" },
  { type: "Movie", color: "volcano" },
  { type: "Special", color: "magenta" },
  { type: "ONA", color: "purple" },
  { type: "OVA", color: "cyan" }
];

class TableFetch extends React.Component {
  state = {
    data: [],
    pagination: { defaultPageSize: 5 },
    loading: false
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  fetch = (params = {}) => {
    console.log("params:", params);
    this.setState({ loading: true });
    reqwest({
      url:
        "https://cors-anywhere.herokuapp.com/http://api.jikan.moe/v3/search/anime?q=pokemon",
      method: "get",
      data: {
        ...params
      },
      type: "json"
    }).then(data => {
      const pagination = { ...this.state.pagination };
      pagination.total = data.totalCount;
      this.setState({
        loading: false,
        data: data.results,
        pagination
      });
    });
  };

  render() {
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        width: "20%",
        render: title => (
          <Link
            to={{
              pathname: `/${title}`,
              state: {
                data: this.state.data,
                title
              }
            }}
          >
            {title}
          </Link>
        )
      },
      {
        title: "Type",
        dataIndex: "type",
        width: "20%",
        render: type => (
          <span>
            {associateColors.map((item, i) => {
              let tag =
                type === item.type ? (
                  <Tag key={i} color={item.color}>
                    {item.type}
                  </Tag>
                ) : (
                  ""
                );
              return tag;
            })}
          </span>
        )
      },
      {
        title: "N° Episodes",
        dataIndex: "episodes"
      },
      {
        title: "Rating",
        dataIndex: "score",
        defaultSortOrder: "descend",
        render: score => (
          <span>
            {score >= 7 && (
              <span style={{ color: "#0ee67b", fontWeight: "bold" }}>
                {score}
              </span>
            )}
            {score > 6 && score < 7 && (
              <span style={{ color: "#ebc500", fontWeight: "bold" }}>
                {score}
              </span>
            )}
            {score <= 6 && (
              <span style={{ color: "#ff0015", fontWeight: "bold" }}>
                {score}
              </span>
            )}
          </span>
        )
      }
    ];

    return (
      <div className="Table__container">
        <Table
          columns={columns}
          rowKey={record => record.mal_id}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default TableFetch;
