import React, { Component } from "react";

export class Details extends Component {
  render() {
    //test deploy
    return (
      <div className="container">
        <div className="p-4 mt-4">
          <table>
            <tbody>
              <tr>
                <td>
                  <p className="key">Where</p>
                </td>
                <td>
                  <p>Log Cabin Ranch, 55-57 Rankins Rd, Monbulk VIC 3793</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="key">Date</p>
                </td>
                <td>
                  <p>May the 4th, Wednesday, 2021</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="key">Time</p>
                </td>
                <td>
                  <p>3pm ceremony start, arrive by 2:45pm</p>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <p>
            Fourth? time lucky! We are hoping that everyone can still make it
            despite it being a weekday. If you could please RSVP once again
            incase your plans have changed. Same time, same{" "}
            <a
              style={{ color: "#a15750" }}
              href="https://goo.gl/maps/bysyisDSeJqYC4Ae9"
              target="_blank"
              rel="noopener noreferrer"
            >
              place.
            </a>{" "}
          </p>
          <p>
            The ranch has complimentary accommodation for up to 70 guests (BYO
            blankets, pillows &#38; sheets) so you can celebrate late into the
            night with us and wake for a camp-style breakfast in the morning.
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
