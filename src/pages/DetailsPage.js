import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { Component } from "react";
import ItemDetails from "../json/itemDetails.json";
import Fade from "react-reveal/Fade";

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
              <Fade>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />

        <Fade>
          <Footer />
        </Fade>
      </>
    );
  }
}
