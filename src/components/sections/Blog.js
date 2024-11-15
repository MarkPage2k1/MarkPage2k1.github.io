import { Fragment, useContext } from "react";
import Context from "../../context/context";

const BlogSection = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Blog</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" 
                  // onClick={() => changeNav("blog-post")}
                  >
                  <img
                    src="images/blog/cloud_computing.jpg"
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" 
                  // onClick={() => changeNav("blog-post")}
                  >
                  <span className="date">x x, 202x</span>
                </a>
                <a
                  href="#"
                  // onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  Your Beginner's Guide to Cloud Adventure
                </a>
                <div className="text">
                  <p>
                    Content Coming Soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" 
                  // onClick={() => changeNav("blog-post")}
                  >
                  <img
                    src="images/blog/aws_security.jpg"
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" 
                  // onClick={() => changeNav("blog-post")}
                  >
                  <span className="date">x x, 202x</span>
                </a>
                <a
                  href="#"
                  // onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  Exploring the Crucial Link Between DevOps and Security in AWS
                </a>
                <div className="text">
                  <p>
                    Content Coming Soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="pager">
          <nav className="navigation pagination">
            <div className="nav-links">
              <span className="page-numbers current">1</span>
              <a className="page-numbers" href="#">
                2
              </a>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;

export const BlogClassic = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">Latest Posts</div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Design</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>19</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  Two Before Arrow Not Relied
                </a>
                <div className="category">Coding</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Travel</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
