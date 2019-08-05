import React from "react";
import Layout from '../../components/sidebar_layout/layout';
import { itemListDocs } from "../../utils/sidebar/item-list";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListDocs}>

      </Layout>
    )
  }
}

export default IndexRoute