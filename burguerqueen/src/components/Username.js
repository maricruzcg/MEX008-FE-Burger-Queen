import React from 'react';
import Btn from "./Btn";


class Username extends React.Component {
  render() {
    return (
      <div className={"input-group"}>
        <div className={"input-group-prepend"}>
          <span className={"input-group-text"}>Nombre</span>
        </div>
        <input type="text" aria-label="First name" className={"form-control"}/>
        <input type="text" aria-label="Last name" className={"form-control"}/>
        <Btn class="btn btn-dark" href="/Menu" type="submit" text="Guardar"/>

      </div>
    );
  }
};

// Username = withRouter(Username);
export default Username;
