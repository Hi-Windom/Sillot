import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export function Example(id) {
  window.__toastify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  };

  const root = ReactDOM.createRoot(document.getElementById(id));  // https://beta.reactjs.org/reference/react/createElement 示例
  root.render((
    <>
      <button onClick={window.__toastify} style={{display: "none"}}>Notify</button>
      <ToastContainer />
    </>
  ));
}
