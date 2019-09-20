import React from 'react';

class Username extends React.Component {
    render() {
        return (<div className={"input-group"}>
        <div className={"input-group-prepend"}>
          <span className={"input-group-text"}>Nombre</span>
        </div>
        <input type="text" aria-label="First name" className={"form-control"}/>
        <input type="text" aria-label="Last name" className={"form-control"}/>
        <button type="submit" className={"btn btn-dark"}>Guardar</button>
      </div>)
            }
        };
        
        // Username = withRouter(Username);
        export default Username;