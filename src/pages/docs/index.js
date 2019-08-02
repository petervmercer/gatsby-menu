import React from "react";


class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListDocs}>

      </Layout>
    )
  }
}

export default IndexRoute