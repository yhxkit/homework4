import React, { Component } from "react";
import axios from "axios";

const FORTUNE_API = "http://askat.me:8000/api/fortune/";

class Fortune extends Component {
  state = {
    loading: false,
    data: null
  };

  getData = async () => {
    try {
      // this.setState({
      //   loading: true
      // });
      const response = await axios.get(
        `${FORTUNE_API}${this.props.match.params.birthday}`
      );
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.error(e);
      alert("ooops~");
    }
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    window.setTimeout(this.getData, 2000);
    // this.getData();
  }

  render() {
    const { name, birthday } = this.props.match.params;
    const { loading, data } = this.state;
    return (
      <div className="Fortune">
        {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
        <div>{!loading && data && !data.error && data}</div>
        <div>
          {name} was born in {birthday}
        </div>
      </div>
    );
  }
}

export default Fortune;
