import 'cirrus-ui';

import Navbar from "./Navbar";

const CamInbox = () => {

  return (
      <div className="Login">
        <Navbar/>
        <div className="hero">
          <div className="hero-body">
            <div className="content">
              <div>
                <h3 className="title">Cam Inbox</h3>
              </div>
              <table className="table striped col-12">
                <thead>
                <tr>
                  <th className="col-2"><abbr title="Title1">No.</abbr></th>
                  <th className="col-10"><abbr title="Title2">Title</abbr></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th>1</th>
                  <td>Row:1 Cell:1</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Row:2 Cell:1</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Row:3 Cell:1</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

  );
}

export default CamInbox;