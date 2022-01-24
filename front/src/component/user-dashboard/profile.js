import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios";

class Profile extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col-lg-11">
          <div className="table-responsive table--no-card m-b-30">
            <table className="table table-borderless table-striped table-earning">
              <thead>
                <tr>
                  <th>date</th>
                  <th>order ID</th>
                  <th>name</th>
                  <th className="text-right">price</th>
                  <th className="text-right">quantity</th>
                  <th className="text-right">total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2018-09-29 05:57</td>
                  <td>100398</td>
                  <td>iPhone X 64Gb Grey</td>
                  <td className="text-right">$999.00</td>
                  <td className="text-right">1</td>
                  <td className="text-right">$999.00</td>
                </tr>
                <tr>
                  <td>2018-09-28 01:22</td>
                  <td>100397</td>
                  <td>Samsung S8 Black</td>
                  <td className="text-right">$756.00</td>
                  <td className="text-right">1</td>
                  <td className="text-right">$756.00</td>
                </tr>
                <tr>
                  <td>2018-09-27 02:12</td>
                  <td>100396</td>
                  <td>Game Console Controller</td>
                  <td className="text-right">$22.00</td>
                  <td className="text-right">2</td>
                  <td className="text-right">$44.00</td>
                </tr>
                <tr>
                  <td>2018-09-26 23:06</td>
                  <td>100395</td>
                  <td>iPhone X 256Gb Black</td>
                  <td className="text-right">$1199.00</td>
                  <td className="text-right">1</td>
                  <td className="text-right">$1199.00</td>
                </tr>
                <tr>
                  <td>2018-09-25 19:03</td>
                  <td>100393</td>
                  <td>USB 3.0 Cable</td>
                  <td className="text-right">$10.00</td>
                  <td className="text-right">3</td>
                  <td className="text-right">$30.00</td>
                </tr>
                <tr>
                  <td>2018-09-29 05:57</td>
                  <td>100392</td>
                  <td>Smartwatch 4.0 LTE Wifi</td>
                  <td className="text-right">$199.00</td>
                  <td className="text-right">6</td>
                  <td className="text-right">$1494.00</td>
                </tr>
                <tr>
                  <td>2018-09-24 19:10</td>
                  <td>100391</td>
                  <td>Camera C430W 4k</td>
                  <td className="text-right">$699.00</td>
                  <td className="text-right">1</td>
                  <td className="text-right">$699.00</td>
                </tr>
                <tr>
                  <td>2018-09-22 00:43</td>
                  <td>100393</td>
                  <td>USB 3.0 Cable</td>
                  <td className="text-right">$10.00</td>
                  <td className="text-right">3</td>
                  <td className="text-right">$30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
         
      </div>
    );
  }
}

export default Profile;
