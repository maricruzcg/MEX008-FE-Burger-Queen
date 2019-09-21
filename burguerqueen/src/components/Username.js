import React from 'react';

class Username extends React.Component {
    render() {
        return (<div className={"input-group"}>
        <div className={"input-group-prepend"}>
          <span className={"input-group-text"}>Nombre</span>
        </div>
        <input type="text" aria-label="First name" className={"form-control"}/>
        <input type="text" aria-label="Last name" className={"form-control"}/>
        <a href="/Menu">
        <button type="submit" className={"btn btn-dark"}>Guardar</button>
        </a>
      </div>)
            }
        };
        
        // Username = withRouter(Username);
        export default Username;