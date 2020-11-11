/**
 * 1. Get candidates from mock API
 * 2. Show a loading indicator (spinner)
 * 3. Handle loading errors
 * 4. Create voting page
 * 4. Configure routes between pages
 * 5. Vote on candidate
 * 6. Display votes on candidates page
 * 7. Styling
 * 8. Using reusable components
 * 9. Keys
 * 10. propTypes
 * 11. Testing
 *
 */

import React from "react";

import { getCandidates } from "./api/candidatesApi";
import { Link } from "react-router-dom";
export class Candidates extends React.Component {
  constructor(props) {
    super(props); //this must be first line in every contstuvtor

    this.state = {
      candidates: [],
    };
  }
  async componentDidMount() {
    const candidates = await getCandidates();
    this.setState({ candidates: candidates });
  }
  renderCandidate(candidate) {
    return (
      <tr key={candidate.id}>
        <td>
          <Link to={"/details/" + candidate.id}> {candidate.name}</Link>
        </td>
        <td>{candidate.rank}</td>
      </tr>
    );
  }

  // The candidate argument is automatically injected by the map function.
  render() {
    return (
      <ul>
        <h1>Candidates</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>{this.state.candidates.map(this.renderCandidate)}</tbody>
        </table>
      </ul>
    );
  }
}
