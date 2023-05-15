import { Fragment } from "react";
function Layout(props) {
  return (
    <Fragment>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;
