import React from "react";
import Pdf from "react-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        Hai
      </div>

      {/* <Pdf targerRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download</button>}
      </Pdf> */}
    </>
  );
};

export default PDF;
