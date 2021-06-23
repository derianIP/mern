import FeaturedImage from "parts/FeaturedImage";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import ItemDetails from "../json/itemDetails.json";

export default class DetailsPage extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumbList} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">Booking detail</div>
          </div>
        </section>
      </>
    );
  }
}
