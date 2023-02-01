import * as React from "react"; // 兼容性好
import * as ReactDOM from "react-dom"; // 兼容性好
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Toastify {
  public readonly root: any;
  public position: any;
  constructor(props: { id: string; position?: string }) {
    this.root = ReactDOM.createRoot(document.getElementById(props.id)); // https://beta.reactjs.org/reference/react/createElement 示例
    this.setPosition(props.position);
    this.root.render(
      <>
        <ToastContainer />
      </>
    );
  }

  public setPosition(p: string): void {
    switch (p) {
      case "ToCenter":
      case "TOP_CENTER":
        this.position = toast.POSITION.TOP_CENTER;
        break;
      case "ToLeft":
      case "TOP_LEFT":
        this.position = toast.POSITION.TOP_LEFT;
        break;
      case "ToRight":
      case "TOP_RIGHT":
        this.position = toast.POSITION.TOP_RIGHT;
        break;
      case "BoCenter":
      case "BOTTOM_CENTER":
        this.position = toast.POSITION.BOTTOM_CENTER;
        break;
      case "BoLeft":
      case "BOTTOM_LEFT":
        this.position = toast.POSITION.BOTTOM_LEFT;
        break;
      case "BoRight":
      case "BOTTOM_RIGHT":
      default:
        this.position = toast.POSITION.BOTTOM_RIGHT;
        break;
    }
  }
  public getPosition(p: string): any {
    switch (p) {
      case "ToCenter":
      case "TOP_CENTER":
        return toast.POSITION.TOP_CENTER;
      case "ToLeft":
      case "TOP_LEFT":
        return toast.POSITION.TOP_LEFT;
      case "ToRight":
      case "TOP_RIGHT":
        return toast.POSITION.TOP_RIGHT;
      case "BoCenter":
      case "BOTTOM_CENTER":
        return toast.POSITION.BOTTOM_CENTER;
      case "BoLeft":
      case "BOTTOM_LEFT":
        return toast.POSITION.BOTTOM_LEFT;
      case "BoRight":
      case "BOTTOM_RIGHT":
        return toast.POSITION.BOTTOM_RIGHT;
      default:
        return this.position;
    }
  }

  public success(message: string, p?: string): void {
    toast.success(message, {
      position: this.getPosition(p),
    });
  }
  public error(message: string, p?: string): void {
    toast.error(message, {
      position: this.getPosition(p),
    });
  }
  public warn(message: string, p?: string): void {
    toast.warn(message, {
      position: this.getPosition(p),
    });
  }
  public info(message: string, p?: string): void {
    toast.info(message, {
      position: this.getPosition(p),
    });
  }

  // __.toastify.test()
  public test(): void {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  }
}
