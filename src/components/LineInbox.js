import 'cirrus-ui';

import Navbar from "./Navbar";

const LineInbox = () => {

  return (
      <div className="LineInbox fullscreen page-bg">
        <Navbar/>
        <div className="hero">
          <div className="hero-body">
            <div className="content">
              <div className="card my-3">
                <div className="card__header my-2 px-3">
                  <h3 className="title">Line Inbox</h3>
                </div>
                <div className="card__body mx-2">
                  <table className="table striped col-12">
                    <thead>
                    <tr>
                      <th className="col-1"><abbr title="Title1">No.</abbr></th>
                      <th className="col-10"><abbr title="Title2">Title</abbr></th>
                      <th className="col-1"><abbr title="Title1">Sender</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th>1</th>
                      <td>Row:1 Cell:1</td>
                      <td>Villager 1</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Row:2 Cell:1</td>
                      <td>Villager 2</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Row:3 Cell:1</td>
                      <td>Villager 3</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default LineInbox;